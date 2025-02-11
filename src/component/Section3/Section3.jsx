import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Section3.css"
export default function Section3() {
    useEffect(() => {
      AOS.init({
        duration: 1000, 
        
      });
    }, []);
  return (
<div className='Section3'>

<section className='SectionText3'  data-aos="fade-right">
<p>Track Your Investment with Real-Time Data
</p>
   <h2>Keep an eye on your investment! Our live chart provides real-time data on CHASE COIN's performance, helping you make informed decisions. Whether you're a seasoned investor or just starting, transparency is key to your success.


</h2>
<p className='stay'>Stay Informed with Our Live Chart, View the latest trends and performance metrics of CHASE COIN right here!

</p>
</section>

<section className='Section3image'  data-aos="fade-left">
<img src="/img.jpg" alt="" />
</section>
</div>
  )
}
