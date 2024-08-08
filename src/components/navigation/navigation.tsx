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
