import Image from "next/image"
import gallery2 from "../assets/Background Image.png";
export default function SlideShow() {
    return (
        <div className="text-white">
            <p className="py-10 text-center text-3xl">វិចិត្រសាល</p>
            <Image src={gallery2} alt="alt" className="w-full" />
        </div>
    )
}