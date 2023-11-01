import { useContext } from "react"
import deleteImage from "../utils/deleteImage"
import { BsFillTrashFill } from 'react-icons/bs'
import { GalleryContext } from "../App"

const DeleteButton = () => {
 const { imageIndex, setCurrentChecked, currentChecked, setImageIndex } = useContext(GalleryContext)

 return (
  <button onClick={() => deleteImage(imageIndex,
   currentChecked,
   setImageIndex,
   setCurrentChecked
  )} className="btn btn-sm sm:btn-md btn-primary hover:btn-error"><BsFillTrashFill /> <span className='hidden sm:block'> Delete Images </span></button>
 )
}
export default DeleteButton