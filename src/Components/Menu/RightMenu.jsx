import {Link, Route, Routes, useNavigate} from 'react-router-dom'
import { IoCloseOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import Work from '../Work/Work';
import About from '../About/About';
import Projects from '../Projects/Projects';

const RightMenu = () => {
  const navigate = useNavigate();

  return (
   
    <div className=" text-zinc-400 h-[100%] w-[40%] relative flex flex-col gap-[5vh] justify-center items-center">
        <IoCloseOutline onClick={()=>navigate(-1)} className='text-2xl absolute right-[2vw] hover:cursor-pointer top-[2vh]'/>

        <div className='flex flex-col gap-[3vh] font-black text-2xl text-center'>
        <Link to="/work">Work</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        </div>



        <div className='flex gap-[3vw] absolute bottom-[15vh]'>
            <Link><FaLinkedin/></Link>
            <Link><RiInstagramFill/></Link>
            <Link><FaSquareXTwitter/></Link>
        </div>



      
    </div>
  )
}

export default RightMenu
