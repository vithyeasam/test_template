import Image from "next/image"
import mapPic from "../assets/Map.png"
export function MapView() {
    return (
        <div className="justify-center items-center text-center">
            <Image src={mapPic} alt="alt" className="py-10 px-5 w-full"/>
            <p className="text-4xl text-white">View Map</p>
        </div>

    )
}
