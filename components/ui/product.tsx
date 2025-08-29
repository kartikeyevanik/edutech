import Image from "next/image";
import ProductImage from "../../public/assets/Product Image.png";
import Pyramid from "../../public/assets/pyramid 1.png";
import Torus from "../../public/assets/torus 1.png";
import { Leaf, Target, Lock, Bell, ArrowRight } from "lucide-react";

const Product = () => {
  const features = [
    {
      logo: <Leaf />,
      title: "Integration ecosystem",
      description: "Track your progress and motivate your efforts everyday.",
    },
    {
      logo: <Target />,
      title: "Goal setting and tracking",
      description: "Set and track goals with manageable task breakdowns.",
    },
    {
      logo: <Lock />,
      title: "Secure data encryption",
      description: "Ensure your data’s safety with top-tier encryption.",
    },
    {
      logo: <Bell />,
      title: "Customizable notifications",
      description: "Get alerts on tasks and deadlines that matter most.",
    },
  ];

  return (
    <div className=" bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] w-full h-[1495px] flex justify-center">
      <div className="max-w-[1362px] w-full flex flex-col items-center gap-8 px-8 pt-[6rem]">
        {/* Heading Section */}
        <p className="text-[10px] text-center">Boost your productivity</p>
        <h2 className="text-[54px] text-center font-bold w-[18ch] bg-gradient-to-b from-[#000000] to-[#001354] bg-clip-text text-transparent">
          A more effective way to track progress
        </h2>
        <p className="text-[1.2rem] text-[#010D3E] text-center w-[40ch]">
          Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.
        </p>

        {/* Product Image */}
        <Image src={ProductImage} alt="product image" width={1100} height={683} />

        {/* Decorative Shapes */}
        <span className="absolute left-[991px] top-[1451px]">
          <Image src={Pyramid} width={216} height={197} alt="pyramid image" />
        </span>
        <span className="absolute left-[-109px] top-[1733px]">
          <Image src={Torus} width={216} height={197} alt="torus image" />
        </span>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 w-full max-w-[1200px]">
          {features.map(({ logo, title, description }, idx) => (
            <div key={idx} className=" p-4">
              <span className="">{logo}</span>
              <h1 className="font-semibold text-[18px] my-2">{title}</h1>
              <p className="text-[16px] text-[#000000] mb-2">{description}</p>
              <button className="text-sm font-medium flex justify-center place-items-center">
                Learn more <ArrowRight size={"1rem"} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
