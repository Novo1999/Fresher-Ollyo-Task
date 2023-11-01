import { forwardRef, useContext } from "react";
import createImageSource from "../utils/createImageSource";
import { GalleryContext } from "../App";
import Checkbox from "./Checkbox";

const Image = forwardRef(({ imageNum, index, style, ...props }, ref) => {
 const { setCurrentImage, currentChecked, currentHovered, setCurrentHovered } = useContext(GalleryContext)

 const inlineStyles = {
  transformOrigin: '0 0',
  backgroundImage: `url(${createImageSource(Number(imageNum))})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  ...style,
 };

 return <div

  onMouseEnter={() => setCurrentHovered(imageNum)}
  onMouseLeave={() => setCurrentHovered(null)} ref={ref}
  className={`${index === 0 ? 'col-span-2 row-span-2 w-96 h-96' : 'w-full h-full col-span-1'}
   relative rounded-lg border-2 shadow-lg border-black ${currentChecked.includes(Number(index)) ? 'opacity-50' : ''}`}
  style={inlineStyles} {...props} >
  {/* CHECKBOX */}
  <Checkbox imageNum={imageNum} />
  {/* OVERLAY BEHIND THE IMAGE WHEN CLICKED*/}
  {currentHovered === imageNum ? <div onClick={() => {
   document.getElementById('my_modal_2').showModal()
   setCurrentImage(imageNum)
  }} className='absolute top-0 right-0 left-0 bottom-0 bg-black/[.50] z-0 animate-fade animate-duration-200 animate-ease-linear rounded-lg'></div> : ''}
 </div>;

})
export default Image
Image.displayName = 'Image'