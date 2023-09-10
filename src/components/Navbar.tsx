import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav className="grid grid-cols-2 w-full bg-black text-white py-5 px-5">
                <div className="col-span-1">
                    <Link to="/">
                        <img src="favicon.svg" alt="" className="w-10" />
                    </Link>
                </div>
                <div className="col-span-1 flex items-center justify-end">
                    <p className="text-lg no-underline text-grey-darkest hover:text-blue-dark mx-2">
                        <Link to="/">Camera Tuner</Link>
                    </p>
                    <p className="text-lg no-underline text-grey-darkest hover:text-blue-dark mx-2">
                        <Link to="/field">Field</Link>
                    </p>
                    <p className="text-lg no-underline text-grey-darkest hover:text-blue-dark mx-2">
                        <Link to="/ball">Ball</Link>
                    </p>
                </div>
            </nav>
        </>
    )
};

export default Navbar;