import { useContext } from "react"
import { BiImageAlt } from "react-icons/bi"
import { GalleryContext } from "../App"
import INITIAL_ARRAY from "../utils/constant"
const AddImages = () => {
 const { setImageIndex } = useContext(GalleryContext)
 return (
  <div onClick={() => setImageIndex(INITIAL_ARRAY)} className='flex flex-col justify-center relative items-center border-4 border-black border-dotted rounded-lg cursor-pointer m-auto p-12 sm:p-14 lg:p-10 sm:w-full w-fit h-full'>
   <span className='text-3xl'>
    <BiImageAlt />
   </span>
   <p className='font-semibold text-sm'>Add Images</p>
  </div>
 )
}
export default AddImages