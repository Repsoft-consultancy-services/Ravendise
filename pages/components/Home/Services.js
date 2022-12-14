import Image from 'next/image';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import { FaLessThan, FaGreaterThan } from 'react-icons/fa'
import Link from 'next/link';

const Services = () => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    return (
        <div className='mt-5 mb-16 lg:mb-0 w-full 2xl:w-[100rem] 2xl:mx-auto'>
            <h1 className='text-2xl lg:text-5xl font-bold text-center text-black'>Services We offer</h1>
            <div className='flex flex-col-reverse'>
                <div className='flex justify-center space-x-3 my-10'>
                    <div ref={navigationPrevRef}>
                        <button className='btn rounded-full bg-black'><FaLessThan /></button>
                    </div>
                    <div ref={navigationNextRef}>
                        <button className='btn rounded-full bg-white border-0 shadow-[2px_4px_15px_0_rgba(0,0,0,0.15)]'><FaGreaterThan className='text-black' /></button>
                    </div>
                </div>
                <div className="h-[600px]">
                    <Swiper
                        spaceBetween={50}
                        modules={[Navigation]}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                        }}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 1,
                            },
                            1025: {
                                slidesPerView: 3,
                            },
                            1440: {
                                slidesPerView: 4,
                            },
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="box">
                                <div className="content flex flex-col justify-evenly items-center">
                                    <h2 className='text-4xl uppercase font-bold'>QUALITY ASSURANCE</h2>
                                    <h3 className="sub-title font-extrabold">01</h3>
                                    <div className='mt-8 mb-10 text-base font-semibold text-center px-3'>
                                        Ravendise is a community of software testers who are passionate about quality and love to test. We develop an in-depth understanding of the applications under test and include software testing strategies that deliver quantifiable results.
                                    </div>
                                    <p className='mt-20'>
                                        <Link href={{pathname:'/services',query:{keyword:'0'}}}><p className='button'>Read More</p></Link>
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="box">
                                <div className="content flex flex-col justify-center items-center">
                                    <h2 className='text-4xl uppercase font-bold'>3D ART</h2>
                                    <h3 className="sub-title font-extrabold">02</h3>
                                    <div className='mt-8 mb-10 text-base font-semibold text-center px-3'>
                                        Ravendise is a 3D game art outsourcing company providing a full spectrum of custom 3D art services from 3D concept development to complex 3D art projects. Since we always strive to create supreme-quality art that interprets the client&apos;s thoughts we offer to hire 3D designers from our team for projects of any complexity.
                                    </div>
                                    <p className='mt-20'>
                                        <Link href={{pathname:'/services',query:{keyword:'2'}}}><p className='button'>Read More</p></Link>
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="box">
                                <div className="content flex flex-col justify-center items-center">
                                    <h2 className='text-4xl uppercase font-bold'>2D ART</h2>
                                    <h3 className="sub-title font-extrabold">03</h3>
                                    <div className='mt-8 mb-10 text-base font-semibold text-center  px-3'>
                                        Ravendise is a 2D art company with an exceptional reputation for talented 2D game artists with solid experience in the industry. We offer 2D game art outsourcing services for projects of any size and deliver high-quality artworks satisfying customers around the world.
                                    </div>
                                    <p className='mt-24'>
                                        <Link href={{pathname:'/services',query:{keyword:'1'}}}><p className='button'>Read More</p></Link>
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="box">
                                <div className="content flex flex-col justify-center items-center">
                                    <h2 className='text-4xl uppercase font-bold'>Graphic Design</h2>
                                    <h3 className="sub-title font-extrabold">04</h3>
                                    <div className='mt-8 mb-10 text-base font-semibold text-center px-3'>
                                        Ravendise is a multi-disciplinary, independently owned design studio.
                                        Our work encompasses graphics and identity, strategy and positioning, products and packaging, exhibitions and installations, websites and digital experiences, advertising and communications, data visualizations and typefaces, sound and motion
                                    </div>
                                    <p className='mt-20'>
                                        <Link href={{pathname:'/services',query:{keyword:'3'}}}><p className='button'>Read More</p></Link>
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="box">
                                <div className="content flex flex-col justify-center items-center">
                                    <h2 className='text-4xl uppercase font-bold text-center'>SOFTWARE DEVELOPMENT</h2>
                                    <h3 className="sub-title font-extrabold">05</h3>
                                    <div className='mt-8 mb-10 text-base font-semibold text-center px-3'>
                                        We help our partners accelerate disruption both within their organizations and industries. They strategize new ideas and obtain real business value by getting the most out of our production-ready custom software development services. Talk to our experts today!
                                    </div>
                                    <p className='mt-16'>
                                        <Link href={{pathname:'/services',query:{keyword:'4'}}}><p className='button'>Read More</p></Link>
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>


            {/* <div className='grid lg:grid-cols-5 gap-5 text-center text-white mt-10'>
                <div className='bg-black p-4 h-[468px]'>
                    <h2 className='text-4xl uppercase font-bold'>QUALITY ASSURANCE</h2>
                    <div className='mt-8 mb-10'>
                        Ravendise is a community of software testers who are passionate about quality and love to test. We develop an in-depth understanding of the applications under test and include software testing strategies that deliver quantifiable results.
                    </div>
                </div>
                <div className='bg-black p-4 h-[468px]'>
                    <h2 className='text-4xl uppercase font-bold'>3D ART</h2>
                    <div className='mt-8 mb-10 h-[468px]'>
                        Ravendise is a 3D game art outsourcing company providing a full spectrum of custom 3D art services from 3D concept development to complex 3D art projects. Since we always strive to create supreme-quality art that interprets the client&apos;s thoughts we offer to hire 3D designers from our team for projects of any complexity.
                    </div>
                </div>
                <div className='bg-black p-4 h-[468px]'>
                    <h2 className='text-4xl uppercase font-bold'>2D ART</h2>
                    <div className='mt-8 mb-10'>
                        Ravendise is a 2D art company with an exceptional reputation for talented 2D game artists with solid experience in the industry. We offer 2D game art outsourcing services for projects of any size and deliver high-quality artworks satisfying customers around the world.
                    </div>
                </div>
                <div className='bg-black p-4 h-[468px]'>
                    <h2 className='text-4xl uppercase font-bold'>SOFTWARE DEVELOPMENT</h2>
                    <div className='mt-8 mb-10'>
                        We help our partners accelerate disruption both within their organizations and industries. They strategize new ideas and obtain real business value by getting the most out of our production-ready custom software development services. Talk to our experts today!
                    </div>
                </div>
                <div className='bg-black p-4 h-[468px]'>
                    <h2 className='text-4xl uppercase font-bold'>Graphic Design</h2>
                    <div className='mt-8 mb-10'>
                        Ravendise is a multi-disciplinary, independently owned design studio.
                        Our work encompasses graphics and identity, strategy and positioning, products and packaging, exhibitions and installations, websites and digital experiences, advertising and communications, data visualizations and typefaces, sound and motion
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Services;