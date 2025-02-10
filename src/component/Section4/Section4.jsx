import React from "react";
import "./Section4.css"
export default function Section4() {
  return (
    <div className="HeroSection" id="SectionBelow" >
      <section className="imageSection">
        <img src="/chase2.jpg" alt="" />
      </section>
      <section className="TextSection">
        <p>Get Involved and Join the Movement</p>
        <h2>
        To become part of the CHASE COIN movement, you’ll need our contract address to make your purchase and participate in our ecosystem.

        </h2>
        <p> Ready to Dive In? Here’s How!
        </p>
        
 <div className="Button">
 <a href="https://t.me/mychasecoin" class="social-btn telegram" target="_blank">
                <i class="fab fa-telegram-plane"></i>
            </a>
            <a href="https://x.com/CHASECOINSOL" class="social-btn twitter" target="_blank">
                <i class="fab fa-twitter"></i>
            </a>
            
 </div>
 <button className="shiny-cta" id="buyNow"><span>BUY NOW 🪙</span></button>
      </section>
    </div>
  );
}
