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

            <div className="main-schematic-container">
                <div className="eagle-schematic"></div>
                <div className="eagle-pcb"></div>
                <div className="trapezoid-section">
                    <div className="trapezoid-1">
                        <div className="trapezoid-text-1" onClick={openGitRepository}>Git Repository</div>
                    </div>
                    <div className="trapezoid">
                        <div className="trapezoid-text" onClick={openElectroboomsSite}>Circut's Author:<br /> Electroboom</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TeslaCoilSchematic;