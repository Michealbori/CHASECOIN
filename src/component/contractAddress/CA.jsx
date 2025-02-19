import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./CA.css"
export default function CA() {
          useEffect(() => {
            AOS.init({
              duration: 1000, 
              
            });
          }, []);
  return (
    <div className='CA'>
        <h4>contract address</h4>
      <h5 data-aos="zoom-in-down">2ckep8iZpd1YRpMELsBpAL5gkN8jufgvwez491i66Kbx </h5>
    </div>
  )
}
