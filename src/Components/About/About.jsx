import Card from "./Card"
import { IoIosArrowBack } from "react-icons/io";
import LocomotiveScroll from 'locomotive-scroll';
import { div } from "framer-motion/client";
import { useNavigate } from "react-router-dom";
const About = () => {
  //const locomotiveScroll = new LocomotiveScroll();
  const navigate = useNavigate();
  return (
    <div className="bg-zinc-900 h-screen w-screen flex">
      <div onClick={()=>navigate(-1)} className="z-50 text-zinc-400 absolute top-[5vh] left-[5vh] flex items-center gap-[0.5vw] hover:cursor-pointer hover:text-white duration-300">
        <IoIosArrowBack/>
        <p>Back</p>
      </div>
      <div className=" w-screen z-40 bg-zinc-900 flex h-screen">
      <Card/>
      </div>
    </div>

  )
}

export default About
