import { useContext } from "react"
import { GalleryContext } from "../App"

const Overlay = ({ imageNum }) => {
 const { setCurrentImage, currentHovered } = useContext(GalleryContext)

 // if image number matches the currently hovered image then show the overlay on it and if user clicks the image, show the image in a modal window
 return (
  currentHovered === imageNum ? <div onClick={() => {
   document.getElementById('my_modal_2').showModal()
   setCurrentImage(imageNum)
  }} className='absolute top-0 right-0 left-0 bottom-0 bg-black/[.50] z-10 animate-fade animate-duration-200 animate-ease-linear rounded-md'></div> : ''
 )
}
export default Overlay