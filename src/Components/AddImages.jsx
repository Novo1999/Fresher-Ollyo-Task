import { BiImageAlt } from "react-icons/bi"
const AddImages = () => {
 return (
  <div className='flex flex-col justify-center h-52 relative top-3 items-center border-4 border-dotted rounded-lg cursor-pointer'>
   <span className='text-3xl'>
    <BiImageAlt />
   </span>
   <p className='font-semibold'>Add Images</p>
  </div>
 )
}
export default AddImages