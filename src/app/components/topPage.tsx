import groombride from "../assets/Background Image.png";
import Image from "next/image";
import vectorUp from "../assets/Vector 17.png";
function NameDisplay({Title, Name } : {Title: string, Name: string}) {
  return (
    <div className="text-center text-white flex items-center">
      <div className="flow-root">
        <p className="py-5 font-moulpali">{Title}</p>
        <p className="text-3xl font-moulpali">{Name}</p>
      </div>
    </div>
  );
}

export default function TopPage() {
  return (
    <div className="relative">
      <div className="flex absolute top-0 right-0 pt-10 pr-5">
        {/* <i className="fa-solid fa-bars"></i> */}
        <button className="bg-white text-black text-sm rounded-r-full rounded-l-full px-3 py-0.5 mr-5">
          ENG
        </button>
        <button className="p-0 focus:outline-none">
          <div className="w-5 h-1 bg-white mb-1 rounded-full"></div>
          <div className="w-5 h-1 bg-white mb-1 rounded-full"></div>
          <div className="w-5 h-1 bg-white mb-1 rounded-full"></div>
        </button>
      </div>
      <div className="flex justify-evenly absolute -inset-x-10 bottom-40">
        <NameDisplay Title="កូនប្រុសនាម" Name="សិរិ បញ្ញា" />
        <NameDisplay Title="កូនស្រីនាម" Name="សិរី វត្តី" />
      </div>
      <div className="flex flex-col absolute inset-x-0 bottom-0 pb-10 text-white justify-center items-center text-center">
        <Image src={vectorUp} alt="alt" />
        <Image src={vectorUp} alt="alt" />
        <p className="mt-2">Please Swipe Up</p>
      </div>
      <Image
        src={groombride}
        alt="secondBackground"
        // layout="fill"
        // objectFit="cover"
        // objectPosition="center"
        className="w-full h-screen bg-cover bg-center"
      />
    </div>
  );
}
