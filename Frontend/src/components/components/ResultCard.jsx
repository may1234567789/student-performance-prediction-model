function ResultCard({ result }) {

    if (!result) return null;
    if (!result) return null;

    const grade = result["Predicted Grade"];

    let gradeColor = "";
    let border = "";

    switch (grade) {
        case "Excellent":
            gradeColor = "text-green-600";
            border = "border-green-600 outline-2 outline-offset-2 outline-solid"
            break;

        case "Good":
            gradeColor = "text-blue-600";
            border = "border-blue-600 outline-2 outline-offset-2 outline-solid"
            break;

        case "Average":
            gradeColor = "text-yellow-500";
            border = "border-yellow-500 outline-2 outline-offset-2 outline-solid"
            break;

        case "Poor":
            gradeColor = "text-red-600";
            border = "border-red-600 outline-2 outline-offset-2 outline-solid"
            break;

        default:
            gradeColor = "text-gray-700";
    }

    return (

        <div className="bg-white shadow-xl rounded-xl p-8 mt-10">

            <h2 className="text-3xl font-bold text-blue-600 mb-6">
                Prediction Result
            </h2>

            <div className="space-y-4">

                <p className="text-xl">
                    <strong>Predicted Grade:</strong>
                    {" "}

                    <span className={`text-3xl font-bold ml-5 p-2 rounded-xl ${gradeColor} ${border}`}>
                        {grade}
                    </span>


                </p>

            </div>

        </div>

    );
}

export default ResultCard;