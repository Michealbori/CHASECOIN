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
{/* <img src="/img.jpg" alt="" /> */}
<iframe
        src="https://phantom.com/tokens/solana/2ckep8iZpd1YRpMELsBpAL5gkN8jufgvwez491i66Kbx?referralId=glzklvkwynl&timeFrame=1D"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
      ></iframe>
</section>
</div>
  )
}


// https://raydium.io/swap/?inputMint=sol&outputMint=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R