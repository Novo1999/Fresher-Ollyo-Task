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
 PointerSensor,
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
 // Adding activationConstraint so the click is detected when the user clicks the checkbox, figuring out this part was quite challenging. The drag event was always initiating when I clicked the checkboxes.Now with the activationConstraint, the image drag event only initiates when its moved at least 8px
 const sensors = useSensors(useSensor(MouseSensor, {
  activationConstraint: {
   distance: 8,
  }
 }), useSensor(TouchSensor, {
  activationConstraint: {
   // Adding the delay will allow the user to scroll the screen and prevent them from accidentally initiate a drag event
   delay: 250,
   // the drag operation will only be aborted if the touch input is moved by more than 5 pixels during the delay
   tolerance: 5
  }
 }))
 // this sets which image is being dropped
 const [activeId, setActiveId] = useState(null)

 // DND KIT DRAG EVENTS
 const handleDragStart = (event) => {
  setActiveId(event.active.id);
 }

 const handleDragEnd = (event) => {
  const { active, over } = event;

  if (active.id !== over.id) {
   setImageIndex((items) => {
    const oldIndex = items.indexOf(active.id);
    const newIndex = items.indexOf(over.id);

    return arrayMove(items, oldIndex, newIndex);
   });
  }
  setActiveId(null);
 }

 const handleDragCancel = () => {
  setActiveId(null);
 }

 return (
  <>
   <DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDragCancel={handleDragCancel}>
    <SortableContext items={imageIndex} strategy={rectSortingStrategy}>
     <Grid>
      {imageIndex.map((imageNum, i) => {
       return <SortableImage key={imageNum} imageNum={imageNum} index={i} />
      })}
      <AddImages />
     </Grid>
    </SortableContext>
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