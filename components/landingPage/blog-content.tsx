'use client'

import Image from 'next/image';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import { BlogData } from '@/config/blog';
import arrowNext from "@/public/Arrow Next.svg";
import arrowPrew from "@/public/Arrow Prew.svg";


interface ArrowProps {
    onClick?: React.MouseEventHandler<HTMLDivElement>;
  }

  function SampleNextArrow({ onClick }: ArrowProps) {
    return (
        <div className='absolute right-0 z-1' onClick={onClick}>
            <Image className="w-[21.552px] stroke-2 " alt="arrow" src={arrowNext} />
        </div>
    );
  }

  function SamplePrevArrow({ onClick }: ArrowProps) {
    return (
      <div className='absolute left-0 z-1 bottom-[-20px]' onClick={onClick}>
        <Image className="w-[21.552px] stroke-2" alt="arrow" src={arrowPrew} />
      </div>
    );
  }





export function BlogContent() {

    const settings = {
        className: "center",
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 3840,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1925,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



    return (
        <>
            <div className='pb-10'  >
                <Slider {...settings}>
                    {BlogData.map((data, index) => (
                        <CarouselElement 
                        image={data.image} 
                        description={data.description} 
                        key={`blog-el-${index}`} 
                        title={data.title} 
                        href={data.href}
                        />
                        ))}
                </Slider>
            </div>
        </>
    )
}

type CarouselElementProps = {
    image: any,
    description: string,
    title: any,
    href: string,

}

const CarouselElement = ({ image, description, title, href}: CarouselElementProps) => {
    return (
        <>    
            <Link href={href}>
                <div className='flex flex-col pb-10 px-2'>
                    <div className='h-[132px] w-full rounded-lg flex items-center justify-center border border-zinc-100'>
                        <Image className="md:h-[132px]" alt="" src={image} />
                    </div>
                    <h3 className='font-bold mt-2 text-base'>{title}</h3>
                    <p className='line-clamp-4 mt-2 text-base'>{description}</p>
                </div>
            </Link>  
             
        </>
    )
}