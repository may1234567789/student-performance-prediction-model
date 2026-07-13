import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="bg-linear-to-r from-blue-700 via-blue-600 to-indigo-700 text-white">
            <div className="max-w-7xl mx-auto px-8 py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-16">

                {/* Left Side */}
                <div className="md:w-1/2">

                    <p className="uppercase tracking-widest text-blue-200 font-semibold mb-3">
                        Machine Learning Project
                    </p>

                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                        Student Performance
                        <br />
                        Prediction System
                    </h1>

                    <p className="text-lg text-blue-100 mb-8 leading-8">
                        Predict whether a student is likely to score
                        <span className="font-bold"> Excellent</span>,
                        <span className="font-bold"> Good</span>,
                        <span className="font-bold"> Average</span> or
                        <span className="font-bold"> Poor</span>
                        using Machine Learning.
                    </p>

                    <div className="flex gap-4">

                        <Link
                            to="/predict"
                            className="bg-white text-blue-700 px-7 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                        >
                            Predict Now
                        </Link>

                        <Link
                            to="/about"
                            className="border border-white px-7 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition"
                        >
                            About
                        </Link>

                    </div>

                </div>

                {/* Right Side */}

                <div className="md:w-1/2 flex justify-center">

                    <img
                        src="https://undraw.co/api/illustrations/educator.svg"
                        alt="Student Illustration"
                        className="w-full max-w-lg"
                    />

                </div>

            </div>
        </section>
    );
}

export default Hero;