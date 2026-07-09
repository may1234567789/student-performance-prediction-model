import { useState } from "react";
import api from "../../services/api";
import Loader from "../components/Loader";
import ResultCard from "../components/ResultCard";

function PredictionForm() {

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const response = await api.post(
                "/predict",
                formData
            );

            setResult(response.data);

        }

        catch (error) {

            alert("Prediction Failed");

            console.log(error);

        }

        finally {

            setLoading(false);

        }

    };

    const [loading, setLoading] = useState(false);

    const [result, setResult] = useState(null);

    const [formData, setFormData] = useState({

        Attendance: "",

        Study_Hours: "",

        Assignments_Completed: "",

        Previous_Exam_Marks: "",

        Sleep_Hours: "",

        Internet_Hours: "",

        Extra_Curricular: "Yes",

        Parental_Education: "Graduate",

        Family_Income: "Medium",

        Daily_Screen_Time: "",

        Mock_Test_Score: "",

        Class_Participation: "Medium",

        Library_Visits_Per_Week: "",

        Semester: 1

    });

    return (

        <div className="max-w-6xl mx-auto py-16">

            <h1 className="text-5xl font-bold text-center mb-12">

                Student Performance Prediction

            </h1>

            <form

                onSubmit={handleSubmit}

                className="grid md:grid-cols-2 gap-6 bg-white p-10 rounded-xl shadow-lg"

            >

                {/* Build all input fields here */}

                <button

                    className="bg-blue-600 text-white py-4 rounded-lg text-xl font-bold hover:bg-blue-700 col-span-2"

                >

                    Predict Performance

                </button>

            </form>

            {loading && <Loader />}

            <ResultCard result={result} />

            <FormInput
                label="Attendance"
                name="Attendance"
                type="number"
                value={formData.Attendance}
                onChange={handleChange}
            />

        </div>

    );
}

export default PredictionForm;