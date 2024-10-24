import { useNavigate } from "react-router-dom";
import WorkLeft from "./WorkLeft"
import WorkMiddle from "./WorkMiddle"
import WorkRight from "./WorkRight"
import { IoIosArrowBack } from "react-icons/io";


const Work = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-zinc-900 h-full w-full flex ">
        <div onClick={()=>navigate(-1)} className="z-40  text-zinc-400 flex gap-[0.5vw] absolute items-center top-[3vh] left-[3vh] hover:text-white duration-300 cursor-pointer ">
        <IoIosArrowBack />
        <p>Back</p>
        </div>

       
        <WorkLeft/>
        <WorkMiddle/>
        <WorkRight/>     
    </div>
  )
}

export default Work
