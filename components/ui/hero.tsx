import Image from "next/image";
import Visual from "../../assets/Visual.png";
import Cylinder from "../../assets/cylinder 1.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <div className="bg-gradient-to-b from-[#EAEEFE] to-[#183EC2] flex px-8">
            <div className="pt-[4rem]">
                <span className="border border-gray-200 rounded-lg py-1 px-2">Version 2.0 is here</span>
                <h1 className="text-[5.625rem] font-bold leading-none xl:w-[11ch] my-8 bg-gradient-to-b from-[#000000] to-[#001354] bg-clip-text text-transparent">Pathway to productivity</h1>
                <p className="text-[1.34rem] xl:w-[37ch]">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>
                <div className="flex gap-2 my-8">
                    <button className="bg-neutral-900 text-white py-1 px-2 rounded-lg">Get for free</button>
                    <button className="flex gap-1 place-items-center">Learn more <ArrowRight size={"1rem"} /></button>
                </div>
            </div>
            <div className="flex justify-center place-items-center">
                <Image className="h-[40rem] w-[40rem]" src={Visual} width={648} height={648} alt="visual image" />
            </div>
            <span className="absolute left-[38vw]">
                <Image src={Cylinder} width={216} height={197} alt="cylinder image" />
            </span>
        </div>
    )
}
export default Hero;