import CenterText from "./CenterText"
import SubHeading from "./SubHeading"

const Hero = () => {
  
  return (
    <div className="flex flex-col absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <CenterText/>
        <SubHeading/>
    </div>
  )
}

export default Hero
