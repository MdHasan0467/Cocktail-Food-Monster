import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='bg-gray-400 py-4 text-gray-800 flex justify-between cursor-pointer'>
             <h2 className='lg:ml-6 lg:text-3xl bg-slate-300 py-2  rounded-full pl-3'>
             Food 
             <span className='bg-gray-800 text-white px-3 lg:py-1.5 py-2.5 rounded-full ml-2'>Monster</span></h2>

        <div className='lg:text-2xl sm:mr-6 mr-2 sm:mt-2'>
            <NavLink aria-label='Home' title='Home' className={({isActive}) => 
            isActive ?
            'sm:mr-6 py-2 sm:px-5 px-1 rounded-full text-white bg-gray-800'
            :
             'sm:mr-6 py-2 sm:px-5 px-1 rounded-full sm:bg-slate-300 text-black'} to='/home'>Home</NavLink>


            <NavLink aria-label='Meal' title='Meal' className={({isActive}) => 
            isActive ?
            'sm:mr-6 py-2 sm:px-5 px-1 rounded-full text-white bg-gray-800'
            :
             'sm:mr-6 py-2 sm:px-5 px-1 rounded-full sm:bg-slate-300 text-black'} to='/meal'>Meal</NavLink>


            <NavLink className={({isActive}) => 
            isActive ?
            'sm:mr-6 py-2 sm:px-5 px-1 rounded-full text-white bg-gray-800'
            :
             'sm:mr-6 py-2 sm:px-5 px-1 rounded-full sm:bg-slate-300 text-black'} aria-label='Cocktail' title='Cocktail' to='/cocktail'>Cocktail</NavLink>


            <NavLink className={({isActive}) => 
            isActive ?
            'sm:mr-6 py-2 sm:px-5 px-1 rounded-full text-white bg-gray-800'
            :
             'sm:mr-6 py-2 sm:px-5 px-1 rounded-full sm:bg-slate-300 text-black'} to='/about' aria-label='About Us' title='About Us'>About Us</NavLink>
            </div>
            </div>
        
    );
};

export default Navbar;