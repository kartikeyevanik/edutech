import Image from "next/image";
import Cube1 from "../../assets/cube-helix 1.png"
import Cube2 from "../../assets/cube.png"

const Eyn = () => {
    const cardData = [
        {
            image: Cube1,
            title: "Integration ecosystem",
            description: "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place",
        },
        {
            image: Cube2,
            title: "Goal setting and tracking",
            description: "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
        },
    ];
    return (
        <div className="relative bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] flex flex-col justify-center place-items-center py-[6rem] gap-2">
            <span className="text-[13x] text-center border border-gray-300 py-1 px-2 rounded-lg">Everything you need</span>
            <h2 className="text-[3.75rem] text-center font-bold xl:w-[18ch]">Streamlined for easy management</h2>
            <p className="text-[1.2rem] text-center w-[45ch] mb-12">Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.</p>
            <div className="flex gap-6 mx-12">
                {cardData.map((card, index) => (
                    <div key={index} className="w-1/2 bg-white rounded-lg shadow-md p-8">
                        <Image
                            src={card.image}
                            alt={card.title}
                            className="w-full h-48 object-contain rounded-t-md mb-4"
                            width={329}
                            height={329}
                        />
                        <h2 className="text-xl font-semibold mb-2 ">{card.title}</h2>
                        <p className="text-gray-600 w-[40ch]">{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Eyn;