"use client";
import React from "react";
import { Boxes } from "../components/ui/aurora-background";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Chatbot from "@/components/ui/Chatbot";

function BackgroundBoxesDemo() {
  return (
    <>
      <div className="h-screen w-full relative overflow-hidden bg-white text-black flex flex-col items-center justify-center">
      
        <div
          className="absolute inset-0 w-full h-full bg-white z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none"
        />
   
        <Boxes />
     
        <h1 className={cn("md:text-4xl text-2xl text-black relative z-20")}>
          Policy Insurance Using AI
        </h1>
        <Link href="/Hero">
          <button className="rounded-xl p-4 bg-black mt-[30px] text-white relative z-30 transition duration-300 ease-in-out transform hover:bg-blue-200 hover:text-black">
            Get Started
          </button>
        </Link>
      </div>
      
    </>
  );
}

export default BackgroundBoxesDemo;
