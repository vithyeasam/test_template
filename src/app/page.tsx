import Image from "next/image";
import coverPic from "./assets/cover.jpg";
// import openButton from "../assets/OpenButton.png";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <div>
      <div className="flex-grow">
        <Image
          className="fixed -top-102 -left-100 w-full h-dvh z-[-100] object-cover"
          src={coverPic}
          alt="cover"
        />
      </div>
      <div className="absolute uppercase flex flex-col items-center text-white text-3xl py-6 inset-x-0 bottom-0">
        <p className="flex flex-wrap justify-center text-xl font-moulpali">
          សូមគោរពអញ្ជើញ
          {/* <span className="block text-center ml-2 font-bold">Potato</span> */}
        </p>
        <p className="text-center py-5 font-moulpali">លោក សិរី មង្គល</p>
        <Link href="/content">
          {/* <button className="py-6 -bottom-10"> */}
          {/* <Image src={openButton} alt="alt" width={100} height={100} /> */}
          {/* </button> */}
          <button
            className="text-lg -bottom-10 px-5 py-1 my-5 bg-[#969464] hover:bg-slate-500 text-white rounded-r-full rounded-l-full"
          >
            បើកធៀប
          </button>
        </Link>
      </div>
    </div>
  );
}
