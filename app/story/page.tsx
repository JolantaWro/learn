import Link from "next/link";

import Image from 'next/image';
import storyMain from "@/public/storyMainPage.jpg"


export default function StoryHome() {
  return (
    <main className="container mx-auto">
      <div className="px-30  py-10 flex flex-col items-center">
        <h1 className="text-5xl">Main Page of .........Story.........</h1>
          <Image src={storyMain} alt=""/>
          <p>................</p>
          <p>Something about storys in portal</p>
          <p>................</p>
          <p>Link to first story</p>
          <Link href="/story/baby">Little Tommy</Link>


      </div>
        
    </main>
  )
}
