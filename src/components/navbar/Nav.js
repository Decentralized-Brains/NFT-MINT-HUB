import { BsDiscord, BsTwitter, BsSearch } from "react-icons/bs";

export default function Navbar() {
    return (
        <header className="text-gray-600 body-font bg-white">
            <div className="container p-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <form className="max-w-sm px-4">
                        <div className="relative">
                            <BsSearch className="absolute top-0 bottom-0 w-6 my-auto text-gray-400 left-3" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full py-2 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                            />
                        </div>
                    </form>
                </nav>
                <div>
                    <a className="inline-flex items-center py-1 px-3 hover:bg-gray-200 rounded-lg text-base mt-4 md:mt-0">
                        <BsDiscord className="w-6 h-6" />
                    </a>
                    <a className="inline-flex items-center py-1 px-3 hover:bg-gray-200 rounded-lg text-base mt-4 md:mt-0">
                        <BsTwitter className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </header>
    );
}
