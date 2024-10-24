
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import LocomotiveScroll from 'locomotive-scroll';
import Tiles from "./Tiles"
import MiniCards from "./MiniCards"
import { useState } from "react"
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Projects = () => {
  const locomotiveScroll = new LocomotiveScroll();

  const [pos,setpos] = useState(0);

  const mover = (val)=>{
    setpos(val*15);
  }


    const data = ["Rainfall" , "TTR" , "FI 2022" , "Dexter" , "Enigma"]

    const { scrollYProgress } = useScroll();
  
    const [images,setimages] = useState([
      {
        id:1,
        url:"https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2022/04/62691e3f5b03b475709242.png",
        top:'14vh',
        left:'30vw',
        isActive:false 
      },
      {
        id:2,
        url:"https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2022/03/622c82f8a80bf768794737.png",
        top:'24vh',
        left:'45vw',
        isActive:false 
      },
      {
        id:3,
        url:"https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2022/10/63450e17d43c9156312604.png",
        top:'30vh',
        left:'35vw',
        isActive:false 
      },
      {
        id:4,
        url:"https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2022/10/6357d93c253ca036595692.png",
        top:'39vh',
        left:'50vw',
        isActive:false 
      },
      {
        id:5,
        url:"https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2022/09/632d9d79ccb3e938410704.png",
        top:'49vh',
        left:'40vw',
        isActive:false 
      }])
  
    scrollYProgress.on("change",(latest)=>{
      console.log(Math.floor(latest*100));
      function imagesShow(arr){
        setimages((prev)=>(
          prev.map((item,index)=>(
            arr.indexOf(index)=== -1 ? ({...item , isActive:false}) : ({...item ,isActive:true})
          ))
        ))
      }
  
      switch(Math.floor(latest*100)){
        case 0:
          imagesShow([])
          break;
        case 7:
          imagesShow([0])
          break;
        case 15:
          imagesShow([0,1])
          break;
        case 22:
          imagesShow([0,1,2])
          break;
        case 30:
          imagesShow([0,1,2,3])
          break;
        case 40:
          imagesShow([0,1,2,3,4])
          break;
      }
      console.log(Math.floor(latest*100));
    })

  
    const navigate = useNavigate();




  return (
    <div className="bg-zinc-950 h-screen w-screen ">
          <div onClick={()=>navigate(-1)} className="z-50 text-zinc-400 absolute top-[5vh] left-[5vh] flex items-center gap-[0.5vw] hover:cursor-pointer hover:text-white duration-300">
            <IoIosArrowBack/>
            <p>Back</p>
          </div>
        <div className="h-full w-full relative object-cover object-center ">
          {images.map((item)=>(
              <MiniCards key={item.id} obj={item}/>
          ))}
            <img className="h-full w-full" src="https://images.prismic.io/arock-website-2023/ZiB1vPPdc1huKl4s_AROCK_Look_12.jpg?fm=webp&q=100&fit=crop" alt="" />

        </div>
        <div className=" w-full flex  flex-col bg-zinc-950 relative">
          {data.map((item , index)=>(
            <Tiles data={item} mover={mover} count={index} key={index} />
          ))}

          <div className=" pointer-events-none w-full h-full absolute">
              <motion.div initial={{y:pos}} animate={{y:pos + `rem`}} transition={{ease:[0.76,0,0.24,1] , duration:.6}} className="bg-blue-400 h-[15rem] w-[24vw] absolute left-[30%] overflow-hidden">
                  <motion.div transition={{ease:[0.76,0,0.24,1] , duration:.5}} animate={{y:-pos + `rem`}} className="bg-red-400 h-full w-full">
                    <video autoPlay muted loop src="public\Videos\rainfall-43.webm"></video>
                  </motion.div>
                  <motion.div transition={{ease:[0.76,0,0.24,1] , duration:.5}} animate={{y:-pos + `rem`}} className="bg-green-400 h-full w-full">
                  <video autoPlay muted loop src="public\Videos\ttr-43.webm"></video>
                  </motion.div>
                  <motion.div transition={{ease:[0.76,0,0.24,1] , duration:.5}} animate={{y:-pos + `rem`}} className="bg-blue-400 h-full w-full">
                  <video autoPlay muted loop src="public\Videos\kablamo-43.webm"></video>
                  </motion.div>
                  <motion.div transition={{ease:[0.76,0,0.24,1] , duration:.5}} animate={{y:-pos + `rem`}} className="bg-yellow-400 h-full w-full">
                  <video autoPlay muted loop src="public\Videos\botify-43.webm"></video>
                  </motion.div>
                  <motion.div transition={{ease:[0.76,0,0.24,1] , duration:.5}} animate={{y:-pos + `rem`}} className="bg-orange-400 h-full w-full">
                  <video autoPlay muted loop src="public\Videos\maniv-43.webm"></video>
                  </motion.div>
              </motion.div>
          </div>




        </div>
      
    </div>
  )
}

export default Projects


