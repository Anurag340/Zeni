import './Animation.css';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Loader = () => {
  useEffect(()=>{

  },[])
    const ldr = useRef(null);
    const tl = gsap.timeline();
    useGSAP(()=>{
        tl.to(ldr.current,
             {
                duration: 5,
                opacity: 0
             })
        .to(ldr.current,{
          y:-1000
        })
      })
  return (
    <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]' ref={ldr}>
      {/* Loader Circle */}
      <div className="loader">
        <svg viewBox="0 0 80 80">
          <circle id="test" cx="40" cy="40" r="32"></circle>
        </svg>
      </div>

      {/* Loader Triangle */}
      <div className="loader triangle">
        <svg viewBox="0 0 86 80">
          <polygon points="43 8 79 72 7 72"></polygon>
        </svg>
      </div>

      {/* Loader Square */}
      <div className="loader">
        <svg viewBox="0 0 80 80">
          <rect x="8" y="8" width="64" height="64"></rect>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
