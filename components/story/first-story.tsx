'use client'

import Image from 'next/image';
import Link from "next/link";

import story1 from "@/public/story2.jpg"


export function FirstStory() {
    return (
        <>
            <section className='container mx-auto'>
                <div className="px-30 py-10 flex flex-col items-center gap-10">
                    <h1 className="text-4xl text-center font-bold ">Little bunny Tommy</h1>
                    <div className='px-4 mt-4'>
                        <Image src={story1} alt='' className='rounded-lg object-cover xl:float-left pr-4'/>
                        <p className='text-lg pt-6 xl:text-2xl xl:pt-0 leading-6 text-justify'><span className='font-semibold text-5xl'>O</span>nce upon a time, in a magical forest, lived a little bunny named Tommy. Tommy was as curious as they come. His big, floppy ears were always on high alert, catching every sound that echoed through the woods.
                        Whenever Tommy went for a stroll with his parents, he discovered new wonders. He watched colorful butterflies dance in the air, listened to the sweet melodies of singing birds, and tried to catch delicate snowflakes on his soft fur when winter arrived in the magical forest.
                        Tommy loved his life and always smiled at everything around him. His smile was like a sunbeam that brightened up the entire forest. Tommys parents were the most important beings in his world. Together, they played hide-and-seek, hopped around colorful flowers, and learned from each other.
                        Even as bedtime approached, Tommy was full of joy. He nestled comfortably in his soft nest made of moss, and Mom and Dad told him bedtime stories about the adventures of other animals in the forest. Tommy closed his big, curious eyes, dreaming of the next magical discoveries he would make the next day.
                        And so, Tommy, the little bunny full of joy, lived in his magical forest, loving every moment of his wonderful life.</p>
                    </div>
                </div>
                
            </section>
        </>
    )
}