import React from 'react';

const Cocktail = ({cocktail}) => {
    const {strDrinkThumb, strDrink, strCategory} =cocktail
    return (
        <div className='mb-5 bg-gray-300 ml-5 mt-5 flex mr-5'>
            <img className='w-[150px] h-[100%] ml-[-7px]' src={strDrinkThumb} alt="" />
            <div className='mt-5 ml-5'>
            <p>Name: {strDrink}</p>
            <p>Flavor: {strCategory}</p>
            <div className='flex mt-5'>
            <button className='bg-gray-800 text-white sm:mt-3 sm:ml-5 px-3 rounded-full py-2'>Purchase</button>
            <button className=' bg-gray-800 text-white sm:mt-3 sm:ml-5 px-3 rounded-full py-3'> Cart</button>
            </div>
        </div>
        </div>
    );
};

export default Cocktail;