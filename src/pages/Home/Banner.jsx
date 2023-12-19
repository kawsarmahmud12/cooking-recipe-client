import React from 'react';
import banner from '../../assets/banner.avif'
import LazyLoad from 'react-lazy-load';

const Banner = () => {
    return (
        <LazyLoad threshold={0.95}>
            <div className="carousel w-[100%] lg:w-full lg:h-[100vh] auto-Slide={true}">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner} className="sm:w-full md:w-full lg:w-full" />
                    <div className='absolute top-0 container text-center bg-black w-full 
                    sm:h-[100vh] md:h-[100vh]  lg:h-[100vh] bg-opacity-50'>
                        <h1 className='mt-[15%] font-mono text-white lg:text-7xl md:text-4xl  font-bold'>We have best <span className='text-yellow-500'>food recipe</span></h1>
                        <p className='text-white mt-6 lg:text-xl md:text-2xl mb-6'>“ food recipe 24/7 has the best application for online ordering. Fantastic choices <br /> of restaurants, low delivery price and great customer service.”</p>
                        <button className='bg-white text-black p-3 text-xl rounded '>Order Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-50">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                    <div className='absolute top-0 container text-center bg-black w-full lg:h-[100vh] bg-opacity-50'>
                        <h1 className='mt-[15%] font-mono text-white lg:text-7xl md:text-4xl  font-bold'>We have best <span className='text-yellow-500'>food recipe</span></h1>
                        <p className='text-white mt-6 lg:text-xl md:text-2xl mb-6'>“ food recipe 24/7 has the best application for online ordering. Fantastic choices <br /> of restaurants, low delivery price and great customer service.”</p>
                        <button className='bg-white text-black p-3 text-xl rounded '>Order Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-50">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                    <div className='absolute top-0 container text-center bg-black w-full lg:h-[100vh] bg-opacity-50'>
                        <h1 className='mt-[15%] font-mono text-white lg:text-7xl md:text-4xl  font-bold'>We have best <span className='text-yellow-500'>food recipe</span></h1>
                        <p className='text-white mt-6 lg:text-xl md:text-2xl mb-6'>“ food recipe 24/7 has the best application for online ordering. Fantastic choices <br /> of restaurants, low delivery price and great customer service.”</p>
                        <button className='bg-white text-black p-3 text-xl rounded '>Order Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-50">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                    <div className='absolute top-0 container text-center bg-black w-full lg:h-[100vh] bg-opacity-50'>
                        <h1 className='mt-[15%] font-mono text-white lg:text-7xl md:text-4xl  font-bold'>We have best <span className='text-yellow-500'>food recipe</span></h1>
                        <p className='text-white mt-6 lg:text-xl md:text-2xl mb-6'>“ food recipe 24/7 has the best application for online ordering. Fantastic choices <br /> of restaurants, low delivery price and great customer service.”</p>
                        <button className='bg-white text-black p-3 text-xl rounded '>Order Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-50">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </LazyLoad>

    );
};

export default Banner;