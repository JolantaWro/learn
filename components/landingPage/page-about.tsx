'use client'

import Image from 'next/image';
import Link from "next/link";
import mainView from "../../public/puzzle.jpg"

export function AboutPage() {
    return (
        <>
            <section className='px-4 mt-8 text-justify xl:col-span-5'>
                <Image className="md:float-left md:w-[400px] md:h-[200px] md:mr-4" alt="" src={mainView} />
                <h2 className='font-bold text-xl mt-6 '>Are you ready to embark on a journey that combines fun, education, and mental stimulation? Look no further! 
                Welcome to our website, a hub for all things brain-boosting and educational.</h2>
                <p className='text-lg'>We are dedicated to providing you with a wide array of easy, brain-puzzling games and insightful blog posts on various teaching methods, 
                catering to learners of all ages, from infants to adults.</p> 
                <h3 className='text-lg font-bold mt-3'>Games for All Ages</h3>
                <p className='text-lg'>If you are a fan of games that challenge your mind and provide hours of entertainment, you are in the right place. Our collection of games is designed to stimulate your brain, 
                    enhancing cognitive abilities such as problem-solving, critical thinking, and mathematical skills. From simple addition and subtraction games that keep your math skills sharp to captivating puzzles and brain-teasers, 
                    there is something for everyone.</p>
                <div className=''>
                    <ul className='mt-3 list-disc text-lg'><h2 className='text-lg font-bold'>Our blog posts cover a broad range of topics, including:</h2>
                        <li className='ml-4'>Early Childhood Education: Discover the best practices for teaching infants and toddlers, fostering their intellectual and emotional growth, and preparing them for a bright future.</li>
                        <li className='ml-4'>K-12 Education: Find innovative ways to enhance your {`child's`} school experience, from study techniques to extracurricular activities that promote a well-rounded education.</li>
                        <li className='ml-4'>Adult Learning: {`It's`} never too late to learn! Explore various methods and resources for adult learners, whether {`you're`} pursuing a new skill or furthering your education.</li>
                        <li className='ml-4'>Educational Tools: Stay updated on the latest educational technologies, apps, and platforms that can make your learning journey more engaging and efficient.</li>
                    </ul>
                </div>
                <p className='text-lg mt-2'>Stay tuned for exciting updates, game recommendations, and informative blog posts that will enrich your educational experience.
                {`Let's`} embark on this enlightening journey together. Welcome to a world of brain-boosting games and transformative learning methods!</p>
                
            </section>
        </>
    )
}