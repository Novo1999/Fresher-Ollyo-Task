import { createPortal } from "react-dom"
import createImageSource from "../utils/createImageSource"
import { useContext } from "react"
import { GalleryContext } from "../App"

const SingleImage = () => {
 const { currentImage } = useContext(GalleryContext)
 return (
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
 )
}
export default SingleImage