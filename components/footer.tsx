import Image from "next/image";
import logo from "../assets/footer/logosaas.png";
import youtube from "../assets/footer/Vector6.png";
import x from "../assets/footer/Vector.png";
import tiktop from "../assets/footer/Vector2.png";
import Vector from "../assets/footer/Vector4.png";
import insta from "../assets/footer/Vector1.png";
import linkdin from "../assets/footer/Vector3.png";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 py-16 px-8">
            <div className="max-w-7xl mx-auto flex justify-between gap-12">


                <div className="flex flex-col justify-between">
                    <div>

                        <Image
                            src={logo}
                            alt="Company Logo"
                            width={40}
                            height={40}
                            className="mb-4"
                        />

                        <p className="text-gray-400 text-sm leading-6 max-w-[28ch]">
                            Effortlessly turn your ideas into a fully functional, responsive,
                            no-code SaaS website.
                        </p>
                    </div>


                    <div className="flex space-x-5 mt-8">
                        <a href="#" className="hover:opacity-80">
                            <Image src={x} alt="X (Twitter)" width={20} height={20} />
                        </a>
                        <a href="#" className="hover:opacity-80">
                            <Image src={insta} alt="Instagram" width={20} height={20} />
                        </a>
                        <a href="#" className="hover:opacity-80">
                            <Image src={tiktop} alt="tiktop" width={20} height={20} />
                        </a>
                        <a href="#" className="hover:opacity-80">
                            <Image src={linkdin} alt="LinkedIn" width={20} height={20} />
                        </a>
                        <a href="#" className="hover:opacity-80">
                            <Image src={Vector} alt="Vector" width={20} height={20} />
                        </a>
                        <a href="#" className="hover:opacity-80">
                            <Image src={youtube} alt="YouTube" width={20} height={20} />
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-12 text-sm">
                    <div>
                        <h3 className="font-semibold text-white mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Features</a></li>
                            <li><a href="#" className="hover:text-white">Integrations</a></li>
                            <li><a href="#" className="hover:text-white">Updates</a></li>
                            <li><a href="#" className="hover:text-white">FAQ</a></li>
                            <li><a href="#" className="hover:text-white">Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">About</a></li>
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                            <li><a href="#" className="hover:text-white">Manifesto</a></li>
                            <li><a href="#" className="hover:text-white">Press</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Examples</a></li>
                            <li><a href="#" className="hover:text-white">Community</a></li>
                            <li><a href="#" className="hover:text-white">Guides</a></li>
                            <li><a href="#" className="hover:text-white">Docs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Privacy</a></li>
                            <li><a href="#" className="hover:text-white">Terms</a></li>
                            <li><a href="#" className="hover:text-white">Security</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;