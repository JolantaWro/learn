import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
    return (
        <div className={cn(`grid
            grid-cols-12 sm:grid-cols-4
            mx-auto xs:mx-[16px] sm:mx-[32px] md:mx-auto lg:mx-[120px] xl:mx-auto
            lg:gap-x-[24px] xl:gap-x-[24px]
            md:w-[769px] xl:w-[1200px]`, 
            className)}>
            {children}
        </div>
    )
}

export default Container;