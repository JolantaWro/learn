import Container from '@/components/ui/container';
import { BabyStoryData } from '@/config/baby-list';
import Image from 'next/image';
import Link from "next/link";


export default function BabyMain() {
    return (
        <>
            <div className="px-30 py-10 flex flex-col items-center gap-10">
                <h1 className="text-4xl text-center font-bold  shadow-md w-[600px] ">List of stories for children</h1>

                <div className='px-4'>
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
        </>
    )
  }
  

type StoryProps = {
    imageUrl: any,
    href: string,
    title: string,
}

const Story1Element = ({ imageUrl, href, title }: StoryProps) => {
    return (
        <div className='grid grid-cols-4'>
            <Link href={href} className="xs:col-span-4 col-span-8">
                <div className='flex flex-col gap-y-4 pt-4'>
                    <Image className="xs:h-60 h-[300px] rounded-lg object-cover w-[500px]" alt="" src={imageUrl} />
                    <h3 className='font-bold text-lg text-center '>{title}</h3>
                </div>
            </Link>
        </div>
    )
}