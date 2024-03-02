import { MainContainer } from "@/components/ui/container";
import Link from "next/link";


export default function IdeasHome() {
  return (
    <>
      <MainContainer className="pt-10">
        <div className="col-span-4 sm:col-span-8">
          <div className="flex flex-row">
            <h1 className="p-2 text-xl sm:invisible">Category:</h1>
            <p className="px-4 text-lg">Home</p>
            <p className="px-4">Kids</p>
            <p className="px-4">Technology</p>
            <p className="px-4">Garden</p>
            <p className="px-4">Gift</p>
            <p className="px-4">Food</p>
          </div>
        </div>
      </MainContainer>

        
  </>
  )
}
