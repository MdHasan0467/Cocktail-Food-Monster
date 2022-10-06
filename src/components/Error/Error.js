import React from 'react';
import { NavLink, useRouteError } from 'react-router-dom';

const Error = () => {
    const errorShow = useRouteError();
    console.log(errorShow);
    return (
        <div>
        <h1 className='text-red-500 text-4xl mt-10 font-bold text-center'>404</h1>
            <h1 className='text-center mt-2'>This page not found</h1>
            <button className='bg-blue-400 text-gray-900 py-2 px-3 rounded-lg ml-[31%] sm:ml-[42%]  lg:ml-[45%] mb-5 sm:mb-0 mt-5'><NavLink to='/home'>Go back to home</NavLink></button>
            <br />
            {
                errorShow && (
                    <div>
                    <p className='text-yellow-300'>{errorShow.statusText || errorShow.message}</p>
                    <p>{errorShow?.status}</p>
                    </div>)
            }

            

            <p className='text-orange-400 text-right mr-20 text-4xl font-serif'>Food <span className='text-blue-600'>Monster</span></p>
        </div>
    );
};

export default Error;