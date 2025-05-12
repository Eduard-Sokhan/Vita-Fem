import logo from "../../public/logo.png";

const Header = () => {
    return (
        <header className="text-white p-4 top-0 right-0 w-full z-10 bg-green-600">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center justify-center lg:justify-start w-full">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-20 sm:w-28 h-auto mr-4"
                    />
                    <h1 className="text-2xl sm:text-4xl font-bold">
                        <span className="text-green-800">Vita</span>
                        <span className="text-red-700">Fem</span>
                    </h1>
                </div>
            </div>
        </header>
    );
};

export default Header;
