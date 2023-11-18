'use client'

import Image from 'next/image';
import Link from "next/link";
import reading from "../../public/globalLerning.jpg"
import english from "../../public/englishLerning.jpg"
import blocks from "../../public/blocks.jpg"
import story from "../../public/story.jpg"


export function BlogContent() {
    return (
        <>
            <section className='px-4 mt-8 xl:col-span-12'>
                <h3 className='font-bold text-lg text-center border shadow-md mb-6 xl:w-[400px] xl:mb-6'>Blog</h3>
                <div className='grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6'>
                    <div className='flex flex-col'>
                        <div className='h-[132px] w-full rounded-lg flex items-center justify-center border border-zinc-100'>
                            <Image className="md:h-[132px]" alt="" src={reading} />
                        </div>
                        <h3 className='font-bold mt-2 text-base'>Learning to read by learning global reading</h3>
                        <p className='line-clamp-4 mt-2 text-base'>Want to learn more about global reading? Learn the definition, theoretical foundations, scientific research, effectiveness and some other interesting facts.
                        Global reading, the Doman method and learning to read using the Miracle Child method are sometimes confused - due to the similarity of the cards for learning to read. Meanwhile,
                        we are dealing with two concepts of child development: the Miracle Child method and the Glen Doman method.
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='h-[132px] w-full rounded-lg flex items-center justify-center border border-zinc-100 md:h-[132px]'>
                            <Image className="md:h-[132px]" alt="" src={english} />
                        </div>
                        <h3 className='font-bold mt-2 text-base'>How to teach children English from an early age?</h3>
                        <p className='line-clamp-4 mt-2 text-base'>Do you want your child to have a better start in life and catch the bug to learn English from preschool age? 
                        If you are wondering how to do it so that your child does not get discouraged, but English becomes entertainment for him - you are come to the right place. We hope to dispel all your doubts.
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='h-[132px] w-full rounded-lg flex items-center justify-center border border-zinc-100 md:h-[132px]'>
                            <Image className="md:h-[132px]" alt="" src={english} />
                        </div>
                        <h3 className='font-bold mt-2 text-base'>How to teach children English from an early age?</h3>
                        <p className='line-clamp-4 mt-2 text-base'>Do you want your child to have a better start in life and catch the bug to learn English from preschool age? 
                        If you are wondering how to do it so that your child does not get discouraged, but English becomes entertainment for him - you are come to the right place. We hope to dispel all your doubts.
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='h-[132px] w-full rounded-lg flex items-center justify-center border border-zinc-100 md:h-[132px]'>
                            <Image className="md:h-[132px]" alt="" src={reading} />
                        </div>
                        <h3 className='font-bold mt-2 text-base'>Learning to read by learning global reading</h3>
                        <p className='line-clamp-4 mt-2 text-base'>Want to learn more about global reading? Learn the definition, theoretical foundations, scientific research, effectiveness and some other interesting facts.
                        Global reading, the Doman method and learning to read using the Miracle Child method are sometimes confused - due to the similarity of the cards for learning to read. Meanwhile,
                        we are dealing with two concepts of child development: the Miracle Child method and the Glen Doman method.
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='h-[132px] w-full rounded-lg flex items-center justify-center border border-zinc-100 md:h-[132px]'>
                            <Image className="md:h-[132px]" alt="" src={english} />
                        </div>
                        <h3 className='font-bold mt-2 text-base'>How to teach children English from an early age?</h3>
                        <p className='line-clamp-4 mt-2 text-base'>Do you want your child to have a better start in life and catch the bug to learn English from preschool age? 
                        If you are wondering how to do it so that your child does not get discouraged, but English becomes entertainment for him - you are come to the right place. We hope to dispel all your doubts.
                        </p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='h-[132px] w-full rounded-lg flex items-center justify-center border border-zinc-100 md:h-[132px]'>
                            <Image className="md:h-[132px]" alt="" src={english} />
                        </div>
                        <h3 className='font-bold mt-2 text-base'>How to teach children English from an early age?</h3>
                        <p className='line-clamp-4 mt-2 text-base'>Do you want your child to have a better start in life and catch the bug to learn English from preschool age? 
                        If you are wondering how to do it so that your child does not get discouraged, but English becomes entertainment for him - you are come to the right place. We hope to dispel all your doubts.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}