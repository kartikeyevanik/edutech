import Image from "next/image";
import Emojis from "../../public/assets/emojistar 1.png";
import Helix from "../../public/assets/helix2 1.png";
import { ArrowRight } from "lucide-react";

const SignUp = () => {
    return (
        <div className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] relative py-16 mt-[2rem] px-6 text-center flex flex-col items-center">
            <h1 className="text-[3.75rem] font-bold mb-4 text-gray-900 bg-gradient-to-b from-[#000000] to-[#001354] bg-clip-text text-transparent">
                Sign up for free today
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mb-6">
                Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
            </p>
            <div className="flex gap-4">
                <button className="bg-neutral-900 text-white px-2 py-1 rounded-md transition">
                    Get for free
                </button>
                <button className="flex gap-1 place-items-center px-2 py-1">
                    Learn more <ArrowRight size={"1rem"} />
                </button>
            </div>
            <span className="absolute -top-[2px] left-[45px]">
                <Image src={Emojis} width={216} height={197} alt="cylinder image" />
            </span>
            <span className="absolute top-[113px] left-[838px]">
                <Image src={Helix} width={216} height={197} alt="cylinder image" />
            </span>
        </div>
    );
};

export default SignUp;
