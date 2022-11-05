import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './carousel.css'
import image from './photo_2022-06-21_20-18-23.jpg'

export default function Carousel() {

    const [isOpen, setOpen] = useState(false)

    const handleDragStart = (e) => e.preventDefault();

    const items = [
        <img src={image} width={280} onDragStart={handleDragStart} role="presentation" />,
        <img src={image} width={280} onDragStart={handleDragStart} role="presentation" />,
        <img src={image} width={280} onDragStart={handleDragStart} role="presentation" />,
    ];
    return (
        <AliceCarousel mouseTracking items={items} />
    );
}
