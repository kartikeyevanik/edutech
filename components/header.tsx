const Header = () => {
    return (
        <div className="fixed inset-x-0 z-10 bg-[#EAEEFE] h-[81px]">
            <div className="max-w-[1200px] mx-auto px-8 flex justify-between items-center h-full">
                <h1 className="font-bold text-[20px] text-shadow-lg">Edu-Tech</h1>
                <div className="flex gap-4 items-center font-extralight text-sm text-neutral-600">
                    <span>About</span>
                    <span>Features</span>
                    <span>Customers</span>
                    <span>Updates</span>
                    <span>Help</span>
                    <button className="font-normal bg-neutral-900 text-white py-1 px-3 rounded-[10px]">
                        Get for free
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
