// src/utils/navigation.tsx
import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/");
    };

    const navigateToProjects = () => {
        navigate("/projects");
    };

    const navigateToTeslaCoil = () => {
        navigate("/projects/tesla-coil");
    };

    const navigateToRoboticHead = () => {
        navigate("/projects/robotic-head");
    };

    const navigateToTeslaCoilSchematic = () => {
        navigate("/projects/tesla-coil/schematic");
    };

    return {
        navigateToHome,
        navigateToProjects,
        navigateToTeslaCoil,
        navigateToRoboticHead,
        navigateToTeslaCoilSchematic,
    };
};

export const openFacebookPageRobomaticon = () => {
    window.open("https://www.facebook.com/robomaticonpl", "_blank");
};

export const openFacebookPageRobomatic = () => {
    window.open("https://www.facebook.com/knrobomatic", "_blank");
};
