import LeftMenu from "./LeftMenu"
import RightMenu from "./RightMenu"
const Menu = () => {
  return (
    <div className="bg-gray-950 h-screen w-screen flex  ">
        <LeftMenu/>
        <RightMenu/>     
    </div>
  )
}

export default Menu
