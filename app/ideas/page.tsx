import { Container, MainContainer } from "@/components/ui/container";
import Link from "next/link";
import { BabyStoryData } from '@/config/baby-list';
import Image from "next/image";


export default function IdeasHome() {
  return (
    <>
      <div className="grid grid-cols-12">
        <MainContainer className="pt-10 col-span-2">
          <div className="col-span-4 sm:col-span-8">
            <div className="flex flex-col ml-20 gap-8">
              <h1 className="p-2 text-4xl sm:invisible font-semibold">Category:</h1>
              <p className="px-4 text-2xl font-semibold">Home</p>
              <p className="px-4 text-2xl font-semibold">Kids</p>
              <p className="px-4 text-2xl font-semibold">Technology</p>
              <p className="px-4 text-2xl font-semibold">Garden</p>
              <p className="px-4 text-2xl font-semibold">Gift</p>
              <p className="px-4 text-2xl font-semibold">Food</p>
            </div>
          </div>
        </MainContainer>
        <Container className="pt-8">
          {
              BabyStoryData.map((data, index) => (
                  <div className="span-col-6" key={`story-${index}`}>
                    <Link href={data.href}>
                      <Image src={data.imageUrl} alt="" className="w-[400px] h-[200px]"></Image>
                      <h1 className="text-center">{data.title}</h1>
                    </Link>      
                    </div>
              ))
          }

        </Container>



      </div>
      
      
        
  </>
  )
}
