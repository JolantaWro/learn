'use client'

import Image from 'next/image';
import Link from "next/link";

import story from "../../public/story.jpg"


export function FirstStory() {
    return (
        <>
            <section className=''>
                <Image src={story} alt=''/>
                <h1></h1>
                <p>Once upon a time, in a magical forest, lived a little bunny named Tommy. Tommy was as curious as they come. His big, floppy ears were always on high alert, catching every sound that echoed through the woods.
                    Whenever Tommy went for a stroll with his parents, he discovered new wonders. He watched colorful butterflies dance in the air, listened to the sweet melodies of singing birds, and tried to catch delicate snowflakes on his soft fur when winter arrived in the magical forest.
                    Tommy loved his life and always smiled at everything around him. His smile was like a sunbeam that brightened up the entire forest. Tommy's parents were the most important beings in his world. Together, they played hide-and-seek, hopped around colorful flowers, and learned from each other.
                    Even as bedtime approached, Tommy was full of joy. He nestled comfortably in his soft nest made of moss, and Mom and Dad told him bedtime stories about the adventures of other animals in the forest. Tommy closed his big, curious eyes, dreaming of the next magical discoveries he would make the next day.
                    And so, Tommy, the little bunny full of joy, lived in his magical forest, loving every moment of his wonderful life.</p>
            </section>
        </>
    )
}