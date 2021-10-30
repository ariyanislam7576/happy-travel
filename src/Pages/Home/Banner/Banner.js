import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/photos/young-woman-kayaking-through-the-backwaters-of-monroe-island-picture-id1031430214?k=20&m=1031430214&s=612x612&w=0&h=mOKI9aX6Ycp-QvCN8D5bBZMEXNyMKUScR3DZ2Pnfbm0="
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/photos/doha-skyline-of-the-downtown-in-qatar-picture-id629006338?k=20&m=629006338&s=612x612&w=0&h=_ez2d1CyX-R6NelTpbRB-sHIkWey1YsioheUPc6lr_8="
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/photos/beautiful-caucasian-young-woman-travel-outside-the-car-with-wind-in-picture-id972155284?k=20&m=972155284&s=612x612&w=0&h=4ufppP2dRI-Fn9V6asfpp1M7l5cRS8i0FJntmirRwDY="
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;