import { forwardRef, useContext } from "react";
import createImageSource from "../utils/createImageSource";
import { GalleryContext } from "../App";
import Checkbox from "./Checkbox";

const Image = forwardRef(({ imageNum, index, style, ...props }, ref) => {
 const { setCurrentImage, currentChecked, currentHovered, setCurrentHovered, currentImage } = useContext(GalleryContext)
 const inlineStyles = {
  transformOrigin: '0 0',
  // width: '8rem',
  margin: 'auto',
  backgroundImage: `url(${createImageSource(Number(imageNum))})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundColor: 'grey',
  opacity: currentChecked.includes(Number(imageNum)) ? '0.5' : '',
  ...style,
 };
 console.log(currentImage)

 return <div
  onMouseEnter={() => setCurrentHovered(index)}
  onMouseLeave={() => setCurrentHovered(null)} ref={ref}
  className={`${index === 0 ? 'col-span-2 row-span-2 w-96 h-96' : 'w-full h-full col-span-1'}
   relative rounded-lg border-2 shadow-lg border-black ${currentChecked.includes(Number(index)) ? '0.5' : ''}`} style={inlineStyles} {...props} >
  <Checkbox index={index} />
  {/* OVERLAY */}
  {currentHovered === index ? <div onClick={() => {
   document.getElementById('my_modal_2').showModal()
   setCurrentImage(index)
  }} className='absolute top-0 right-0 left-0 bottom-0 bg-black/[.50] z-0 animate-fade animate-duration-200 animate-ease-linear rounded-lg'></div> : ''}
 </div>;

})
export default Image
Image.displayName = 'Image'