import Background from "../../../components/background/Background";
import "./TeslaCoil.scss"
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import {useNavigate} from "react-router-dom";
import {Fragment} from "react";

const photos = [
    new URL('../robotic-head/media/photos/7ec83dfd-09ef-49b1-ae97-084239cd96dc.jpg', import.meta.url).href,
    new URL('../robotic-head/media/photos/3b4c0efd-7534-4324-8046-9d0bae79c59a.jpg', import.meta.url).href,
    new URL('../robotic-head/media/photos/14ecc79d-910c-4445-9af9-5cbf3bcebbd2.jpg', import.meta.url).href,
    new URL('../robotic-head/media/photos/26fed363-54b3-4fab-9bb8-28545aa9ade2.jpg', import.meta.url).href,
    new URL('../robotic-head/media/photos/48e72ea3-b17c-49c8-9715-c788990571c7.jpg', import.meta.url).href,
    new URL('../robotic-head/media/photos/5824550c-70ca-49b8-b6dd-7fffdf480882.jpg', import.meta.url).href,
    new URL('../robotic-head/media/photos/cd6cfa6f-15aa-42bd-a979-62541146e369.jpg', import.meta.url).href,
    new URL('../robotic-head/media/photos/dd93910f-fdc1-442d-b898-811f26adcb15.jpg', import.meta.url).href,
    new URL('../robotic-head/media/photos/df5c7947-c9a9-4152-98cd-4e181f91d563.jpg', import.meta.url).href,
];

function TeslaCoil(){

    const navigate = useNavigate();
    const navigateToSchematic = () => {
        navigate("/projects/tesla-coil/schematic");
    };
    
    return (
        <Fragment>
            <Background/>
            <div className="photo-main-container">
            <Breadcrumbs/>
            <button className="go-to-schematic-button" onClick={navigateToSchematic}>Go to Schematic</button>
                <div className="photo-gallery">
                    {photos.map((photo, index) => (
                        <img key={index} src={photo} alt={`Photo ${index + 1}`} className="photo-item" />
                    ))}
                </div>
            </div>
            
        </Fragment>
    )
}

export default TeslaCoil;