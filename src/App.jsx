import { useState } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import Section2 from "./component/Section2/Section2";
import Footer from "./component/Footer/Footer";
import Chart from "./component/Chart/Chart";
import Section3 from "./component/Section3/Section3";
import Section4 from "./component/Section4/Section4";
import Admin from "./component/Admin/Admin";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Chart />
      <Admin />
      {/* <Footer /> */}
    </>
  );
}

export default App;
