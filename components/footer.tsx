const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-6">
            <div className="max-w-7xl mx-auto flex justify-between gap-8">

                <div className="flex flex-col gap-[6rem]">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">logo</h2>
                        <p className="text-gray-400 w-[30ch]">
                            Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website.
                        </p>
                    </div>
                    <div>
                        <div className="flex space-x-4 text-gray-400">
                            <a href="#" className="hover:text-white">🌐</a>
                            <a href="#" className="hover:text-white">🐦</a>
                            <a href="#" className="hover:text-white">📸</a>
                            <a href="#" className="hover:text-white">💼</a>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    <div>
                        <h3 className="font-semibold text-lg mb-3">Product</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Features</a></li>
                            <li><a href="#" className="hover:text-white">Pricing</a></li>
                            <li><a href="#" className="hover:text-white">Download</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-3">Product</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Features</a></li>
                            <li><a href="#" className="hover:text-white">Pricing</a></li>
                            <li><a href="#" className="hover:text-white">Download</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-3">Product</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">Features</a></li>
                            <li><a href="#" className="hover:text-white">Pricing</a></li>
                            <li><a href="#" className="hover:text-white">Download</a></li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="font-semibold text-lg mb-3">Company</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
