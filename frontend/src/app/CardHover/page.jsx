"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
const content = [
  {
    title: "Information Retrieval",
    description:
      "Get all your information filled automatically by AI just provide us few insights of yourself.SDubmit the FORM and see the results click on 'Information Retrieval' to proceed",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/7.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  /*/{
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/8.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },/*/
  {
    title: "EasyLanguage",
    description:
      "Get the simplified version of your policy , words that are understandable by you so that there are no misunderstandings. To make your policy more readable click on 'Easy Language'",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
         <Image
          src="/9.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Take A Quiz",
    description:
      "Test your Knowledge and be up to date with the latest policy information.Click on 'Take A Quiz' to test yorself and gain more information.",
      
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-black">
      
        <Image
          src="/10.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    (<>
      <div className='bg-slate-800 text-white h-[60px]'><ul className='text-xl flex justify-center gap-[30px]'><Link href='/Hero'><li className='-ml-[540px] mt-[10px]'><FaHome ></FaHome></li></Link>
   < li className=' mt-[10px]'>EasyText</li>
      <li className='mt-[10px]'>AutoInfo</li>
     
      <Link href='/Quiz'><li className='mt-[10px]'>  Quiz
      </li></Link>
      
    
    </ul></div>
        <div className="p-10 text-black font-bold mt-[90px]">
      <StickyScroll content={content} />
    </div>
    </>
)
  );
}


 

export default StickyScrollRevealDemo;