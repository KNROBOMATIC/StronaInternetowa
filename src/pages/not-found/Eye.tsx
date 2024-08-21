import React, { useEffect, useRef } from 'react';
import './Eye.scss';

function Eye() {
    const eyesRef = useRef<HTMLDivElement[]>([]);
    const pupilsRef = useRef<HTMLDivElement[]>([]);
    const count = 6;
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            eyesRef.current.forEach((eye, index) => {
                const pupil = pupilsRef.current[index];
                const eyeRect = eye.getBoundingClientRect();

                // Środek oka
                const eyeCenterX = eyeRect.left + eyeRect.width / 2;
                const eyeCenterY = eyeRect.top + eyeRect.height / 2;

                // Wektor różnicy między pozycją kursora a środkiem oka
                const deltaX = event.clientX - eyeCenterX;
                const deltaY = event.clientY - eyeCenterY;

                // Obliczanie kąta
                const angle = Math.atan2(deltaY, deltaX);

                // Obliczanie odległości przesunięcia źrenicy od środka oka
                const maxDistance = (eyeRect.width - pupil.offsetWidth) / 2;

                // Pozycja źrenicy
                const pupilX = Math.cos(angle) * maxDistance;
                const pupilY = Math.sin(angle) * maxDistance;

                // Ustawienie pozycji źrenicy
                pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            {Array.from({ length: count }).map((_, index) => (
                <div className={`iris n${index}`} key={index}>
                    <div
                        className="eye"
                        ref={(el) => {
                            if (el) eyesRef.current[index] = el;
                        }}
                    >
                        <div
                            className="pupil"
                            ref={(el) => {
                                if (el) pupilsRef.current[index] = el;
                            }}
                        ></div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Eye;
