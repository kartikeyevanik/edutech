import Image from "next/image";
import Cube1 from "../../public/assets/cube-helix 1.png";
import Cube2 from "../../public/assets/cube.png";

const Eyn = () => {
    const cardData = [
        {
            image: Cube1,
            title: "Integration ecosystem",
            description:
                "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place",
        },
        {
            image: Cube2,
            title: "Goal setting and tracking",
            description:
                "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
        },
    ];

    return (
        <div className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] h-[1075px] w-full flex justify-center">
            <div className="max-w-[1200px] w-full px-8 flex flex-col items-center">
                {/* Heading Section */}
                <span className="text-[13px] text-center border border-gray-300 py-1 px-2 rounded-[10px] mt-[6rem]">
                    Everything you need
                </span>
                <h2 className="text-[54px] text-center font-bold w-[18ch] bg-gradient-to-b from-[#000000] to-[#001354] bg-clip-text text-transparent my-4">
                    Streamlined for easy management
                </h2>
                <p className="text-[1.2rem] text-center w-[45ch] mb-12 text-[#010D3E]">
                    Enjoy customizable lists, team work tools, and smart tracking all in
                    one place. Set tasks, get reminders, and see your progress simply and
                    quickly.
                </p>

                {/* Cards */}
                <div className="flex gap-6 w-full mx-auto justify-center place-items center">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="w-[483px] h-[538px] flex justify-center text-center bg-white rounded-xl shadow-md p-8 flex flex-col place-items-center"
                        >
                            <Image
                                src={card.image}
                                alt={card.title}
                                width={329}
                                height={329}
                                className="w-[329px] object-contain mb-6"
                            />
                            <h2 className="text-[20px] font-semibold mb-2 text-center">{card.title}</h2>
                            <p className="text-[16px] text-[#010D3E] w-[35ch] leading-relaxed">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Eyn;
