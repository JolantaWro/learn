import { Container, MainContainer } from "@/components/ui/container";
import Link from "next/link";
import { IdeaData } from '@/config/idea-list';
import Image from "next/image";
import { CategoryList } from "@/config/category-idea-filter";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export default function IdeasHome() {
  return (
    <>
     <div className="flex w-full max-w-2xl items-center space-x-2 pt-10 mx-auto">
          <Input type="text" placeholder="" className="border-gray-200 border-y-2 text-xl font-inter font-medium hover:border-red-800" />
          <Button type="submit" className="font-inter text-lg bg-black text-white font-semibold hover:bg-gray-300 hover:text-black">Search</Button>
      </div>

      <div className="pt-8 grid xl:grid-cols-3 md:grid-cols-2 px-20 gap-10">
        {
            IdeaData.map((data, index) => (
                <IdeaElement
                    imageUrl={data.imageUrl}
                    href={data.href}
                    title={data.title}
                    key={`idea-${index}`}
                />
            ))
            }
      </div>
  </>
  )
}
type IdeaProps = {
  imageUrl: any,
  href: string,
  title: string
}

const IdeaElement = ({ imageUrl, href, title }: IdeaProps) => {
  return (
      <Link href={href} className="flex flex-col items-center justify-center">
          <Image className="w-[400px] h-[200px] rounded-lg object-cover" alt="" src={imageUrl} />
          <h3 className='font-bold text-lg'>{title}</h3>
      </Link>
  )
}