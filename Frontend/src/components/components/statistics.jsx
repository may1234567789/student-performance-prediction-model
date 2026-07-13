import StatCard from "../components/StatCard";

function Statistics() {
    return (
        <section className="py-24">

            <div className="max-w-7xl mx-auto px-8">

                <h2 className="text-4xl font-bold text-center mb-16">
                    Project Statistics
                </h2>

                <div className="grid md:grid-cols-4 gap-8">

                    <StatCard
                        value="10K+"
                        title="Students"
                    />

                    <StatCard
                        value="98%"
                        title="Accuracy"
                    />

                    <StatCard
                        value="4"
                        title="ML Models"
                    />

                </div>

            </div>

        </section>
    );
}

export default Statistics;