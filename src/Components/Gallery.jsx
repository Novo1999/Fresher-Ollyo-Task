import { useContext } from "react"
import AddImages from "./AddImages"
import { GalleryContext } from "../App"
import createImageSource from "../utils/createImageSource"
import Checkbox from "./Checkbox"
import { DragDropContext } from "react-beautiful-dnd"
import { createPortal } from "react-dom"


const Gallery = () => {
 const { imageIndex, setCurrentImage, currentChecked, currentImage, currentHovered, setCurrentHovered } = useContext(GalleryContext)

 const onDragEnd = (result) => {

 }

 return (<>
  <div className="grid gap-4 p-10 sm:grid-cols-2 lg:grid-cols-5 relative">
   {imageIndex.map((imageNum, i) => {
    return <div onClick={() => setCurrentImage(imageNum)} onMouseEnter={() => setCurrentHovered(imageNum)} onMouseLeave={() => setCurrentHovered(0)} className={`mt-3 relative border cursor-pointer shadow-lg w-fit ${i === 0 ? 'row-span-2 col-span-2 w-full flex justify-center items-center' : 'col-span-1'} border-black rounded-lg`} key={imageNum}>

     {/* CHECKBOX */}
     <Checkbox imageNum={imageNum} />

     {/* Setting an overlay when the image is marked */}
     {currentHovered === imageNum ? <div className='absolute w-full h-full top-0 right-0 left-0 bottom-0 bg-black/[.50] animate-fade animate-duration-200 animate-ease-linear rounded-lg'></div> : ''}

     {/* IMAGE */}
     <img onClick={() => document.getElementById('my_modal_2').showModal()} className={`rounded-lg ${currentChecked.includes(imageNum) ? 'opacity-50' : ''} object-cover transition-all duration-300  ${i === 0 ? 'h-96' : 'h-52'}`} src={createImageSource(imageNum)} alt="image" />
    </div>
   })}

   {/* ADD IMAGES BLOCK */}
   <AddImages />
  </div>
  <div>
   {currentImage && createPortal(
    <dialog id="my_modal_2" className="modal">
     <div className="modal-box bg-white">
      <img src={createImageSource(currentImage)} alt="image" />
      <p className="py-4 text-black">Press ESC key or click outside to close</p>
     </div>
     <form method="dialog" className="modal-backdrop">
      <button>close</button>
     </form>
    </dialog>,
    document.body
   )}
  </div>
 </>
 )
}
export default Gallery