import Background from "../../../components/background/Background.tsx";
import "./RoboticHead.scss"
import {Fragment} from "react";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs.tsx";

function RoboticHead(){


    return (
        <Fragment>
            <Background/>
            <Breadcrumbs/>
        </Fragment>
    )
}

export default RoboticHead;