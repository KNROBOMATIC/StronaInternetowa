import Background from "../../components/background/Background.tsx";
import "./Projects.scss"
import {Fragment} from "react";
import {useNavigate} from "react-router-dom";

function Projects(){
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/home");
    };

    return (
        <Fragment>
            <Background/>
            <button onClick={handleNavigate}>Go to Home</button>
        </Fragment>
    )
}

export default Projects;