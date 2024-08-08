import Background from "../../../components/background/Background.tsx";
import "./RoboticHead.scss"
import {Fragment} from "react";
import {useNavigation} from "../../../components/navigation/navigation.tsx";

function RoboticHead(){
    const { navigateToHome, navigateToProjects } = useNavigation();

    return (
        <Fragment>
            <Background/>
            <button onClick={navigateToHome}>Go to Home</button>
            <button onClick={navigateToProjects}>Go to Projects</button>
        </Fragment>
    )
}

export default RoboticHead;