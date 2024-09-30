"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/Hero";

 function Hero() {
  return (
    <>
  <HeroParallax products={products} />
  </>
)}
export const products = [
  {
    title: "Moonbeam",
   
    thumbnail:
      "/1.jpg",
  },

  {
    title: "Rogue",

    thumbnail:
      "/2.webp",
  },

  {
    title: "Editorially",
   
    thumbnail:
      "/3.webp",
  },
 {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "/4.webp",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "/5.webp",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "/6.webp",
  },
  /*/{
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },/*/
];
export default Hero;