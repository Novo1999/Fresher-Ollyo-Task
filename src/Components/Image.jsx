import { forwardRef, useContext } from "react";
import createImageSource from "../utils/createImageSource";
import { GalleryContext } from "../App";

const Image = forwardRef(({ imageNum, index, faded, style, ...props }, ref) => {
 const { currentChecked } = useContext(GalleryContext)
 const inlineStyles = {
  opacity: faded ? '0.2' : '1',
  transformOrigin: '0 0',
  height: index === 0 ? 410 : 200,
  gridRowStart: index === 0 ? 'span 2' : null,
  gridColumnStart: index === 0 ? 'span 2' : null,
  backgroundImage: `url(${createImageSource(Number(imageNum))})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundColor: 'grey',
  // opacity: currentChecked.includes(Number(imageNum)) ? '0.5' : '',
  ...style,
 };

 return <div ref={ref} style={inlineStyles} {...props} />;
})
export default Image
Image.displayName = 'Image'