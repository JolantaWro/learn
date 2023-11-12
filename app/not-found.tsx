import Image from 'next/image';
import Link from 'next/link';
import notfound from "../public/error-404.png"

export default function Home() {
    return (
        <main>
            <div className="grid overflow-hidden my-24 items-center justify-center">
                <div className="items-center justify-center text-base">
                    <Image
                        alt="404"
                        src={notfound}
                    />
                </div>
            </div>
           
        </main>
    )
}