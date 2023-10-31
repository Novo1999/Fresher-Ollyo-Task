import { Toaster } from 'react-hot-toast'
import { createContext, useState } from 'react'
import SingleImage from './Components/SingleImage'

import Header from './Components/Header'
import Gallery from './Components/Gallery'


export const GalleryContext = createContext(null)

export default function App() {
  const [currentChecked, setCurrentChecked] = useState([])
  const [currentHovered, setCurrentHovered] = useState(null)
  const [imageIndex, setImageIndex] = useState(Array.from({ length: 11 }, (_, i) => (i + 1).toString()))
  const [currentImage, setCurrentImage] = useState(1)


  const contextValue = {
    currentChecked, setCurrentChecked, currentHovered, setCurrentHovered, imageIndex, setImageIndex, currentImage, setCurrentImage
  }

  return (
    <GalleryContext.Provider value={contextValue}>
      <main className='bg-white h-screen text-black flex justify-center'>
        <Toaster />
        <section className="text-2xl px-10 py-4 mt-10 top-[-0.5rem] font-semibold absolute flex flex-col p-10 rounded-lg shadow-2xl mx-10 my-5 w-fit h-fit">
          <Header />
          <Gallery />
        </section>
        <SingleImage />
      </main>
    </GalleryContext.Provider>
  )
}