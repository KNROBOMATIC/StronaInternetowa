import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../../components/background/Background";
import "./Home.scss";

function Home() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/projects");
    };

    return (
        <Fragment>
            <Background/>
            <div className="page-home-logo"></div>
            <div className="page-home-button-navigate page-home-button-navigate-projects" onClick={handleNavigate}>Go to
                Projects
            </div>
            <div className="page-home-button-navigate page-home-button-navigate-projects-fb-robomatic"
                 onClick={handleNavigate}>Robomatic
            </div>
            <div className="page-home-button-navigate page-home-button-navigate-projects-fb-robomaticon"
                 onClick={handleNavigate}>Robomaticon
            </div>
        </Fragment>
    );
}

export default Home;
