import React, { useState } from 'react'

import bmwImg from '../../images/bmwfoam.png'
import foamImg from '../../images/spongewash.png'
import pricebanner from '../../images/pricebanner.png'

import {
    Container,
    Row,
    Carousel
} from 'react-bootstrap/'


const Hero = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div >
            <Carousel className='d-none d-sm-block' interval={5000} activeIndex={index} controls={false} indicators={false} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bmwImg}
                        alt="First slide"
                        height="450px"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={foamImg}
                        alt="Second slide"
                        height="450px"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pricebanner}
                        alt="Third slide"
                        height="450px"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );

};

export default Hero;