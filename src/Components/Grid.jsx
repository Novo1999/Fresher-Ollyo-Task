const Grid = ({ children }) => {
 return (
  <div className={`grid grid-cols-1 m-auto sm:grid-cols-2 lg:grid-cols-5 gap-10 p-10`}>
   {children}
  </div>
 )
}
export default Grid