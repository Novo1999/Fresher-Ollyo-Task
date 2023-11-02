import { useContext, useState } from "react"
import AddImages from "./AddImages"
import { GalleryContext } from "../App"
import SingleImage from "./SingleImage"
import {
 DndContext,
 closestCenter,
 MouseSensor,
 TouchSensor,
 DragOverlay,
 useSensor,
 useSensors,
} from '@dnd-kit/core';
import {
 arrayMove,
 SortableContext,
 rectSortingStrategy,
} from '@dnd-kit/sortable';

import { SortableImage } from "./SortableImage"
import Grid from "./Grid";
import Image from "./Image";


const Gallery = () => {
 const { imageIndex, setImageIndex } = useContext(GalleryContext)
 /* Using touch and mouse sensor as those are detected while user tries to drag and drop.
 Adding activationConstraint so the click is detected when the user clicks the checkbox, figuring out this part was quite challenging. The drag event was always initiating when I clicked the checkboxes.Now with the activationConstraint, the image drag event only initiates when its moved at least 8px */
 const sensors = useSensors(useSensor(MouseSensor, {
  activationConstraint: {
   distance: 8,
  }
 }), useSensor(TouchSensor, {
  activationConstraint: {
   // Adding the delay will allow the user to scroll the screen and prevent them from accidentally initiate a drag event
   delay: 100,
   // the drag operation will only be aborted if the touch input is moved by more than 5 pixels during the delay
   tolerance: 5
  }
 }))
 // this sets which image is being dragged and dropped
 const [activeId, setActiveId] = useState(null)

 // DND KIT DRAG EVENTS
 const handleDragStart = (event) => {
  setActiveId(event.active.id);
 }

 const handleDragEnd = (event) => {
  const { active, over } = event;

  // if the dragged image id and the image under it does not match, change their index to change the position
  if (active.id !== over.id) {
   setImageIndex((items) => {
    const oldIndex = items.indexOf(active.id);
    const newIndex = items.indexOf(over.id);

    // the index of the array moves when the drag ends so the images change position
    return arrayMove(items, oldIndex, newIndex);
   });
  }
  // after drag ends no image is active
  setActiveId(null);
 }

 const handleDragCancel = () => {
  // if user cancels the drag then no image is active
  setActiveId(null);
 }

 return (
  <>
   <DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDragCancel={handleDragCancel}>
    <SortableContext items={imageIndex} strategy={rectSortingStrategy}>
     {/* Grid component that takes children */}
     <Grid>
      {imageIndex.map((imageNum, i) => {
       return <SortableImage key={imageNum} imageNum={imageNum} index={i} />
      })}
      <AddImages />
     </Grid>
    </SortableContext>
    {/* This lets the user see which image they are dragging */}
    <DragOverlay adjustScale={true}>
     {activeId ? (
      <Image imageNum={activeId} index={imageIndex.indexOf(activeId)} />
     ) : null}
    </DragOverlay>
   </DndContext>
   <SingleImage />
  </>
 )
}
export default Gallery
