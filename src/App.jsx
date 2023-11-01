import { Toaster } from 'react-hot-toast'
import { createContext, useState } from 'react'
import SingleImage from './Components/SingleImage'
import Header from './Components/Header'
import Gallery from './Components/Gallery'
import INITIAL_ARRAY from './utils/constant'

// Context
export const GalleryContext = createContext(null)

export default function App() {
  const [currentChecked, setCurrentChecked] = useState([])
  // I had set this to null but with the checkbox logic for some reason the checkbox of the first image was always showing.That's why I used a -1 here
  const [currentHovered, setCurrentHovered] = useState(-1)
  const [imageIndex, setImageIndex] = useState(INITIAL_ARRAY)
  const [currentImage, setCurrentImage] = useState(1)
  const [currentTheme, setCurrentTheme] = useState('light')

  const contextValue = {
    currentChecked, setCurrentChecked, currentHovered, setCurrentHovered, imageIndex, setImageIndex, currentImage, setCurrentImage, currentTheme, setCurrentTheme
  }

  return (
    <GalleryContext.Provider value={contextValue}>
      <main className={`${currentTheme === 'light' ? 'bg-white' : ''} transition-all duration-300 min-h-screen text-black flex items-center justify-center`}>
        <Toaster />
        <section className="text-2xl p-4 mt-10 top-[-0.5rem] font-semibold flex flex-col rounded-lg shadow-2xl mx-10 my-5 w-fit h-full">
          <Header />
          <Gallery />
        </section>
        <SingleImage />
      </main>
    </GalleryContext.Provider>
  )
}