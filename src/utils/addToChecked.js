const addToChecked = (e, currentChecked, setCurrentChecked) => {
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

export default addToChecked
