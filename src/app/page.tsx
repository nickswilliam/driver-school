/* eslint-disable @next/next/no-img-element */
"use client";

import About from "@/components/About/About";
import CardsHero from "@/components/Cards-Hero/CardsHero";
import Hero from "@/components/Hero/Hero";
import Home from "@/pages/Home/Home";


export default function Page() {
  return (
    <Home>
      <Hero/>
      <CardsHero/>
      <About/>
    </Home>
  );
}
