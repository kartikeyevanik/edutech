const Header =()=>{
    return(
        <div className="fixed right-0 left-0 z-10 flex justify-between items-center px-8 py-4 bg-[#EAEEFE]">
            <h1 className="font-bold">Edu Tech</h1>
            <div className="flex gap-4 items-center font-extralight">
                <span>About</span>
                <span>Features</span>
                <span>Customers</span>
                <span>Updates</span>
                <span>Help</span>
                <button className="font-normal bg-neutral-900 text-white py-1 px-2 rounded-lg">Get for free</button>
            </div>
        </div>
    )
}
export default Header;