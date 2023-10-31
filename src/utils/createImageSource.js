// dynamically creating the image source
const createImageSource = (num) =>
  `/images/image-${num}.${num === 10 || num === 11 ? 'jpeg' : 'webp'}`

export default createImageSource
