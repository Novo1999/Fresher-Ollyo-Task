import { useContext } from "react"
import { GalleryContext } from "../App"
import addToChecked from "../utils/addToChecked"

const Checkbox = ({ index }) => {
 const { setCurrentChecked, currentChecked, currentHovered } = useContext(GalleryContext)

 if (currentChecked.includes(Number(index)) || Number(currentHovered) === Number(index)) {
  return (<input
   onChange={e => {
    console.log(e.target)
    addToChecked(e, currentChecked, setCurrentChecked)
   }} value={Number(index)} type="checkbox" checked={currentChecked.includes(Number(index)) ? "checked" : ''} className="checkbox animate-fade animate-duration-200 animate-ease-linear  checkbox-info absolute top-2 left-2 z-20" />
  )
 }


}
export default Checkbox