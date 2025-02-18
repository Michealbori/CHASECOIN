import React from "react";
import "./Section2.css";

export default function Section2() {
  return (
    <div className="HeroSection">
      <section className="imageSection">
        <img src="/chase3.jpg" alt="" />
      </section>
      <section className="TextSection">
        <p>The Power of Community</p>
        <h2>
          At CHASE COIN, we believe in the strength of our community. Stay
          updated and connect with fellow meme lovers through our social
          platforms. Join our vibrant Telegram group for real-time discussions
          and announcements, and follow us on Twitter for the latest news and
          updates.
        </h2>
        <p> Connect with Fellow CHASE COIN Enthusiasts</p>
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
      </section>
    </div>
  );
}
