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
            <img src="/twitter.png" alt="twitter Page" />
          </a>
        </div>
 <button className="shiny-cta" id="buyNow"><span>BUY NOW <img className="buttonCoin" src="/coin.png" alt="" /></span></button>
      </section>
    </div>
  );
}
