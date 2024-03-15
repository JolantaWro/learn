import { Container, MainContainer } from "@/components/ui/container";
import Link from "next/link";
import { IdeaData } from '@/config/idea-list';
import Image from "next/image";
import { CategoryList } from "@/config/category-idea-filter";


export default function IdeasHome() {
  return (
    <>
      <div className="grid grid-cols-4 md:grid-cols-8 xl:grid-cols-12">
        <div className="pt-10 col-span-1">
            <div className="flex flex-col ml-20 gap-8">
              <h1 className="p-2 text-4xl sm:invisible font-semibold">Category:</h1>
              { CategoryList.map((data, index) => (
                <p key={data.id} className="px-4 text-2xl font-semibold hover:text-[rgba(218,164,139,1)] hover:underline hover:underline-offset-8">{data.title}</p>
              ))}
             
            </div>
        </div>
        <div className="pt-8 col-span-2 ">
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
        <Link href={href}>
          <Image className="w-[400px] h-[200px] rounded-lg object-cover" alt="" src={imageUrl} />
          <h3 className='font-bold text-lg text-center'>{title}</h3>
        </Link>
  )
}