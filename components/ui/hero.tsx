import Image from "next/image";
import Visual from "../../public/assets/Visual.png";
import Cylinder from "../../public/assets/cylinder 1.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <div className="bg-gradient-to-b from-[#EAEEFE] to-[#183EC2] h-[710px] w-full pt-4 ">
            <div className="max-w-[1200px] mx-auto h-full px-8 flex justify-between relative">
                <div className="pt-[4rem] flex flex-col justify-center">
                    <span className="border border-gray-200 text-[13px] rounded-[10px] py-1 px-2 w-max">
                        Version 2.0 is here
                    </span>
                    <h1 className="text-[90px] [webkit-text-stroke:1px_black] font-bold leading-none w-[11ch] my-8 bg-gradient-to-b from-[#000000] to-[#001354] bg-clip-text text-transparent">
                        Pathway to productivity
                    </h1>
                    <p className="text-[22px] w-[37ch]">
                        Celebrate the joy of accomplishment with an app designed to track
                        your progress, motivate your efforts, and celebrate your successes.
                    </p>
                    <div className="flex gap-[17px] my-8">
                        <button className="bg-neutral-900 text-white py-1 px-2 rounded-[10px]">
                            Get for free
                        </button>
                        <button className="flex gap-[4px] items-center">
                            Learn more <ArrowRight size={"1rem"} />
                        </button>
                    </div>
                </div>

                <div className="absolute top-[20px] left-[547px] flex items-center justify-center">
                    <Image
                        className="object-contain"
                        src={Visual}
                        width={648}
                        height={648}
                        alt="visual image"
                    />
                </div>

                <span className="absolute left-[445px] top-[9px]">
                    <Image
                        src={Cylinder}
                        width={216}
                        height={197}
                        alt="cylinder image"
                    />
                </span>
            </div>
        </div>
    );
};

export default Hero;
