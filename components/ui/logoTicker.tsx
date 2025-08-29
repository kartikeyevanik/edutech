import Aceme from "../../public/assets/logos/acme 1.png";
import Quantum from "../../public/assets/logos/quantum 1.png";
import Echo from "../../public/assets/logos/echo 1.png";
import Celestia from "../../public/assets/logos/celestia 1.png";
import Pulse from "../../public/assets/logos/pulse 1.png";
import Apex from "../../public/assets/logos/apex 1.png";
import Image from "next/image";

const LogoTicker = () => {
  const logos = [Aceme, Quantum, Echo, Celestia, Pulse, Apex];

  return (
    <div className="w-full">
      <div className="relative h-[132px] max-w-[1200px] mx-auto overflow-hidden">
        <div className="flex justify-center items-center whitespace-nowrap gap-20 h-full opacity-50">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex-shrink-0">
              <Image
                src={logo}
                alt={`Logo ${idx}`}
                width={120}
                height={120}
                className="h-auto w-[120px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
