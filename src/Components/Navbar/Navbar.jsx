import { Link, Route, Routes } from "react-router-dom"
import Logo from "./Logo"
import Menugo from "./Menugo"
import Menu from "../Menu/Menu"
const Navbar = () => {
  return (
    <div className="flex space-x-[90vw] px-[2vw] p-[3vh]">
        <Logo/>
        <Link to='/menu'><Menugo/></Link>
    </div>
  )
}

export default Navbar
