import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <>
      <main>
        <h1 className="text-3xl font-bold  text-pink">

          Welcome to the world of GTA and GSAP
        </h1>
      </main>
    </>
  );
};

export default App;
