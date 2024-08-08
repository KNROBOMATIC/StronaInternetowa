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

    return {
        navigateToHome,
        navigateToProjects,
    };
};

// src/utils/navigation.tsx

export const openFacebookPageRobomaticon = () => {
    window.open("https://www.facebook.com/robomaticonpl", "_blank");
};

export const openFacebookPageRobomatic = () => {
    window.open("https://www.facebook.com/knrobomatic", "_blank");
};
