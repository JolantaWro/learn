'use client'

import Image from 'next/image';

import story4 from "../../public/story4.jpg"


export function StoryN4() {
    return (
        <>
            <section className='container mx-auto'>
                <div className="px-30 py-10 flex flex-col items-center gap-10">
                    <h1 className="text-3xl text-center font-bold">The Brave Little Steps: Philip&apos;s Potty Adventure</h1>

                    <div className='px-4 mt-4'>
                        <Image src={story4} alt='' className='rounded-lg object-cover"'/>
                        <p>Once upon a time, in a little town, there lived a small boy named Philip. Philip was already a big boy, but he was still learning certain things. His parents always told him that one of the most important skills he needed to master was using the potty. 
                            One day, Philip decided to try peeing not in a diaper but in a little potty. He was a bit nervous because it was a new skill for him. He went to the bathroom, sat on his small potty, and began to learn.
                            It took him a little while, but his parents were very proud of him. His mom brought him a little book to read to help him relax, and his dad stood beside him, encouraging him to be brave.
                            After some time, Philip did it! He successfully used the potty like a real big boy. His parents were overjoyed with pride, celebrating this small but significant step in Philip&apos;s growing up.
                            From that day on, Philip was even prouder of his new skill. Everyone celebrated the success together, and Philip knew that learning new things could be challenging, but it was always worth trying.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}