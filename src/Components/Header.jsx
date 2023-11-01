import { BsFillTrashFill } from 'react-icons/bs'
import { FcGallery } from 'react-icons/fc'
import deleteImage from '../utils/deleteImage'
import { useContext } from 'react'
import { GalleryContext } from '../App'


const Header = () => {
  const { imageIndex, setCurrentChecked, currentChecked, setImageIndex, isDarkMode } = useContext(GalleryContext)

  return (
    <div className='transition-all duration-300 flex justify-between items-center relative mt-4 bottom-2'>
      <h1 className='flex sm:ml-4 justify-start gap-2 text-3xl items-center'><FcGallery /> <span className={`hidden sm:block ${isDarkMode ? 'text-white' : ''}`}> Galleria </span></h1>
      {currentChecked.length > 0 &&
        <div className='absolute flex right-4 gap-4 items-center'>
          <p className={`animate-fade-down relative animate-once animate-duration-200 left-1 ${isDarkMode ? 'text-white' : ''} text-xs sm:text-lg animate-ease-linear`}>{currentChecked.length} Images Selected</p>

          {/* DELETE BUTTON */}
          <button onClick={() => deleteImage(imageIndex,
            currentChecked,
            setImageIndex,
            setCurrentChecked
          )} className="btn btn-sm sm:btn-md btn-primary hover:btn-error"><BsFillTrashFill /> <span className='hidden sm:block'> Delete Images </span></button>
        </div>}
    </div>
  )
}
export default Header