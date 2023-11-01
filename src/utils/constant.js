const INITIAL_ARRAY = Array.from({ length: 11 }, (_, i) => i.toString())
export default INITIAL_ARRAY

export const IS_DARK_MODE = localStorage.getItem('darkMode') === 'true'
