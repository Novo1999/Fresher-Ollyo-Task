const Grid = ({ children }) => {
 return (
  <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:p-4 m-auto'>
   {children}
  </div>
 )
}
export default Grid