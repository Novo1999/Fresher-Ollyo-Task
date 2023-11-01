import toast from 'react-hot-toast'

const deleteImage = (
  imageIndex,
  currentChecked,
  setImageIndex,
  setCurrentChecked
) => {
  let copyOfImageIndex = [...imageIndex]
  // if the images index are not in the current checked array, remove the current checked by filtering
  copyOfImageIndex = copyOfImageIndex.filter((value) => {
    return !currentChecked.includes(Number(value))
  })
  setImageIndex(copyOfImageIndex)
  toast.success(
    `Deleted ${currentChecked.length} ${
      currentChecked.length === 1 ? 'image' : 'images'
    }`
  )
  setCurrentChecked([])
}

export default deleteImage
