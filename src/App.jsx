import { useState } from 'react'
import Home from './component/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"

function App() {

  return (
    <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
