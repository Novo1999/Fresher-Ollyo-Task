import { useContext } from "react"
import { GalleryContext } from "../App"
import addToChecked from "../utils/addToChecked"

const Checkbox = ({ imageNum }) => {
 const { setCurrentChecked, currentChecked, currentHovered, } = useContext(GalleryContext)

 if (currentChecked.includes(imageNum) || currentHovered === imageNum) return (<input
  onChange={e => addToChecked(e, currentChecked, setCurrentChecked)} value={imageNum} type="checkbox" checked={currentChecked.includes(imageNum) ? "checked" : ''} className="checkbox animate-fade animate-duration-200 animate-ease-linear  checkbox-info absolute top-2 left-2 z-20" />
 )


}
export default Checkbox