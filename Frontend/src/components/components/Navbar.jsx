import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

                <h1 className="text-2xl font-bold">
                    Student Predictor
                </h1>

                <div className="flex gap-8 text-lg">

                    <Link
                        to="/"
                        className="hover:text-yellow-300 transition"
                    >
                        Home
                    </Link>

                    <Link
                        to="/predict"
                        className="hover:text-yellow-300 transition"
                    >
                        Predict
                    </Link>

                    <Link
                        to="/about"
                        className="hover:text-yellow-300 transition"
                    >
                        About
                    </Link>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;