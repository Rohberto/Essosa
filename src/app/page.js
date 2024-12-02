'use client'; // Ensure this runs on the client side

import Image from "next/image";
import Hero from "./Components/Hero";
import Shop from "./Components/Shop";
import About from "./Components/About";
import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

import Collections from "./Components/Collection";
import Order from "./Components/Order";

export default function Home() {

  return (
    <div className="container">
      <Hero/>
      <Shop/>
      <About/>
      <Collections/>
      <Order/>
    </div>
  );
}
