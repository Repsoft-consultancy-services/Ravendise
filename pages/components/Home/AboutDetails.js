import Image from 'next/image';
import React from 'react';
import cat from '../../../public/catface.png'

const AboutDetails = () => {
    return (
        <div className='xl:w-[80rem] 2xl:w-[100rem] 3xl:w-[150rem] mt-20'>
            <h1 className='text-4xl font-bold text-center underline'>So Who Are We?</h1>
            <div className='flex justify-center items-center relative -mt-[80px]'>
                <div className='flex-1 flex items-center flex-col'>
                    <p className='text-2xl mt-10 font-semibold'>How is Ravendise different? Our team of industry professionals, based offshore
                        in India and onshore in the US and Sweden,collaborate throughout the
                        development process toreduce turn-around time and client costs, while
                        delivering a greater volume of high quality content.

                        Whether a high volume of content on a tight schedule, or the generation of
                        specific assets that requires dedicated attention, we understand the issues that
                        arise in the development process.
                    </p>
                    <div className='mt-16'>
                        <button className='btn bg-black text-white text-lg normal-case px-10 rounded-md'>About Us</button>
                    </div>
                </div>
                <div className='flex-1'>
                    <div className='flex justify-center'>
                        <Image src={cat} alt=""></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutDetails;