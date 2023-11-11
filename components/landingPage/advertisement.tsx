'use client'

import Image from 'next/image';
import Link from "next/link";
import advertisement from "../../public/advertisement.png"
import star from "../../public/star.svg"

export function Advertisement() {
    return (
        <>
            <section className='px-4 mt-4'>
                <div className='bg-zinc-100 pb-4'>
                    <p className='uppercase text-center font-medium pt-1 text-zinc-600'>Advertisement</p>
                    <div className='flex w-full bg-zinc-400 text-zinc-50'>
                        <div className='w-1/2 py-5 pl-5'>
                            <Image className="" alt="Małe charaktery" src={advertisement}  />
                        </div>
                        <div className='w-1/2 flex flex-col justify-center p-4'>
                            <div className='flex'>
                                <Image className="" alt="Star" src={star} />
                                <Image className="" alt="Star" src={star} />
                                <Image className="" alt="Star" src={star} />
                                <Image className="" alt="Star" src={star} />
                                <Image className="" alt="Star" src={star} />
                            </div>
                            <h3 className='font-bold'>Małe Charaktery</h3>
                            <p className='text-xs mt-4'>To miesięcznik, który uczy dziecko akceptacji przeżywanych przez niego emocji, 
                                rozwija strefę uczuć i umijętność radzenia sobie z nimi. Wzmacnia wiarę we własne siły, angażując do samodzielności w poszukiwaniu rozwiązań problemów."</p>
                            <p className='text-right mt-2 font-bold text-xs'>Nieperfekcyjna mama</p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}