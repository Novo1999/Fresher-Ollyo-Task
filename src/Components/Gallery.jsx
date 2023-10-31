import { useContext } from "react"
import AddImages from "./AddImages"
import addToChecked from "../utils/addToChecked"
import { GalleryContext } from "../App"
import createImageSource from "../utils/createImageSource"


const Gallery = () => {
 const { imageIndex, setCurrentImage, setCurrentChecked, currentChecked, currentHovered, setCurrentHovered } = useContext(GalleryContext)

 return (
  <div className="grid gap-4 p-10 sm:grid-cols-2 lg:grid-cols-5 relative">
   {imageIndex.map((imageNum, i) => {
    return <div onClick={() => setCurrentImage(imageNum)} onMouseEnter={() => setCurrentHovered(imageNum)} onMouseLeave={() => setCurrentHovered(0)} className={`mt-3 relative border cursor-pointer shadow-lg w-fit ${i === 0 ? 'row-span-2 col-span-2 w-full flex justify-center items-center' : 'col-span-1'} border-black rounded-lg`} key={imageNum}>

     {/* CHECKBOX */}
     {currentChecked.includes(imageNum) || currentHovered === imageNum ? <input onChange={e => addToChecked(e, currentChecked, setCurrentChecked)} value={imageNum} type="checkbox" checked={currentChecked.includes(imageNum) ? "checked" : ''} className="checkbox animate-fade animate-duration-200 animate-ease-linear  checkbox-info absolute top-2 left-2 z-20" /> : null}

     {/* Setting an overlay when the image is marked */}
     {currentChecked.includes(imageNum) ? <div className='absolute w-full h-full top-0 right-0 left-0 bottom-0 bg-black/[.50] animate-fade animate-duration-300 animate-ease-linear'></div> : ''}

     {/* IMAGE */}
     <img onClick={() => document.getElementById('my_modal_2').showModal()} className={`rounded-lg hover:opacity-70 object-cover transition-all duration-300  ${i === 0 ? 'h-96' : 'h-52'}`} src={createImageSource(imageNum)} alt="image" />
    </div>
   })}

   {/* ADD IMAGES BLOCK */}
   <AddImages />
  </div>
 )
}
export default Gallery