import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Image from './Image';

export const SortableImage = (props) => {
 const sortable = useSortable({ id: props.imageNum });
 const {
  attributes,
  listeners,
  setNodeRef,
  transform,
  transition,
 } = sortable;

 const style = {
  transform: CSS.Transform.toString(transform),
  transition,
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
