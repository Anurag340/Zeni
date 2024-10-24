import { div } from "framer-motion/client"

const MiniCards = ({obj}) => {

   const {url , top , left, isActive} = obj;


  return (
    <div style={{top:top,left:left}} className={`w-[20vw] h-[20vw] object-cover  object-center overflow-hidden absolute  rounded-xl ${isActive? 'block' :' hidden'} `}>
        <img className="h-full w-full " src={url} alt="" />
    </div>

    
  )
}

export default MiniCards

//{`w-[20vw] h-[40vh] bg-blue-700 object-cover object-center overflow-hidden -translate-x-[50%] -translate-y-[50%] rounded-lg ${isActive? ' block' :' hidden'} left-${left} top-${top} absolute z-50`}
