// initial index of images
const INITIAL_ARRAY = Array.from({ length: 11 }, (_, i) => i.toString())
export default INITIAL_ARRAY

// get dark mode status from local storage when app loads
export const IS_DARK_MODE = localStorage.getItem('darkMode') === 'true'
