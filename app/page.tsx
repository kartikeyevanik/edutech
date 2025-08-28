import Eyn from "@/components/ui/eyn";
import Hero from "@/components/ui/hero";
import LogoTicker from "@/components/ui/logoTicker";
import Product from "@/components/ui/product";

export default function Home() {
  return (
    <div className="font-sans pt-[4rem]">
      <Hero />
      <LogoTicker />
      <Product />
      <Eyn />
    </div>
  );
}
