import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Section4.css"
export default function Section4() {
      useEffect(() => {
        AOS.init({
          duration: 1000, 
          
        });
      }, []);
  return (
    <div className="HeroSection" id="SectionBelow" >
      
      <section className="imageSection"  data-aos="fade-right">
        <img src="/chase4.jpg" alt="" />
      </section>

      <section className="TextSection" data-aos="fade-left">
        <p>Get Involved and Join the Movement</p>
        <h2>
        To become part of the CHASE COIN movement, you’ll need our contract address to make your purchase and participate in our ecosystem.

        </h2>
        <p> Ready to Dive In? Here’s How!
        </p>
        
        <div className="Button">
          <a
            href="https://t.me/mychasecoin"
            class="social-btn telegram telegramButton"
            target="_blank"
          >
            <img src="/telegram.png" alt="telegram Page" />
          </a>
          <a
            href="https://x.com/CHASECOINSOL"
            class="social-btn twitter"
            target="_blank"
          >
            <img src="/X.png" alt="X Page" />
          </a>
        </div>
 <button className="shiny-cta" id="buyNow"><span>BUY NOW <img className="buttonCoin" src="/coin.png" alt="" /></span></button>
      </section>
    </div>
  );
}
