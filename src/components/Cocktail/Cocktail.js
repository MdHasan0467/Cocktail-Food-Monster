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
            <button className=' text-gray-800 border-slate-900 border-solid border-2 bg-slate-300 hover:bg-gray-800 hover:text-white sm:mt-3 sm:ml-5 mb-2 px-3 rounded-full py-2'>Buy Now</button>
            <button className=' text-gray-800 border-slate-900 border-solid border-2 bg-slate-300 hover:bg-gray-800 hover:text-white sm:mt-2 sm:ml-5 mb-2 px-5 rounded-full py-2'>Add Cart</button>
            </div>
        </div>
        </div>
    );
};

export default Cocktail;