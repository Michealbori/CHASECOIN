import React from 'react'

export default function Iframe() {
  return (
    <div style={{ width: "1200px", height: "600px", marginTop: "70px" }}>
      <iframe
        src="https://raydium.io/swap/?inputMint=SOL&outputMint=USDC"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
      ></iframe>


</div>
  )
}

