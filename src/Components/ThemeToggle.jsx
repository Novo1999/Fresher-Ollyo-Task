import { MdDarkMode } from 'react-icons/md'
import { BsFillSunFill } from 'react-icons/bs'
import { useContext, useEffect } from 'react'
import { GalleryContext } from '../App'
import toast from 'react-hot-toast'

const ThemeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useContext(GalleryContext)

  // Persisting the dark mode in local storage
  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode)
  }, [isDarkMode])

  // this toggles the dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode)
      toast('Hello Darkness!',
        {
          icon: '🌙',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
          duration: 800
        }
      );
  }
  return (
    <form className='absolute top-3 right-5 sm:top-1 lg:top-3 flex items-center gap-2'>
      <span className={`text-sm flex items-center gap-2 sm:text-lg text-white ${isDarkMode ? 'block' : 'hidden'}`}><MdDarkMode />Dark </span>
      <span className={`text-sm flex items-center gap-2 sm:text-lg text-black ${isDarkMode ? 'hidden' : 'block'}`}><BsFillSunFill />Light </span>
      <input value={isDarkMode} onChange={toggleDarkMode} type="checkbox" className="toggle toggle-sm" checked={isDarkMode} />
    </form>
  )
}
export default ThemeToggle