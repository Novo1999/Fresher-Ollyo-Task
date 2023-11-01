import { BsFillTrashFill } from 'react-icons/bs'
import { FcGallery } from 'react-icons/fc'
import deleteImage from '../utils/deleteImage'
import { useContext } from 'react'
import { GalleryContext } from '../App'

const Header = () => {
  const { imageIndex, setCurrentChecked, currentChecked, setImageIndex } = useContext(GalleryContext)
  return (
    <div className='flex justify-between items-center relative mt-4 bottom-2'>
      <h1 className='flex gap-1 justify-start items-center'><FcGallery /> Galleria</h1>
      {currentChecked.length > 0 &&
        <div className='absolute flex right-4 gap-4 items-center'>
          <p className='animate-fade-down animate-once animate-duration-200 animate-ease-linear'>{currentChecked.length} Images Selected</p>
          <button onClick={() => deleteImage(imageIndex,
            currentChecked,
            setImageIndex,
            setCurrentChecked
          )} className="btn btn-primary hover:btn-error"><BsFillTrashFill /> Delete Images</button>
        </div>}
    </div>
  )
}
export default Header