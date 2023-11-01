import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Image from './Image';
import { useEffect, useState } from 'react';

export const SortableImage = (props) => {
 const [isDisabled, setIsDisabled] = useState(false)
 const sortable = useSortable({ id: props.imageNum, disabled: isDisabled });
 const {
  attributes,
  listeners,
  setNodeRef,
  transform,
  transition,
  isDragging,
 } = sortable;

 // console.log(isDisabled)
 // const handleCheckboxClick = (e) => {
 //  if (e.target.classList.contains('.image-checkbox'))
 //   console.log('YESSSSSSSSSSSSSSSSSSSS')
 //  setIsDisabled(true)
 // };

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
