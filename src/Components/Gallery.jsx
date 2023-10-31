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
 const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor))
 const [activeId, setActiveId] = useState(null)

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