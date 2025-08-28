import Image from "next/image";
import ProductImage from "../../assets/Product Image.png";
import Pyramid from "../../assets/pyramid 1.png";
import Torus from "../../assets/torus 1.png";

const Product = () => {
    const features = [
        {
            logo: "logo", 
            title: "Integration ecosystem",
            description: "Track your progress and motivate your efforts everyday.",
        },
        {
            logo: "logo",
            title: "Goal setting and tracking",
            description: "Set and track goals with manageable task breakdowns.",
        },
        {
            logo: "logo",
            title: "Secure data encryption",
            description: "Ensure your data’s safety with top-tier encryption.",
        },
        {
            logo: "logo",
            title: "Customizable notifications",
            description: "Get alerts on tasks and deadlines that matter most.",
        },
    ];
    return (
        <div className="relative bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] flex flex-col justify-center place-items-center py-[6rem] gap-2">
            <p className="text-[10px] text-center">Boost your productivity</p>
            <h2 className="text-[3.75rem] text-center font-bold xl:w-[18ch]">A more effective way to track progress</h2>
            <p className="text-[1.2rem] text-center w-[40ch]">Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.</p>
            <Image src={ProductImage} alt="product image" width={1100} height={683} />
            <span className="absolute right-0">
                <Image src={Pyramid} width={216} height={197} alt="cylinder image" />
            </span>
            <span className="absolute left-0 bottom-[15rem]">
                <Image src={Torus} width={216} height={197} alt="cylinder image" />
            </span>
            <div className="grid grid-cols-4 mx-12 gap-6">
                {features.map(({ logo, title, description }, idx) => (
                    <div key={idx} className="">
                        <span>{logo}</span>
                        <h1 className="font-semibold text-[18px] my-1">{title}</h1>
                        <p className="text-[16px] my-1">{description}</p>
                        <button className="">Learn more</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Product;