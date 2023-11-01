import { createPortal } from "react-dom"
import createImageSource from "../utils/createImageSource"
import { useContext } from "react"
import { GalleryContext } from "../App"
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

const SingleImage = () => {
 const { currentImage, setCurrentImage, imageIndex } = useContext(GalleryContext)
 console.log(currentImage, Number(imageIndex[1]))
 // if user clicks on an image show it in a portal
 return (
  <div>
   {currentImage >= 0 && createPortal(
    <dialog id="my_modal_2" className="modal">
     <div className="modal-box bg-white">
      <button onClick={() => currentImage >= 1 && setCurrentImage(+currentImage - 1)} className="btn btn-circle btn-outline absolute left-2 top-40 min-[425px]:top-52 sm:top-64">
       <AiOutlineLeft />
      </button>
      <img src={createImageSource(Number(currentImage))} alt="image" />
      <button onClick={() => currentImage < Number(imageIndex.length - 1) && setCurrentImage(+currentImage + 1)} className="btn btn-circle btn-outline absolute right-2 top-40  min-[425px]:top-52 sm:top-64">
       <AiOutlineRight />
      </button>
      <p className="py-4 text-black">Press ESC key or click outside to close</p>
     </div>
     <form method="dialog" className="modal-backdrop">
      <button>close</button>
     </form>
    </dialog>,
    document.body
   )}
  </div>
 )
}
export default SingleImage