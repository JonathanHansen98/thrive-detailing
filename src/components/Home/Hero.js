import React, { useState } from 'react'
// import bmwImg from '../../images/bmwfoam.png'
// import foamImg from '../../images/spongewash.png'
// import pricebanner from '../../images/pricebanner.png'
import { Carousel } from 'react-bootstrap'

import Img from '../Layout/image';

const Hero = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div >
            <Carousel className='d-none d-sm-block' interval={5000} activeIndex={index} controls={false} indicators={false} onSelect={handleSelect}>
                <Carousel.Item>
                    <Img
                        style={{
                            width: '100vw',
                            height: "600px"
                        }}
                        fileName="bmwfoam.png"
                        alt="First slide"
                        
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Img
                        style={{
                            width: '100%',
                            height: "600px"
                        }}
                        fileName="HeadLightBuff.jpeg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Img
                        style={{
                            width: '100%',
                            height: "600px"
                        }}
                        fileName="DashWipe.jpeg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );

};

export default Hero;