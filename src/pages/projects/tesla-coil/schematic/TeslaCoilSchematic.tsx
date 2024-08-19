import Background from "../../../../components/background/Background.tsx";
import "./TeslaCoilSchematic.scss"
import {Fragment} from "react";
import Breadcrumbs  from "../../../../components/breadcrumbs/Breadcrumbs.tsx"
function TeslaCoilSchematic(){

    const openGitRepository = () => {
        window.open("https://github.com/radekszewczyk01/TeslaCoilCircut/blob/main/README.md", "_blank");
    };

    const openElectroboomsSite = () => {
        window.open("https://www.electroboom.com/?p=575", "_blank");
    };

    return (
        <Fragment>
            <Background/>
            <Breadcrumbs/>
            <button className="go-to-repository-button" onClick={openGitRepository}>Git Repository</button>
            <button className="go-to-electroboom-button" onClick={openElectroboomsSite}>Circut's Author: Electroboom</button>

            <div className="main-schematic-container">
                <div className="component-power-supply-sections">
                    <div className="component-power-supply-section-5v">
                        <div className="potential"></div>
                    </div>
                    <div className="component-power-supply-section-12v-drv"></div>
                </div>
            </div>
        </Fragment>
    )
}

export default TeslaCoilSchematic;