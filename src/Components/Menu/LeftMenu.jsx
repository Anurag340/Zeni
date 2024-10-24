import { Tilt } from '@jdion/tilt-react'

const LeftMenu = () => {
  return (
    <div className='h-full w-[60%] flex justify-center items-center overflow-hidden  duration-700 ease-in-out'>
        <Tilt className=" h-[80%] w-[80%] relative overflow-hidden flex justify-center items-center ">
        
        <img className="h-full w-full object-cover opacity-90 scale-[0.75] absolute" src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
        
        <img className="h-full w-full object-cover opacity-80 scale-[0.81] absolute" src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
        {/*  */}
        <img className="h-full w-full object-cover opacity-70 scale-[0.85] absolute" src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
        <img className="h-full w-full object-cover opacity-60 scale-[0.91] absolute" src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
        {/*  */}
        <img className="h-full w-full object-cover opacity-50 scale-[0.97] absolute" src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
        <img className="h-full w-full object-cover opacity-30  absolute" src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
        
    </Tilt>
  
    </div>

  )
}

export default LeftMenu
