import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../src/components/components/Navbar";

import Home from "../src/pages/Home";
import Prediction from "../src/pages/Prediction";
import Dashboard from "../src/pages/Dashboard";
import About from "../src/pages/About";
import NotFound from "../src/pages/NotFound";

function App() {
    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route
                    path="/predict"
                    element={<Prediction />}
                />

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;