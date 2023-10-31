const Grid = ({ children, columns }) => {
 return (
  <div className={`grid grid-cols-${columns} gap-10 p-10`}>
   {children}
  </div>
 )
}
export default Grid