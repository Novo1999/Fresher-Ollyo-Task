import { FcGallery } from 'react-icons/fc'
import { BiImageAlt } from 'react-icons/bi'
import { BsFillTrashFill } from 'react-icons/bs'
import toast, { Toaster } from 'react-hot-toast'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import { useState } from 'react'
import { createPortal } from 'react-dom'

// dynamically creating the image source
const createImageSource = (num) => `/images/image-${num}.${num === 10 || num === 11 ? 'jpeg' : 'webp'}`


export default function App() {
  const [currentChecked, setCurrentChecked] = useState([])
  const [currentHovered, setCurrentHovered] = useState(null)
  const [imageIndex, setImageIndex] = useState(Array.from({ length: 11 }, (_, i) => i + 1))
  const [currentImage, setCurrentImage] = useState(1)


  const deleteImage = () => {
    let copyOfImageIndex = [...imageIndex]

    copyOfImageIndex = copyOfImageIndex.filter(value => {
      return !currentChecked.includes(value)
    })
    setImageIndex(copyOfImageIndex)
    toast.success(`Deleted ${currentChecked.length} images`)
    setCurrentChecked([])
  }


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
    <DragDropContext>
      <main className='bg-white h-screen text-black flex justify-center'>
        <Toaster />

        {/* TITLE */}
        <section className="text-2xl px-10 py-4 mt-10 top-[-0.5rem] font-semibold absolute flex flex-col p-10 rounded-lg shadow-2xl mx-10 my-5 w-fit h-fit">
          <div className='flex justify-between'>
            <h1 className='flex gap-1 justify-start items-center '><FcGallery /> Galleria</h1>
            {currentChecked.length > 0 &&
              <div className='absolute flex right-4 top-3 gap-4 items-center'>
                <p className='animate-fade-down animate-once animate-duration-200 animate-ease-linear'>{currentChecked.length} Images Selected</p>
                <button onClick={deleteImage} className="btn btn-primary hover:btn-error"><BsFillTrashFill /> Delete Images</button>
              </div>}
          </div>

          {/* IMAGE SECTION */}

          <Droppable droppableId='droppable'>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className="grid gap-4 p-10 sm:grid-cols-2 lg:grid-cols-5 relative ">
                {/* GALLERY */}
                {imageIndex.map((imageNum, i) => (

                  <Draggable key={imageNum.toString()} draggableId={imageNum.toString()} index={i}>

                    {(provided) => (<div {...provided.dragHandleProps} {...provided.dragHandleProps} ref={provided.innerRef} onClick={() => setCurrentImage(imageNum)} onMouseEnter={() => setCurrentHovered(imageNum)} onMouseLeave={() => setCurrentHovered(0)} className={`mt-3 relative border cursor-pointer shadow-lg w-fit ${i === 0 ? 'row-span-2 col-span-2 w-full flex justify-center items-center' : 'col-span-1'} border-black rounded-lg`} key={imageNum}>

                      {/* CHECKBOX */}
                      {currentChecked.includes(imageNum) || currentHovered === imageNum ? <input onChange={e => addToChecked(e)} value={imageNum} type="checkbox" checked={currentChecked.includes(imageNum) ? "checked" : ''} className="checkbox animate-fade animate-duration-200 animate-ease-linear  checkbox-info absolute top-2 left-2 z-20" /> : null}

                      {/* Setting an overlay when the image is marked */}
                      {currentChecked.includes(imageNum) ? <div className='absolute w-full h-full top-0 right-0 left-0 bottom-0 bg-black/[.50] animate-fade animate-duration-300 animate-ease-linear'></div> : ''}

                      {/* IMAGE */}
                      <img onClick={() => document.getElementById('my_modal_2').showModal()} className={`rounded-lg hover:opacity-70 object-cover transition-all duration-300  ${i === 0 ? 'h-96' : 'h-52'}`} src={createImageSource(imageNum)} alt="image" />
                    </div>)}

                  </Draggable>
                )
                )}

                {/* ADD IMAGES BLOCK */}
                <div className='flex flex-col justify-center h-52 relative top-3 items-center border-4 border-dotted rounded-lg cursor-pointer'>
                  <span className='text-3xl'>
                    <BiImageAlt />
                  </span>
                  <p className='font-semibold'>Add Images</p>
                </div>
              </div>
            )}

          </Droppable>
        </section>

        {/* Showing the image in a modal window when user clicks */}
        <div>
          {currentImage && createPortal(
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box bg-white">
                <img src={createImageSource(currentImage)} alt="image" />
                <p className="py-4 text-black">Press ESC key or click outside to close</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>,
            document.body
          )}
        </div>
      </main>
    </DragDropContext>
  )
}