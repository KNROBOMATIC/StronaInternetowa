import Background from "../../components/background/Background.tsx";
import "./Projects.scss"
import {Fragment} from "react";
import {useNavigate} from "react-router-dom";

function Projects(){
    const navigate = useNavigate();
    const handleNavigateHome = () => {
        navigate("/");
    };
    const handleNavigateTeslaCoil = () => {
        navigate("/projects/tesla-coil");
    };
    const handleNavigateRoboticHead = () => {
        navigate("/projects/robotic-head");
    };

    return (
        <Fragment>
            <Background/>
            <button onClick={handleNavigateHome}>Go to Home</button>
            <button onClick={handleNavigateTeslaCoil}>Tesla Coil</button>
            <button onClick={handleNavigateRoboticHead}>Robotic Head</button>
        </Fragment>
    )
}

export default Projects;