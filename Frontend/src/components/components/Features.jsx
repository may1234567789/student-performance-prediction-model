import FeatureCard from "../components/FeatureCard";

function Features() {
    return (
        <section className="py-24 bg-gray-100">

            <div className="max-w-7xl mx-auto px-8">

                <h2 className="text-4xl font-bold text-center mb-5">
                    Why Use Our System?
                </h2>

                <p className="text-center text-gray-600 mb-16 text-lg">
                    Powered by Machine Learning for accurate student performance prediction.
                </p>

                <div className="grid md:grid-cols-3 gap-10">

                    <FeatureCard
                        icon="🤖"
                        title="AI Prediction"
                        description="Predict student performance using trained Machine Learning models with high accuracy."
                    />

                    <FeatureCard
                        icon="📊"
                        title="Analytics Dashboard"
                        description="Visualize insights using interactive graphs and statistics."
                    />

                    <FeatureCard
                        icon="⚡"
                        title="Instant Results"
                        description="Receive grade predictions and confidence scores in real time."
                    />

                </div>

            </div>

        </section>
    );
}

export default Features;