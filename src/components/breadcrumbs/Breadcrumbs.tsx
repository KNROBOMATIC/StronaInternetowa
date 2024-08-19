import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import "./Breadcrumbs.scss";
import { useNavigation, openFacebookPageRobomaticon, openFacebookPageRobomatic } from "../navigation/navigation.tsx";

function Breadcrumbs() {

    const location = useLocation();
    const {
        navigateToHome,
        navigateToProjects,
        navigateToTeslaCoil,
        navigateToRoboticHead,
        navigateToTeslaCoilSchematic
    } = useNavigation();

    const pathFragments = ["#", ...location.pathname.split("/").filter(Boolean)];


    const navigationMap: { [key: string]: { label: string, action: () => void } } = {
        "#": { label: "Home", action: navigateToHome },
        "projects": { label: "Projects", action: navigateToProjects },
        "tesla-coil": { label: "Tesla Coil", action: navigateToTeslaCoil },
        "schematic": { label: "Schematic", action: navigateToTeslaCoilSchematic },
        "robotic-head": { label: "Robotic Head", action: navigateToRoboticHead },
        "facebook-robomaticon": { label: "Robomaticon Facebook", action: openFacebookPageRobomaticon },
        "facebook-robomatic": { label: "Robomatic Facebook", action: openFacebookPageRobomatic },
    };

    const buttons = pathFragments.map((fragment, index) => {
        const { label, action } = navigationMap[fragment] || { label: fragment, action: () => {} };
        return (
            <Fragment key={index}>
                <div className="breadcrumbs-button" onClick={action}>
                    {label}
                </div>
                {index < pathFragments.length - 1 && (
                    <span className="breadcrumbs-arrow">→</span>  // Dodajemy strzałkę między przyciskami
                )}
            </Fragment>
        );
    });

    return (
        <Fragment>
            <div className="breadcrumbs-main-container">
                <div className="breadcrumbs-logo"></div>
                {buttons}
            </div>
        </Fragment>
    );
}

export default Breadcrumbs;
