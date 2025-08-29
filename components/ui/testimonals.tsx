import Image from "next/image";


import Ec1 from "../../public/assets/tesimonials/Ellipse 1.png";
import Ec2 from "../../public/assets/tesimonials/Ellipse 2.png";
import Ec3 from "../../public/assets/tesimonials/Ellipse3.png";
import Ec4 from "../../public/assets/tesimonials/Ellipse4.png";
import Ec5 from "../../public/assets/tesimonials/Ellipse5.png";
import Ec6 from "../../public/assets/tesimonials/Ellipse6.png";
import Ec7 from "../../public/assets/tesimonials/Ellipse7.png";
import Ec8 from "../../public/assets/tesimonials/Ellipse8.png";
import Ec9 from "../../public/assets/tesimonials/Ellipse9.png";

const testimonials = [
  {
    name: "Alex Rivera",
    username: "@jamietechguru00",
    message:
      "As a seasoned designer always on the lookout for innovative tools, Figma’s innovation instantly grabbed my attention.",
    image: Ec1,
    faded: true,
  },
  {
    name: "Casey Jordan",
    username: "@caseyj",
    message:
      "I was amazed at how quickly our team was able to integrate this app into our daily workflow.",
    image: Ec2,
    faded: true,
  },
  {
    name: "Jordan Potts",
    username: "@pixeldesign",
    message:
      "Managing this app for our team has streamlined our project management and improved communication across the board.",
    image: Ec3,
    faded: true,
  },
  {
    name: "Josh Smith",
    username: "@joshsmith",
    message:
      "Our team’s productivity has skyrocketed since we started using this tool.",
    image: Ec4,
  },
  {
    name: "Taylor Kim",
    username: "@taylorkim",
    message:
      "Planning and executing events has never been smoother. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    image: Ec5,
  },
  {
    name: "Sam Dawson",
    username: "@scientistnotetips",
    message:
      "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    image: Ec6,
  },
  {
    name: "Megan Lee",
    username: "@organizewithz",
    message:
      "This app has completely transformed how I manage my projects and deadlines.",
    image: Ec7,
  },
  {
    name: "Riley Smith",
    username: "@rileysmith",
    message:
      "The customizability and integration capabilities of this app are top-notch.",
    image: Ec8,
  },
  {
    name: "Casey Harper",
    username: "@casey09",
    message:
      "Its user-friendly interface and rich features support our success.",
    image: Ec9,
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#F9FAFB] mt-[15rem] px-6 text-center">
      <p className="text-sm text-gray-500 mb-2 border border-gray-300 rounded-xl inline px-2 py-1">Testimonials</p>
      <h2 className="text-[54px] font-bold text-gray-900 mb-12 bg-gradient-to-b from-[#000000] to-[#001354] bg-clip-text text-transparent">
        What our users say
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-white shadow-sm rounded-[20px] p-6 text-left transition-opacity ${
              testimonial.faded ? "opacity-50" : "opacity-100"
            }`}
          >
            <p className="text-[16px] mb-4">{testimonial.message}</p>
            <div className="flex items-center gap-3">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.username}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
