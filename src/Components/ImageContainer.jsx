import { useContext } from "react"
import { GalleryContext } from "../App"
import Checkbox from "./Checkbox"
import createImageSource from "../utils/createImageSource"
import Image from "./Image"

const ImageContainer = ({ imageNum, i }) => {
 const { setCurrentImage, currentChecked, currentHovered, setCurrentHovered } = useContext(GalleryContext)
 return <div onClick={() => setCurrentImage(Number(imageNum))} onMouseEnter={() => setCurrentHovered(imageNum)} onMouseLeave={() => setCurrentHovered(0)} className={`mt-3 relative border cursor-pointer shadow-lg w-fit ${i === 0 ? 'row-span-2 col-span-2 w-full flex justify-center items-center' : 'col-span-1'} border-black rounded-lg`} key={Number(imageNum)}>

  {/* CHECKBOX */}
  <Checkbox imageNum={imageNum} />

  {/* Setting an overlay when the image is marked */}
  <div>
   {currentHovered === imageNum ? <div onClick={() => document.getElementById('my_modal_2').showModal()} className='absolute w-full h-full top-0 right-0 left-0 bottom-0 bg-black/[.50] animate-fade animate-duration-200 animate-ease-linear rounded-lg'></div> : ''}

   {/* IMAGE */}
   <Image />
   {/* <img className={`rounded-lg ${currentChecked.includes(Number(imageNum)) ? 'opacity-50' : ''} object-cover transition-all duration-300  ${i === 0 ? 'h-96' : 'h-52'}`} src={createImageSource(Number(imageNum))} alt="image" /> */}
  </div>
 </div>
}


export default ImageContainer