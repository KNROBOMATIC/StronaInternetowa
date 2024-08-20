import { useState, useEffect } from "react";
import Background from "../../../components/background/Background.tsx";
import "./RoboticHead.scss";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs.tsx";
import { Fragment } from "react";

// Ścieżkisrc\pages\projects\robotic-head\media\photos\cd6cfa6f-15aa-42bd-a979-62541146e369.jpg
const photos = [
    new URL('./media/photos/3b4c0efd-7534-4324-8046-9d0bae79c59a.jpg', import.meta.url).href,
    new URL('./media/photos/7ec83dfd-09ef-49b1-ae97-084239cd96dc.jpg', import.meta.url).href,
    new URL('./media/photos/14ecc79d-910c-4445-9af9-5cbf3bcebbd2.jpg', import.meta.url).href,
    new URL('./media/photos/26fed363-54b3-4fab-9bb8-28545aa9ade2.jpg', import.meta.url).href,
    new URL('./media/photos/48e72ea3-b17c-49c8-9715-c788990571c7.jpg', import.meta.url).href,
    new URL('./media/photos/5824550c-70ca-49b8-b6dd-7fffdf480882.jpg', import.meta.url).href,
    new URL('./media/photos/cd6cfa6f-15aa-42bd-a979-62541146e369.jpg', import.meta.url).href,
    new URL('./media/photos/dd93910f-fdc1-442d-b898-811f26adcb15.jpg', import.meta.url).href,
    new URL('./media/photos/df5c7947-c9a9-4152-98cd-4e181f91d563.jpg', import.meta.url).href,
];

// Ścieżki do filmów
const videos = [
    new URL('./media/videos/2a9c152a-0aaf-4869-8a9d-2b39b8eb7752.mp4', import.meta.url).href,
    new URL('./media/videos/2e3ced09-a28b-4d01-bc10-c5e981ff83e5.mp4', import.meta.url).href,
];

function Gallery({ items, type }: { items: string[], type: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'ArrowRight') {
            handleNext();
        } else if (event.key === 'ArrowLeft') {
            handlePrev();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="gallery">
            <button className="nav-button" onClick={handlePrev}>←</button>
            <div className="media-content">
                {type === 'photo' ? (
                    <img src={items[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
                ) : (
                    <video controls src={items[currentIndex]} />
                )}
            </div>
            <button className="nav-button" onClick={handleNext}>→</button>
        </div>
    );
}

function RoboticHead() {
    const [activeTab, setActiveTab] = useState(0);

    const handleButtonClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <Fragment>
            <Background />
            <Breadcrumbs />
            <div className="media-button-section">
                <div
                    className={`media-button ${activeTab === 0 ? 'active' : ''}`}
                    onClick={() => handleButtonClick(0)}
                >
                    Photos
                </div>
                <div
                    className={`media-button ${activeTab === 1 ? 'active' : ''}`}
                    onClick={() => handleButtonClick(1)}
                >
                    Videos
                </div>
            </div>
            <div className="content-section">
                {activeTab === 0 && <Gallery items={photos} type="photo" />}
                {activeTab === 1 && <Gallery items={videos} type="video" />}
            </div>
        </Fragment>
    );
}

export default RoboticHead;
