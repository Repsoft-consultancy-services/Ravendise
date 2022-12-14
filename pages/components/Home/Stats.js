import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {
    return (
        <div className='w-full bg-black my-10 text-white'>
            <div className="flex justify-center">
                <div className='grid grid-cols-3 gap-5 text-center'>
                    <div className='p-3 lg:p-10'>
                        <h1 className='text-xl lg:text-5xl font-bold'><CountUp enableScrollSpy={true} end={50} />+</h1>
                        <p className='text-[10px] lg:text-base mt-4'>Games Tested</p>
                    </div>
                    <div className='p-3 lg:p-10'>
                        <h1 className='text-xl lg:text-5xl font-bold'><CountUp enableScrollSpy={true} end={50} />+</h1>
                        <p className='text-[10px] lg:text-base mt-4'>Happy Clients</p>
                    </div>
                    <div className='p-3 lg:p-10'>
                        <h1 className='text-xl lg:text-5xl font-bold'><CountUp enableScrollSpy={true} end={50} />+</h1>
                        <p className='text-[10px] lg:text-base mt-4'>Career Game Testers</p>
                    </div>
                    <div className='px-3 lg:px-10 pb-3 lg:pb-10'>
                        <h1 className='text-xl lg:text-5xl font-bold'><CountUp enableScrollSpy={true} end={50} />+</h1>
                        <p className='text-[10px] lg:text-base mt-4'>Gaming Events</p>
                    </div>
                    <div className='px-3 lg:px-10 pb-3 lg:pb-10'>
                        <h1 className='text-xl lg:text-5xl font-bold'><CountUp enableScrollSpy={true} end={4} />+</h1>
                        <p className='text-[10px] lg:text-base mt-4'>Years In Industry</p>
                    </div>
                    <div className='px-3 lg:px-10 pb-3 lg:pb-10'>
                        <h1 className='text-xl lg:text-5xl font-bold'><CountUp enableScrollSpy={true} end={50} />K+</h1>
                        <p className='text-[10px] lg:text-base mt-4'>Testing Hours</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Stats;