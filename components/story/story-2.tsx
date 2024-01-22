'use client'

import Image from 'next/image';
import Link from "next/link";

import story2 from "../../public/girlAndBear.jpg"


export function StoryNr2() {
    return (
        <>
            <section className='container mx-auto'>
                <div className="px-30 py-10 flex flex-col items-center gap-10">
                    <h1 className="text-4xl text-center font-bold">Ruby</h1>

                    <div className='px-4 mt-4'>
                        <Image src={story2} alt='' className='rounded-lg object-cover xl:float-left pr-4'/>
                        <p className='text-lg pt-6 xl:text-2xl xl:pt-0 leading-6 text-justify'><span className='font-semibold text-5xl'>O</span>nce upon a time, there was a little girl named Ruby who had her best friend in the whole world - a stuffed teddy bear named Paws. Paws was soft, fluffy, and always ready for a hug. Ruby and Paws were inseparable; they played together, went on walks, and took naps together. 
                    However, one day, when Ruby and her mom were in the store, Paws disappeared. Ruby felt very sad and began searching for her beloved teddy bear all over the store. Mom tried to comfort her, but for Ruby, nothing was more important than finding Paws.
                    After many searches and moments of sadness, Ruby realized that she might never find her favorite stuffed animal again. However, when they returned home, Mom found Paws under the couch. Ruby was so happy that she shouted with joy and immediately hugged him. Paws was safe and sound, ready for more adventures.
                    From that day on, Ruby and Paws were even more inseparable. The little girl promised her beloved teddy bear that she would never lose him again, and Paws promised to always be by her side, no matter what. And so, Ruby, Paws, and Mom shared many joyful moments, full of love and adventures.</p>
                    </div>
                </div>
            </section>
        </>
    )
}