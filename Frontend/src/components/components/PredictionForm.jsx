import { useState } from "react";
import api from "../../services/api";
import Loader from "../components/Loader";
import ResultCard from "../components/ResultCard";
import FormInput from "../components/FormInput";
import FormSelect from "../components/FormSelect";

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

        <div className="max-w-6xl mx-auto py-16 ">

            <h1 className="text-5xl font-bold text-center mb-12">

                Student Performance Prediction

            </h1>







            <form

                onSubmit={handleSubmit}

                className=" bg-white p-10 rounded-xl shadow-lg"

            >
                <div className="grid grid-cols-3 gap-4">
                    <FormInput
                        label="Attendance (%)"
                        name="Attendance"
                        type="number"
                        value={formData.Attendance}
                        onChange={handleChange}
                    />

                    <FormInput
                        label="Study Hours"
                        name="Study_Hours"
                        type="number"
                        value={formData.Study_Hours}
                        onChange={handleChange}
                    />

                    <FormInput
                        label="Assignments Completed"
                        name="Assignments_Completed"
                        type="number"
                        value={formData.Assignments_Completed}
                        onChange={handleChange}
                    />

                    <FormInput
                        label="Previous Exam Marks"
                        name="Previous_Exam_Marks"
                        type="number"
                        value={formData.Previous_Exam_Marks}
                        onChange={handleChange}
                    />

                    <FormInput
                        label="Sleep Hours"
                        name="Sleep_Hours"
                        type="number"
                        value={formData.Sleep_Hours}
                        onChange={handleChange}
                    />

                    <FormInput
                        label="Internet Hours"
                        name="Internet_Hours"
                        type="number"
                        value={formData.Internet_Hours}
                        onChange={handleChange}
                    />

                    <FormSelect
                        label="Extra Curricular"
                        name="Extra_Curricular"
                        value={formData.Extra_Curricular}
                        onChange={handleChange}
                        options={["Yes", "No"]}
                    />

                    <FormSelect
                        label="Parental Education"
                        name="Parental_Education"
                        value={formData.Parental_Education}
                        onChange={handleChange}
                        options={[
                            "High School",
                            "Diploma",
                            "Graduate",
                            "Postgraduate"
                        ]}
                    />

                    <FormSelect
                        label="Family Income"
                        name="Family_Income"
                        value={formData.Family_Income}
                        onChange={handleChange}
                        options={[
                            "Low",
                            "Medium",
                            "High"
                        ]}
                    />

                    <FormInput
                        label="Daily Screen Time"
                        name="Daily_Screen_Time"
                        type="number"
                        value={formData.Daily_Screen_Time}
                        onChange={handleChange}
                    />

                    <FormInput
                        label="Mock Test Score"
                        name="Mock_Test_Score"
                        type="number"
                        value={formData.Mock_Test_Score}
                        onChange={handleChange}
                    />

                    <FormSelect
                        label="Class Participation"
                        name="Class_Participation"
                        value={formData.Class_Participation}
                        onChange={handleChange}
                        options={[
                            "Low",
                            "Medium",
                            "High"
                        ]}
                    />

                    <FormInput
                        label="Library Visits Per Week"
                        name="Library_Visits_Per_Week"
                        type="number"
                        value={formData.Library_Visits_Per_Week}
                        onChange={handleChange}
                    />

                    <FormSelect
                        label="Semester"
                        name="Semester"
                        value={formData.Semester}
                        onChange={handleChange}
                        options={[
                            1, 2, 3, 4, 5, 6, 7, 8
                        ]}
                    />
                    <button
                        type="submit"
                        className="md:col-span-2 bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-lg text-xl font-bold"
                    >
                        Predict Performance
                    </button>


                </div>

            </form>
            {loading && <Loader />}

            <ResultCard result={result} />

        </div>

    );
}

export default PredictionForm;