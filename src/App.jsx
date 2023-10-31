import { FcGallery } from 'react-icons/fc'
import { BiImageAlt } from 'react-icons/bi'
import { useState } from 'react'

// dynamically creating the image source
const createImageSource = (num) => `/images/image-${num}.${num === 10 || num === 11 ? 'jpeg' : 'webp'}`


export default function App() {
  const [currentChecked, setCurrentChecked] = useState([])
  const [currentHovered, setCurrentHovered] = useState(null)

  const addToChecked = (e) => {
    const value = Number(e.target.value)
    // creating a copy of current checked images so it is possible to add to the state
    const copyOfChecked = [...currentChecked]

    // finding the index of the value that is already in the array, if its in the array, remove it
    const toRemoveIndex = copyOfChecked.indexOf(value)

    // if the image num is not in the checked array, add it
    if (!copyOfChecked.includes(value)) {
      copyOfChecked.push(value)
    } else {
      copyOfChecked.splice(toRemoveIndex, 1)
    }
    // set the current checked
    setCurrentChecked(copyOfChecked)

  }

  return (
    <main className='bg-white h-screen text-black'>

      {/* TITLE */}
      <h1 className="text-2xl px-10 py-4 flex gap-1 justify-start items-center  font-semibold"><FcGallery /> Galleria</h1>

      {/* SECTION */}
      <section className='flex justify-center items-center '>

        {/* GALLERY */}
        <div className="p-10 rounded-lg shadow-2xl mx-10 my-5 grid w-fit h-fit gap-4 sm:grid-cols-2 lg:grid-cols-5">

          {/* Getting the images dynamically */}
          {Array.from({ length: 11 }, (_, i) => i + 1).map(imageNum => {
            return <div onMouseEnter={() => setCurrentHovered(imageNum)} onMouseLeave={() => setCurrentHovered(0)} className={`relative border cursor-pointer shadow-lg w-fit ${imageNum === 1 ? 'row-span-2 col-span-2 w-full flex justify-center items-center' : 'col-span-1'} border-black rounded-lg`} key={imageNum}>

              {/* CHECKBOX */}
              {currentChecked.includes(imageNum) || currentHovered === imageNum ? <input onChange={e => addToChecked(e)} value={imageNum} type="checkbox" checked={currentChecked.includes(imageNum) ? "checked" : ''} className="checkbox animate-fade animate-duration-200 animate-ease-linear  checkbox-info absolute top-2 left-2 z-20" /> : null}

              {/* Setting an overlay when the image is marked */}
              {currentChecked.includes(imageNum) ? <div className='absolute w-full h-full top-0 right-0 left-0 bottom-0 bg-black/[.50] animate-fade animate-duration-300 animate-ease-linear'></div> : ''}

              {/* IMAGE */}
              <img className={`rounded-lg hover:opacity-70 object-cover transition-all duration-300  ${imageNum === 1 ? 'h-96' : 'h-52'}`} src={createImageSource(imageNum)} alt="image" />
            </div>
          })}

          {/* ADD IMAGES BLOCK */}
          <div className='flex flex-col justify-center items-center border-4 border-dotted rounded-lg cursor-pointer'>
            <span className='text-3xl'>
              <BiImageAlt />
            </span>
            <p className='font-semibold'>Add Images</p>
          </div>
        </div>
      </section>
    </main>
  )
}