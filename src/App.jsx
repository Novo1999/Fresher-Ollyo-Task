import toast, { Toaster } from 'react-hot-toast'
import { createContext, useEffect, useState } from 'react'
import SingleImage from './Components/SingleImage'
import Header from './Components/Header'
import Gallery from './Components/Gallery'
import INITIAL_ARRAY, { IS_DARK_MODE } from './utils/constant'
import { MdDarkMode } from 'react-icons/md'
import { BsFillSunFill } from 'react-icons/bs'
// Context
export const GalleryContext = createContext(null)

export default function App() {
  const [currentChecked, setCurrentChecked] = useState([])
  // I had set this to null before but with the checkbox logic for some reason the checkbox of the first image was always showing.That's why I used a -1 here
  const [currentHovered, setCurrentHovered] = useState(-1)
  const [imageIndex, setImageIndex] = useState(INITIAL_ARRAY)
  const [currentImage, setCurrentImage] = useState(1)
  const [isDarkMode, setIsDarkMode] = useState(Boolean(IS_DARK_MODE))

  const contextValue = {
    currentChecked, setCurrentChecked, currentHovered, setCurrentHovered, imageIndex, setImageIndex, currentImage, setCurrentImage, isDarkMode, setIsDarkMode
  }

  // Persisting the dark mode in local storage
  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode)
  }, [isDarkMode])

  // Dark mode
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
    <GalleryContext.Provider value={contextValue}>
      <main className={`${isDarkMode ? 'bg-slate-700' : 'bg-white'} transition-all duration-300 min-h-screen text-black flex flex-col items-center justify-center`}>
        {/* DARK */}
        <form className='absolute top-3 right-5 sm:top-1 lg:top-3 flex  items-center gap-2'>
          <span className={`text-sm flex items-center gap-2 sm:text-lg text-white ${isDarkMode ? 'block' : 'hidden'}`}><MdDarkMode />Dark </span>
          <span className={`text-sm flex items-center gap-2 sm:text-lg text-black ${isDarkMode ? 'hidden' : 'block'}`}><BsFillSunFill />Light </span>
          <input value={isDarkMode} onChange={toggleDarkMode} type="checkbox" className="toggle toggle-sm" checked={isDarkMode} />
        </form>
        <Toaster />
        <section className={`text-2xl ${isDarkMode ? 'border-white border-double border shadow-2xl' : 'shadow-2xl'} p-4 mt-10 top-[-0.5rem] font-semibold flex flex-col rounded-lg  mx-10 my-5 w-fit h-full`}>
          <Header />
          <Gallery />
        </section>
        <SingleImage />
      </main>
    </GalleryContext.Provider>
  )
}