import { forwardRef, useContext } from "react";
import createImageSource from "../utils/createImageSource";
import { GalleryContext } from "../App";
import Checkbox from "./Checkbox";
import Overlay from "./Overlay";

const Image = forwardRef(({ imageNum, index, style, ...props }, ref) => {
 const { currentChecked, setCurrentHovered, isDarkMode } = useContext(GalleryContext)

 // transition and transform style coming from dnd kit
 const inlineStyles = {
  ...style,
 };

 // when image is hovered, setting the current hovered image number to state 
 // the image at index 0 will always be large as it is a featured image
 return <div
  onMouseEnter={() => setCurrentHovered(imageNum)}
  onMouseLeave={() => setCurrentHovered(-1)} ref={ref} style={inlineStyles}
  className={` ${index === 0 ? 'col-span-1 sm:col-span-2 row-span-1 sm:row-span-2 xl:w-[24.9rem]' : 'col-span-1 w-40 min-[420px]:w-60 sm:w-fit xl:w-48'}
   relative flex justify-center rounded-lg border-2 m-auto mt-4 sm:mt-0 shadow-lg ${isDarkMode ? 'border-none' : 'border-black'} bg-cover bg-center origin-top-left`}
  {...props} >

  {/* CHECKBOX */}
  <Checkbox imageNum={imageNum} />

  {/* Overlay when an image is hovered */}
  <Overlay imageNum={imageNum} />

  {/* reducing the opacity when the image is marked */}
  <img className={`bg-white rounded-md ${currentChecked.includes(Number(imageNum)) ? 'opacity-50' : ''} h-fit object-cover transition-all duration-300  ${index === 0 ? 'xl:h-[24.9rem]' : 'h-full w-full xl:w-full'} origin-top-left`} src={createImageSource(Number(imageNum))} alt="image" />
 </div>;

})
export default Image

// Had to satisfy eslint :)
Image.displayName = 'Image'