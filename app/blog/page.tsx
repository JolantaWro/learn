import Image from 'next/image';
import Link from "next/link";
import { BlogData } from '@/config/blog';

export default function Blog() {
  return (
    <main className="container mx-auto">
      <div className="px-30 py-10 flex flex-col items-center gap-10">
        <h1 className="text-5xl">Blog</h1>
        <div className='grid grid-cols-4 '>
        {
        BlogData.map((data, index) => (
          <BlogElement 
            image={data.image} 
            description={data.description} 
            key={`blog-el-${index}`} 
            title={data.title} 
            href={data.href}
          />
        ))}

        </div>
        
      </div>
    </main>
  )
}

type BlogElementProps = {
  image: any,
  description: string,
  title: any,
  href: string,

}

const BlogElement = ({ image, description, title, href}: BlogElementProps) => {
  return (
      <>    
          <Link href={href}>
              <div className='flex flex-col pb-10 px-2 hover:bg-gray-100'>
                  <div className='w-full rounded-lg flex items-center justify-center border border-zinc-100'>
                      <Image className="" alt="" src={image} />
                  </div>
                  <h3 className='font-bold mt-2 text-lg'>{title}</h3>
                  <p className='line-clamp-4 mt-2 text-lg'>{description}</p>
              </div>
          </Link>  
      </>
  )
}