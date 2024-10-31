import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const CoffeDetails = () => {
    const loderCoffe = useLoaderData()
    console.log(loderCoffe);
    return (
        <div className='mt-5'>
            <Link className='font-rachno flex gap-3 text-3xl items-center text-[#374151]' to='/'><FaArrowLeft></FaArrowLeft> Back To Home</Link>
            <div className='bg-[#F4F3F0] flex items-center justify-around p-5 my-5'>
                <img src="/11 1.png" alt="" className='w-[220px]' />
                <div>
                    <h3 className='text-3xl font-bold font-rachno my-3'>Niceties</h3>
                    <div className='text-xl font-raleway space-y-2'>
                        <p className='text-[#5C5B5B]'><span className='font-semibold text-[#1B1A1A]'>Name:</span> Americano Coffee</p>
                        <p className='text-[#5C5B5B]'><span className='font-semibold text-[#1B1A1A]'>Chef:</span> Americano Coffee</p>
                        <p className='text-[#5C5B5B]'><span className='font-semibold text-[#1B1A1A]'>Supplier:</span> Americano Coffee</p>
                        <p className='text-[#5C5B5B]'><span className='font-semibold text-[#1B1A1A]'>Taste:</span> Americano Coffee</p>
                        <p className='text-[#5C5B5B]'><span className='font-semibold text-[#1B1A1A]'>Category:</span> Americano Coffee</p>
                        <p className='text-[#5C5B5B]'><span className='font-semibold text-[#1B1A1A]'>Details:</span> Americano Coffee</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeDetails;