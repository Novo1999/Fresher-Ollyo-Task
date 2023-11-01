import { useContext } from "react"
import { BiImageAlt } from "react-icons/bi"
import { GalleryContext } from "../App"
import INITIAL_ARRAY from "../utils/constant"
import toast from "react-hot-toast"

const AddImages = () => {
  const { setImageIndex, imageIndex, isDarkMode } = useContext(GalleryContext)

  return (
    <div onClick={() => {
      // Adds back all the images
      setImageIndex(INITIAL_ARRAY)
      if (imageIndex.length < 11)
        toast.success('Added back all images')
    }} className={`flex flex-col justify-center relative items-center border-4 ${isDarkMode ? 'border-white text-white' : 'border-black text-black'} border-dotted rounded-lg cursor-pointer m-auto p-12 sm:p-14 min-[420px]:w-60 min-[420px]:h-60 lg:p-10 sm:w-full sm:h-full w-fit h-full`}>
      <span className='text-3xl'>
        <BiImageAlt />
      </span>
      <p className='font-semibold text-sm'>Add Images</p>
    </div>
  )
}
export default AddImages