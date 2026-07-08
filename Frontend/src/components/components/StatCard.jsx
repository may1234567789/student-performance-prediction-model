function StatCard({ value, title }) {
    return (
        <div className="bg-blue-600 text-white rounded-xl p-8 text-center shadow-lg">

            <h2 className="text-5xl font-bold">
                {value}
            </h2>

            <p className="mt-4 text-lg">
                {title}
            </p>

        </div>
    );
}

export default StatCard;