import { FcGallery } from 'react-icons/fc'
import { useContext } from 'react'
import { GalleryContext } from '../App'
import DeleteButton from './DeleteButton'


const Header = () => {
  const { currentChecked, isDarkMode } = useContext(GalleryContext)

  return (
    <div className='transition-all duration-300 flex justify-between items-center relative mt-4 bottom-2'>
      <h1 className='flex sm:ml-4 justify-start gap-2 text-3xl items-center'><FcGallery /> <span className={`hidden sm:block ${isDarkMode ? 'text-white' : ''}`}> Galleria </span></h1>
      {/* If the user marks image, the info and delete button will appear */}
      {currentChecked.length > 0 &&
        <div className='absolute flex right-4 gap-4 items-center'>
          <p className={`animate-fade-down relative animate-once animate-duration-200 left-1 ${isDarkMode ? 'text-white' : ''} text-xs sm:text-lg animate-ease-linear`}>{currentChecked.length} Images Selected</p>
          <DeleteButton />
        </div>}
    </div>
  )
}
export default Header