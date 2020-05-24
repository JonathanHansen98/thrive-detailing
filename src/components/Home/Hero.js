import React, { useState } from 'react'

import trailerImg from '../../images/trailer1.jpg';
import boatImg from '../../images/boat1.jpg';

import bmwImg from '../../images/bmwfoam.png'
import foamImg from '../../images/spongewash.png'
import pricebanner from '../../images/pricebanner.png'

import {
    Container,
    Row,
    Carousel
} from 'react-bootstrap/'

const useStyles = () => ({
    carousel: {
        height: 100
    },


})

const Hero = () => {

    const classes = useStyles();

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel interval={5000} activeIndex={index} controls={false} indicators={false} onSelect={handleSelect} className={classes.carousel}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bmwImg}
                        alt="First slide"
                        height="500px"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={foamImg}
                        alt="Second slide"
                        height="500px"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={pricebanner}
                        alt="Third slide"
                        height="500px"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );

};

export default Hero;