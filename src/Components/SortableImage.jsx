import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Image from './Image';

export const SortableImage = (props) => {
 const sortable = useSortable({ id: props.imageNum });

 // arguments coming from dnd kits sortable 
 // setNodeRef will attach itself to the HTML element the user will try to sort by moving it
 // listener contains the event handlers for each sensor
 // useSortable also provides the transform and transition to properly do a smooth animation while the user sorts the images,transition helps with when the drag operation ends or cancels, the items are back to their final position
 const {
  attributes,
  listeners,
  setNodeRef,
  transform,
  transition,
 } = sortable;

 const style = {
  transform: CSS.Transform.toString(transform),
  transition
 };

 return (
  <Image
   index={props.index}
   imageNum={props.imageNum}
   ref={setNodeRef}
   style={style}
   {...props}
   {...attributes}
   {...listeners}
  />
 );
};
