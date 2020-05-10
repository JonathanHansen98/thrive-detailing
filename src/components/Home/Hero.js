import React, { useState } from 'react'

import truckImg from '../../images/truck1.jpg';
import trailerImg from '../../images/trailer1.jpg';
import boatImg from '../../images/boat1.jpg';

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
            <Carousel activeIndex={index} onSelect={handleSelect} className={classes.carousel}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-25"
                        src='https://www.telegraph.co.uk/content/dam/news/2017/11/11/Lam1_trans%2B%2BnAdySV0BR-4fDN_-_p756cVfcy8zLGPV4EhRkjQy7tg.jpg'
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item> 
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={boatImg}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={trailerImg}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );

};

export default Hero;