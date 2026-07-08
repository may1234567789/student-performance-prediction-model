import { Link } from "react-router-dom";

function CTA() {
    return (
        <section className="bg-blue-700 py-20 text-center text-white">

            <h2 className="text-5xl font-bold mb-6">
                Ready to Predict Student Performance?
            </h2>

            <p className="text-xl mb-10">
                Try our AI-powered prediction system now.
            </p>

            <Link
                to="/predict"
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-gray-200 transition"
            >
                Start Prediction
            </Link>

        </section>
    );
}

export default CTA;