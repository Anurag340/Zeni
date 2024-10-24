import { useEffect, useRef } from "react";
import Footer from "../Footer/Footer"
import Hero from "../Hero/Hero"
import Navbar from "../Navbar/Navbar"
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';


const Home = () => {
  const mainpg = useRef(null);

  useEffect(() => {
    // Check if the animation has already been shown using sessionStorage
    const hasAnimationBeenShown = sessionStorage.getItem('homeAnimationShown');

    if (!hasAnimationBeenShown) {
      // Run GSAP animation if it hasn't been shown
      gsap.from(mainpg.current, {
        opacity: 0,
        duration: 2,
        delay: 4,
        y: 700,
        ease: "power4.in",
      });

      // Set sessionStorage flag to prevent the animation from running again
      sessionStorage.setItem('homeAnimationShown', 'true');
    }
    // If the animation has already been shown, skip it
  }, []);

  return (
    <div ref={mainpg} className= "bg-cover  bg-center bg-gray-950 bg-[url(https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop)] h-screen w-screen">
    <Navbar/>
    <Hero/>
    <Footer/>
    
  </div>
  )
}

export default Home
