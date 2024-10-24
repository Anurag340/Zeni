
import Home from "./Components/Home/Home"
import Loader from "./Components/Loader/Loader"
import Menu from "./Components/Menu/Menu"
import Work from "./Components/Work/Work"
import About from "./Components/About/About"
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useRef, useState } from "react"
import Projects from "./Components/Projects/Projects"
import { useMotionValueEvent, useScroll } from "framer-motion"
import { Route, Routes } from "react-router-dom"



const App = () => {
  const [loading , setLoading] = useState(true);
  useEffect(() => {
    // Check if the loader has already been shown using sessionStorage
    const hasLoaderBeenShown = sessionStorage.getItem('loaderShown');

    if (!hasLoaderBeenShown) {
      // If the loader has never been shown, display it and set a flag in sessionStorage
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('loaderShown', 'true');  // Mark loader as shown
      }, 3000);  // Show loader for 3 seconds

      return () => clearTimeout(timer);  // Cleanup timer on unmount
    } else {
      // If loader has already been shown, skip directly to the main content
      setLoading(false);
    }
  }, []);



  
  return (
    <div  className=" bg-zinc-900 h-screen w-screen ">
      {loading ? (
        <Loader />
      ) : (
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      )}



    </div>


  )
}

export default App
