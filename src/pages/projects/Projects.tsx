import Background from "../../components/background/Background.tsx";
import "./Projects.scss";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

function Projects() {
    const navigate = useNavigate();
    const [hoveredButton, setHoveredButton] = useState(null);

    const handleNavigateHome = () => {
        navigate("/");
    };
    const handleNavigateTeslaCoil = () => {
        navigate("/projects/tesla-coil");
    };
    const handleNavigateRoboticHead = () => {
        navigate("/projects/robotic-head");
    };

    const handleMouseEnter = (button) => {
        setHoveredButton(button);
    };

    const handleMouseLeave = () => {
        setHoveredButton(null);
    };

    return (
        <Fragment>
            <Background />
            <div className="hexagon-container">
                <div
                    className="hexagon-button"
                    onClick={handleNavigateHome}
                    data-index="1"
                    onMouseEnter={() => handleMouseEnter("home")}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={() => handleMouseEnter("home")}
                    onTouchEnd={handleMouseLeave}
                >
                    Go to Home
                </div>
                <div
                    className="hexagon-button"
                    onClick={handleNavigateTeslaCoil}
                    data-index="2"
                    onMouseEnter={() => handleMouseEnter("teslaCoil")}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={() => handleMouseEnter("teslaCoil")}
                    onTouchEnd={handleMouseLeave}
                >
                    Tesla Coil
                </div>
                <div
                    className="hexagon-button"
                    onClick={handleNavigateRoboticHead}
                    data-index="3"
                    onMouseEnter={() => handleMouseEnter("roboticHead")}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={() => handleMouseEnter("roboticHead")}
                    onTouchEnd={handleMouseLeave}
                >
                    Robotic Head
                </div>
            </div>
            {hoveredButton === "home" && (
                <div className="info-box red"></div>
            )}
            {hoveredButton === "teslaCoil" && (
                <div className="info-box brown">This is the info box for Tesla Coil.</div>
            )}
            {hoveredButton === "roboticHead" && (
                <div className="info-box blue">This is the info box for Robotic Head.</div>
            )}
        </Fragment>
    );
}

export default Projects;
