import React from 'react';

const Card = ({card}) => {
    const {strMeal,strCategory,strArea,strMealThumb} = card
    return (
        <div className='mb-5 bg-gray-300 ml-5 mt-5 flex mr-5'>
             <img className='w-[150px] h-[100%] ml-[-7px]' src={strMealThumb} alt="img" />
             <div className='mt-5 ml-5'>
            <h1>Name: {strMeal} </h1>
            <p>Category: {strCategory}</p>
            <p>Country: {strArea}</p>
            <div className='flex'>
            <button className='bg-gray-800 text-white sm:mt-3 sm:ml-32 px-3 rounded-full py-2'>Purchase</button>
            </div>
        </div>
        </div>
    );
};

export default Card;