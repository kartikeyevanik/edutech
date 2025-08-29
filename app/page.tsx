import Eyn from "@/components/ui/eyn";
import Hero from "@/components/ui/hero";
import LogoTicker from "@/components/ui/logoTicker";
import Pricing from "@/components/ui/pricing";
import Product from "@/components/ui/product";
import SignUp from "@/components/ui/signUp";
import Testimonials from "@/components/ui/testimonals";

export default function Home() {
  return (
    <div className="font-sans pt-[5rem]">
      <Hero />
      <LogoTicker />
      <Product />
      <Eyn />
      <Pricing />
      <Testimonials />
      <SignUp />
    </div>
  );
}
