// dynamically creating the image source
const createImageSource = (num) =>
  `/images/image-${num}.${num === 9 || num === 10 ? 'jpeg' : 'webp'}`

export default createImageSource
