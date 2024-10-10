import Image from "next/image";
import groomPic from "../assets/image-2.png";
import { DetailComponent } from "../components/details";
import Agenda from "../components/agenda";
import SlideShow from "../components/slideshow";
import { MapView } from "../components/map";
import LogoShow from "../components/logo";
import { Response } from "../components/response";
import TopPage from "../components/topPage";
import TitlePage from "../components/titlePage";
import bridePic from "../assets/image.png"

function GalleryIndividual({Portrait, Name}: {Portrait: any, Name: string}) {
  return (
    <div className="text-center text-white text-xl">
      <Image src={Portrait} alt="alt" className="w-full" />
      <div className="align-middle">
        <p className="py-10 text-4xl">{Name}</p>
      </div>
    </div>
  );
}
export default function ContentPage() {
  return (
    <div className="items-center justify-center bg-[#515812]">
      <div>
        <div>
          <TopPage />
        </div>
        <div>
          <TitlePage />
        </div>
        <div>
          <GalleryIndividual Portrait={groomPic} Name="សិរី បញ្ញា"/>
          <GalleryIndividual Portrait={bridePic} Name="សិរី វត្តី"/>
        </div>
        <div>
          <SlideShow />
        </div>
        <div className="py-10">
          <DetailComponent />
        </div>
        <div className="py-10">
          <Agenda />
        </div>
        <div className="items-center">
          <MapView />
        </div>
        <div className="py-5">
          <Response />
        </div>
        <div>
          <LogoShow />
        </div>
      </div>
    </div>
  );
}
