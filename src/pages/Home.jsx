import React from "react";
import WhatWeDo from "../components/WhatWeDo";
import Workflow from "../components/Workflow";
import Clients from "../components/Clients";
import BlogSection from "../components/BlogSection";
import FAQ from "../components/FAQ";
import Test from "../components/Test";
import Abouth from "../components/Abouth";
import Hero from "../components/Hero";


const Home = () => {
  return (
    <main className="font-['Montserrat'] bg-white text-black">
     
      {/* Components */}
      <Hero/>
      <Abouth/>
      <WhatWeDo />
      <Workflow />
      <Clients />
      <BlogSection />
      <FAQ />
      <Test />
    </main>
  );
};

export default Home;
