import Background from "../../../components/background/Background.tsx";
import "./TeslaCoil.scss"
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs.tsx";
import {useNavigate} from "react-router-dom";
import {Fragment} from "react";

function TeslaCoil(){

    const navigate = useNavigate();
    const navigateToSchematic = () => {
        navigate("/projects/tesla-coil/schematic");
    };

    return (
        <Fragment>
            <Background/>
            <Breadcrumbs/>
            <button className="go-to-schematic-button" onClick={navigateToSchematic}>Go to Schematic</button>
        </Fragment>
    )
}

export default TeslaCoil;