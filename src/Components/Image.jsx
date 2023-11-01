import { forwardRef, useContext } from "react";
import createImageSource from "../utils/createImageSource";
import { GalleryContext } from "../App";
import Checkbox from "./Checkbox";
import Overlay from "./Overlay";

const Image = forwardRef(({ imageNum, index, style, ...props }, ref) => {
 const { currentChecked, setCurrentHovered, isDarkMode } = useContext(GalleryContext)

 const inlineStyles = {
  ...style,
 };

 return <div
  onMouseEnter={() => setCurrentHovered(imageNum)}
  onMouseLeave={() => setCurrentHovered(-1)} ref={ref} style={inlineStyles}
  className={` ${index === 0 ? 'col-span-1 sm:col-span-2 row-span-1 sm:row-span-2 xl:w-[24.9rem]' : 'col-span-1 w-40 sm:w-fit xl:w-48'}
   relative flex justify-center rounded-lg border-2 m-auto mt-4 sm:mt-0 shadow-lg ${isDarkMode ? 'border-none' : 'border-black'} ${currentChecked.includes(Number(imageNum)) ? 'opacity-50' : ''} bg-cover bg-center origin-top-left`}
  {...props} >
  {/* CHECKBOX */}
  <Checkbox imageNum={imageNum} />
  {/* OVERLAY BEHIND THE IMAGE WHEN CLICKED*/}
  <Overlay imageNum={imageNum} />
  {/* IMAGE */}
  <img className={`bg-white rounded-md ${currentChecked.includes(Number(imageNum)) ? 'opacity-50' : ''} h-fit object-cover transition-all duration-300  ${index === 0 ? 'xl:h-[24.9rem]' : 'h-full w-full xl:w-full'} origin-top-left`} src={createImageSource(Number(imageNum))} alt="image" />
 </div>;

})
export default Image
Image.displayName = 'Image'