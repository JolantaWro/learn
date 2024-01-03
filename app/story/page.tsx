import Link from "next/link";

import Image from 'next/image';
import storyMain from "@/public/storyMainPage.jpg"


export default function StoryHome() {
  return (
    <main className="container mx-auto">
      <div className="px-30 py-10 flex flex-col items-center gap-10">
          <Image src={storyMain} alt=""/>
          <h1 className="text-5xl">Reading opens doors to imagination</h1>
          <h3 className="text-2xl text-gray-600 font-bold">Select age</h3>
          <div className="flex flex-row gap-6">
            <Link href="/story/baby" className="py-4 px-10 bg-black rounded shadow-md">
              <span className="text-white text-base font-inter not-italic font-bold leading-[150%]"> &#62; 3</span>
            </Link>
            <Link href="/story/middle" className="py-4 px-10 bg-black rounded shadow-md">
              <span className="text-white text-base font-inter not-italic font-bold leading-[150%]"> &#43; 3</span>
            </Link>
            <Link href="/story/kid-six-age" className="py-4 px-10 bg-black rounded shadow-md">
              <span className="text-white text-base font-inter not-italic font-bold leading-[150%]"> &#43; 6</span>
            </Link>
            <Link href="/story/kid-nine-age" className="py-4 px-10 bg-black rounded shadow-md">
              <span className="text-white text-base font-inter not-italic font-bold leading-[150%]"> &#43; 9</span>
            </Link>
          </div>
      </div>
        
    </main>
  )
}
