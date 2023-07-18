import React, { useEffect, useState } from 'react';
import './Slider.css';
import { productsData } from './utils';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = productsData.length;
    const slideDuration = 4000; // Duration in milliseconds (5 seconds)

    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlide();
        }, slideDuration);

        return () => {
            clearTimeout(timer);
        };
    });

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
    };

    const getSlidesToShow = () => {
        const previousIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
        const nextIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
        return [productsData[previousIndex], productsData[currentIndex], productsData[nextIndex]];
    };

    return (
        <div className="slider">
            <button className="prev-button" onClick={prevSlide}>Prev</button>
            <div className="slides-container">
                {getSlidesToShow().map((slide, index) => (
                    <div key={index} className="slide">
                        <img src={slide.image} alt={slide.name} />
                        <h3 className="">{slide.name}</h3>
                        <p className="">${slide.price}</p>
                    </div>
                ))}
            </div>
            <button className="next-button" onClick={nextSlide}>Next</button>
        </div>
    );
};

export default Slider;
