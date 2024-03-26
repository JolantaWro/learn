
import Image from "next/image";

type InspirationProps = {
    imageUrl: any,
    title: string,
    category: string,
    description: string,
    comment: string
  }


export default function DetailInspiration({ imageUrl, title, category, description, comment }: InspirationProps) {
  return (
    <>
      <div className="pt-8 grid xl:grid-cols-3 md:grid-cols-2 px-20 gap-10">
        <Image className="" alt="" src={imageUrl} />
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{category}</p>
        <div>{comment}</div>
      </div>
  </>
  )
}
