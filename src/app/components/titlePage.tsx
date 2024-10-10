import Image from "next/image";
import ringBackground from "../assets/Background Image-2.png";
export default function TitlePage() {
  return (
    <div className="relative">
      <div className="text-center absolute text-white inset-x-0 bottom-20">
        <p className="font-moulpali">ថ្ងៃអាពាហ៍ពិពាហ៍</p>
        <p className="font-extrabold text-[80px] font-montaga">19.08.24</p>
        <p className="py-2 font-moulpali">អាពាហ៍ពិពាហ៍របស់បញ្ញា និងវត្តី</p>
      </div>
      <Image src={ringBackground} alt="secondBackground" className="w-full" />
    </div>
  );
}
