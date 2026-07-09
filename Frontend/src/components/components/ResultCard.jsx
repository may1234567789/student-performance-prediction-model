function ResultCard({ result }) {

    if (!result) return null;

    return (

        <div className="bg-white shadow-xl rounded-xl p-8 mt-10">

            <h2 className="text-3xl font-bold text-blue-600 mb-6">
                Prediction Result
            </h2>

            <div className="space-y-4">

                <p className="text-xl">
                    <strong>Predicted Grade:</strong>
                    {" "}
                    {result["Predicted Grade"]}
                </p>

                <p className="text-xl">
                    <strong>Confidence:</strong>
                    {" "}
                    {result["Confidence"]}
                </p>

            </div>

        </div>

    );
}

export default ResultCard;