import { WordsGame } from "@/components/games/words";
import { FirstStory } from "@/components/story/first-story";
import { BabyStoryData } from '@/config/baby-list';
import Image from 'next/image';
import Link from "next/link";


export default function BabyMain() {
    return (
      <main className="container mx-auto">
        <div className="px-30 py-10 flex flex-col items-center gap-10">
            <h1 className="text-3xl text-center font-bold">List of stories for children</h1>

            <div className='px-4 mt-8'>
                {
                    BabyStoryData.map((data, index) => (
                        <Story1Element
                            imageUrl={data.imageUrl}
                            href={data.href}
                            title={data.title}
                            key={`story-${index}`}
                        />
                    ))
                }
            </div>
        </div>
      </main>
    )
  }
  

type StoryProps = {
    imageUrl: any,
    href: string,
    title: string,
}

const Story1Element = ({ imageUrl, href, title }: StoryProps) => {
    return (
        // <div className='border-b-[1px] py-4 border-zinc-400'>
        <div className='grid grid-cols-4 pt-10'>
            <Link href={href} className="col-span-4">
                <div className='flex flex-col gap-4'>
                    <Image className="h-32 rounded-lg object-cover" alt="abacus" src={imageUrl} />
                    <h3 className='font-bold text-lg text-center'>{title}</h3>
                </div>
            </Link>
        </div>
    )
}