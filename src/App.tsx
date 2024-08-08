import './App.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import TeslaCoil from "./pages/projects/tesla-coil/TeslaCoil.tsx"
import RoboticHead from "./pages/projects/robotic-head/RoboticHead.tsx";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/tesla-coil" element={<TeslaCoil/>} />
                <Route path="/projects/robotic-head" element={<RoboticHead />} />
            </Routes>
        </Router>
    );
}

export default App;
