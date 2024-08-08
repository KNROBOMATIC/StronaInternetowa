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
            <div className="hexagon-container">
                <div className="hexagon-button" onClick={handleNavigateHome}>Go to Home</div>
                <div className="hexagon-button" onClick={handleNavigateTeslaCoil}>Tesla Coil</div>
                <div className="hexagon-button" onClick={handleNavigateRoboticHead}>Robotic Head</div>
            </div>
        </Fragment>
    )
}

export default Projects;