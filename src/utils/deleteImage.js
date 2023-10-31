import toast from 'react-hot-toast'

const deleteImage = (
  imageIndex,
  currentChecked,
  setImageIndex,
  setCurrentChecked
) => {
  let copyOfImageIndex = [...imageIndex]
  copyOfImageIndex = copyOfImageIndex.filter((value) => {
    return !currentChecked.includes(Number(value))
  })
  setImageIndex(copyOfImageIndex)
  toast.success(`Deleted ${currentChecked.length} images`)
  setCurrentChecked([])
}

export default deleteImage
