import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Student Predictor</h1>

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