import { PiCopyrightLight } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="flex gap-1 absolute bottom-[2vh] left-[2vw]">
        <p className="text-xs opacity-45">All rights reserved. </p>
        <p className="text-xs opacity-45">2024</p>
        <p><PiCopyrightLight className="opacity-45"/></p>
    </div>
  )
}

export default Footer
