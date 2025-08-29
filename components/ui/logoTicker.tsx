import Aceme from "../../assets/logos/acme 1.png";
import Quantum from "../../assets/logos/quantum 1.png";
import Echo from "../../assets/logos/echo 1.png";
import Celestia from "../../assets/logos/celestia 1.png";
import Pulse from "../../assets/logos/pulse 1.png";
import Apex from "../../assets/logos/apex 1.png";
import Image from "next/image";

const LogoTicker = () => {
  const logos = [Aceme, Quantum, Echo, Celestia, Pulse, Apex];

  return (
    <div className="relative overflow-hidden w-full py-8 bg-white px-8 ">

      <div className="flex justify-center items-center whitespace-nowrap gap-20 relative z-0">
        {logos.map((logo, idx) => (
          <div key={idx} className="flex-shrink-0">
            <Image
              src={logo}
              alt={`Logo ${idx}`}
              width={120}
              height={120}
              className="h-auto w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoTicker;
