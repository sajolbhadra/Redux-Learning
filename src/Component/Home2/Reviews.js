import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";


const Reviews = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }

    };
    return (
        <div>
            <Carousel
                showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                className='bg-red-200 px-8' >
                <div className='bg-blue-300 m-4 p-8'>Item 1</div>
                <div className='bg-blue-300 m-4 p-8'>Item 1</div>
                <div className='bg-blue-300 m-4 p-8'>Item 1</div>
                <div className='bg-blue-300 m-4 p-8'>Item 1</div>
                <div className='bg-blue-300 m-4 p-8'>Item 1</div>
                <div className='bg-blue-300 m-4 p-8'>Item 1</div>
            </Carousel>
        </div>
    );
};

export default Reviews;