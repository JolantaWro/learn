'use client'

import Image from 'next/image';

import story3 from "../../public/ducks.jpg"


export function StoryN3() {
    return (
        <>
            <section className='container mx-auto'>
                <div className="px-30 py-10 flex flex-col items-center gap-10">
                    <h1 className="text-3xl text-center font-bold">Duckling</h1>

                    <div className='px-4 mt-4'>
                        <Image src={story3} alt='' className='rounded-lg object-cover"'/>
                        <p className='text-lg pt-6'>Once upon a sunny day in a small village, there lived a duckling named Katie. Katie was very curious about the world and loved running around the meadow with her siblings. 
                        However, one day, while they were all swimming in the pond, Katie saw something interesting at the other end of the water.Without thinking twice, Katie swam towards that intriguing place, fascinated by the mysterious surroundings. 
                        As she ventured further, she began to feel a little scared. Everything around her was unfamiliar, and her family disappeared from her sight. Katie started quacking loudly, but her siblings were too far away to hear her.Katie began to worry, but then suddenly, her sister, Cornelia, appeared. 
                        Cornelia noticed that Katie had drifted away from the family and immediately ran to find her. When they met, Cornelia hugged Katie, and together, they happily returned to their family.The duck family was overjoyed when Katie and Cornelia rejoined them. They all immersed themselves in joyful swimming, with the sun shining on their colorful feathers. 
                        Katie realized that while it might be interesting to explore new things at times, it is always best to be with loved ones who take care of her.</p>
                    </div>
                </div>
            </section>
        </>
    )
}