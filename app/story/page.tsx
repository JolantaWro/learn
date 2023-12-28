import Link from "next/link";

import Image from 'next/image';
import storyMain from "@/public/storyMainPage.jpg"


export default function StoryHome() {
  return (
    <main className="container mx-auto">
      <div className="px-30 py-10 flex flex-col items-center gap-10">
          <Image src={storyMain} alt=""/>
          <h1 className="text-5xl">Reading opens doors to imagination</h1>
          <h3 className="text-2xl text-gray-600">Secect age</h3>
          <div className="flex flex-row gap-6">
            <Link href="/story/baby" className="py-4 px-10 bg-black rounded shadow-md">
              <span className="text-white text-base font-inter not-italic font-medium leading-[150%]"> &#62; 3</span>
            </Link>
            <Link href="" className="py-4 px-10 bg-black rounded shadow-md">
              <span className="text-white text-base font-inter not-italic font-medium leading-[150%]"> &#43; 3</span>
            </Link>
            <Link href="" className="py-4 px-10 bg-black rounded shadow-md">
              <span className="text-white text-base font-inter not-italic font-medium leading-[150%]"> &#43; 6</span>
            </Link>
            <Link href="" className="py-4 px-10 bg-black rounded shadow-md">
              <span className="text-white text-base font-inter not-italic font-medium leading-[150%]"> &#43; 9</span>
            </Link>
          </div>




          {/* <Link href="/story/baby">Little Tommy</Link>
          <p>...............</p>
          <Link href="/story/middle">Little Rabit</Link> */}


      </div>
        
    </main>
  )
}
