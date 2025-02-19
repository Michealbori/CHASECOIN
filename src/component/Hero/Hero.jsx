import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <>
      <div className="HeroSection">
        <section className="TextSection">
          <p>Welcome to CHASE COIN - The Future of Meme Cryptocurrency!</p>
          <h2>
            Welcome to CHASE COIN, where humor meets innovation in the
            cryptocurrency space! As a meme-based digital currency, CHASE COIN
            empowers our community to engage, create, and thrive in the world of
            memes while enjoying the benefits of blockchain technology.
          </h2>
          <p>Join the Meme Revolution with CHASE COIN!</p>
          <a href="
      http://dexscreener.com/solana/hpytdubkyrztaoaspprgyn7llfskbzqxhokgihhy9k6c"> <button className="shiny-cta" id="buyNow"><span>BUY NOW <img className="buttonCoin" src="/coin.png" alt="" /></span></button></a>
        </section>

        <section className="imageSection">
          <img src="/coverBg.jpg" alt="" />
        </section>
      </div>
      <marquee behavior="" direction="" className="marquee-text">
        Invest In The Future with CHASE COIN!  <img className="buttonCoin" src="/coin.png" alt="" />
      </marquee>
    </>
  );
}
