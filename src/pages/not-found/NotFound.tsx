import "./NotFound.scss"
import Eye from "./Eye.tsx";
import {Fragment} from "react";
import {useNavigate} from "react-router-dom";

function NotFound(){

    const navigate = useNavigate();
    const handleNavigateHome = () => {
        navigate("/");
    };

    return(
        <Fragment>
            <div className="not-found-lost-text-top">404</div>
            <div className="not-found-lost-text-bottom">Are you lost baby girl?</div>
            <div className="not-found-go-home-button" onClick={handleNavigateHome}>Take me home</div>
            <div className="not-found-backgroud"></div>
            <div className="not-found-logo-container">
                <div className="not-found-logo">
                    <Eye/>
                </div>
            </div>
        </Fragment>
    )
}

export default NotFound;