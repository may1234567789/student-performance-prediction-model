import Navbar from "../components/components/Navbar";
import Footer from "../components/components/Footer";

function About() {
    return (
        <div className="bg-gray-50 min-h-screen">

            {/* Hero Section */}

            <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20">

                <div className="max-w-6xl mx-auto px-6 text-center">

                    <h1 className="text-5xl font-bold mb-6">
                        About Our Project
                    </h1>

                    <p className="text-xl text-blue-100">
                        Student Performance Prediction System using Machine Learning
                    </p>

                </div>

            </div>

            {/* About */}

            <div className="max-w-6xl mx-auto py-16 px-6">

                <section className="mb-16">

                    <h2 className="text-3xl font-bold text-blue-700 mb-5">
                        Project Overview
                    </h2>

                    <p className="text-gray-700 leading-8 text-lg">

                        The Student Performance Prediction System is a Machine Learning
                        based web application that predicts whether a student is likely
                        to achieve an <strong>Excellent</strong>, <strong>Good</strong>,
                        <strong>Average</strong>, or <strong>Poor</strong> academic
                        performance.

                        <br /><br />

                        The prediction is based on several academic and lifestyle
                        parameters such as attendance, study hours, assignment
                        completion, previous examination marks, sleep hours,
                        internet usage, family income, parental education,
                        mock test scores and class participation.

                    </p>

                </section>

                {/* Objective */}

                <section className="mb-16">

                    <h2 className="text-3xl font-bold text-blue-700 mb-5">
                        Project Objective
                    </h2>

                    <p className="text-gray-700 leading-8 text-lg">

                        The objective of this project is to assist students,
                        teachers and educational institutions in identifying
                        students who may require additional academic support.

                        The system helps in early prediction of student
                        performance so that timely guidance and improvement
                        strategies can be implemented.

                    </p>

                </section>

                {/* Technologies */}

                <section className="mb-16">

                    <h2 className="text-3xl font-bold text-blue-700 mb-8">
                        Technologies Used
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="bg-white shadow rounded-xl p-6">

                            <h3 className="text-2xl font-semibold mb-4">
                                Frontend
                            </h3>

                            <ul className="space-y-2 text-gray-700">

                                <li>✔ React.js</li>
                                <li>✔ Vite</li>
                                <li>✔ Tailwind CSS</li>
                                <li>✔ Axios</li>

                            </ul>

                        </div>

                        <div className="bg-white shadow rounded-xl p-6">

                            <h3 className="text-2xl font-semibold mb-4">
                                Backend
                            </h3>

                            <ul className="space-y-2 text-gray-700">

                                <li>✔ FastAPI</li>
                                <li>✔ Python</li>
                                <li>✔ REST API</li>

                            </ul>

                        </div>

                        <div className="bg-white shadow rounded-xl p-6">

                            <h3 className="text-2xl font-semibold mb-4">
                                Machine Learning
                            </h3>

                            <ul className="space-y-2 text-gray-700">

                                <li>✔ Scikit-Learn</li>
                                <li>✔ Logistic Regression</li>
                                <li>✔ Decision Tree</li>
                                <li>✔ Random Forest</li>
                                <li>✔ K-Nearest Neighbors</li>

                            </ul>

                        </div>

                        <div className="bg-white shadow rounded-xl p-6">

                            <h3 className="text-2xl font-semibold mb-4">
                                Tools
                            </h3>

                            <ul className="space-y-2 text-gray-700">

                                <li>✔ VS Code</li>
                                <li>✔ Git & GitHub</li>
                                <li>✔ Jupyter Notebook</li>

                            </ul>

                        </div>

                    </div>

                </section>

                {/* Workflow */}

                <section className="mb-16">

                    <h2 className="text-3xl font-bold text-blue-700 mb-6">
                        Project Workflow
                    </h2>

                    <div className="bg-white shadow rounded-xl p-8">

                        <div className="grid md:grid-cols-9 gap-2 text-center">

                            <div>
                                📊
                                <p className="font-semibold mt-2">
                                    Dataset
                                </p>
                            </div>
                            <p className="text-2xl">➡️</p>
                            <div>
                                🧹
                                <p className="font-semibold mt-2">
                                    Preprocessing
                                </p>
                            </div>
                            <p className="text-2xl">➡️</p>
                            <div>
                                🤖
                                <p className="font-semibold mt-2">
                                    Model Training
                                </p>
                            </div>
                            <p className="text-2xl">➡️</p>
                            <div>
                                📈
                                <p className="font-semibold mt-2">
                                    Evaluation
                                </p>

                            </div>
                            <p className="text-2xl">➡️</p>
                            <div>
                                🌐
                                <p className="font-semibold mt-2">
                                    Prediction
                                </p>

                            </div>

                        </div>

                    </div>

                </section>

                {/* Features */}

                <section className="mb-16">

                    <h2 className="text-3xl font-bold text-blue-700 mb-6">
                        Key Features
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">

                        <div className="bg-white shadow rounded-xl p-6">
                            ✔ Student Performance Prediction
                        </div>

                        <div className="bg-white shadow rounded-xl p-6">
                            ✔ Confidence Score
                        </div>

                        <div className="bg-white shadow rounded-xl p-6">
                            ✔ Machine Learning Model Comparison
                        </div>

                        <div className="bg-white shadow rounded-xl p-6">
                            ✔ Interactive Web Application
                        </div>

                        <div className="bg-white shadow rounded-xl p-6">
                            ✔ FastAPI REST API
                        </div>

                        <div className="bg-white shadow rounded-xl p-6">
                            ✔ Responsive User Interface
                        </div>

                    </div>

                </section>

                {/* Future Scope */}

                <section>

                    <h2 className="text-3xl font-bold text-blue-700 mb-6">
                        Future Scope
                    </h2>

                    <div className="bg-white shadow rounded-xl p-8">

                        <ul className="space-y-3 text-lg text-gray-700">

                            <li>• Student Login System</li>

                            <li>• Admin Dashboard</li>

                            <li>• PDF Report Generation</li>

                            <li>• Batch Prediction using CSV Upload</li>

                            <li>• Real-time Analytics Dashboard</li>

                            <li>• Cloud Deployment</li>

                        </ul>

                    </div>

                </section>

            </div>
            <Footer />

        </div>
    );
}

export default About;