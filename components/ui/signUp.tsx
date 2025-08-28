import Image from "next/image";
import Emojis from "../../assets/emojistar 1.png";
import Helix from "../../assets/helix2 1.png";

const SignUp = () => {
    return (
        <div className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] relative py-16 px-6 text-center flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">
                Sign up for free today
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mb-6">
                Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
            </p>
            <div className="flex gap-4">
                <button className="bg-neutral-900 text-white px-2 py-1 rounded-md transition">
                    Get for free
                </button>
                <button className=" px-2 py-1">
                    Learn more
                </button>
            </div>
            <span className="absolute left-[8rem] top-4">
                <Image src={Emojis} width={216} height={197} alt="cylinder image" />
            </span>
            <span className="absolute right-[9rem]">
                <Image src={Helix} width={216} height={197} alt="cylinder image" />
            </span>
        </div>
    );
};

export default SignUp;
