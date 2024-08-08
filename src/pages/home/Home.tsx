import { Fragment } from "react";
import Background from "../../components/background/Background";
import "./Home.scss";
import {openFacebookPageRobomatic, openFacebookPageRobomaticon, useNavigation} from "../../components/navigation/navigation.tsx";

function Home() {

    return (
        <Fragment>
            <Background/>
            <div className="page-home-logo"></div>
            <div className="page-home-button-navigate page-home-button-navigate-projects" onClick={useNavigation().navigateToProjects}>Go to
                Projects
            </div>
            <div className="page-home-button-navigate page-home-button-navigate-projects-fb-robomatic"
                 onClick={openFacebookPageRobomatic}>
                <div className="fb-icon fb-icon-robomatic"></div>
                Robomatic
                <div className="fb-icon robomatic-icon"></div>
            </div>
            <div className="page-home-button-navigate page-home-button-navigate-projects-fb-robomaticon"
                 onClick={openFacebookPageRobomaticon}>
                <div className="fb-icon fb-icon-robomaticon"></div>
                Robomaticon
                <div className="fb-icon robomaticon-icon">
                    <div className="fb-icon robomaticon-icon-logo"></div>
                </div>
            </div>
        </Fragment>
    );
}

export default Home;
