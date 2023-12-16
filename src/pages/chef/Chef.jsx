import React from 'react';
import { Link } from 'react-router-dom';
import { IoThumbsUpOutline } from "react-icons/io5";

const Chef = ({ recipe }) => {
    const { id, chef_name, chef_picture, years_of_experience, num_of_recipes, likes } = recipe
    return (
        <div className=' border p-3'>
            <div className='overflow-hidden'>
                <img className='hover:scale-[1.3] origin-center duration-150 rounded-md w-full ' src={chef_picture} alt="" />
            </div>
            <div className='mt-3'>
                <h3 className='text-[18px] font-semibold text-black'>Name: {chef_name}</h3>
                <h3 className='text-[15px] text-slate-600 font-medium'>years of experience: {years_of_experience}</h3>
                <h3 className='text-[15px] text-slate-600 font-medium'>num of recipes: {num_of_recipes}</h3>
                <div className='flex items-center mt-[2px] mb-4'>
                  <IoThumbsUpOutline className='text-[20px]'/>
                  <h3 className='ml-1 text-[15px]'>{likes}</h3>
                </div>  
                <Link to={`View_Recipe/${id}`} className='border-green-400 btn btn-outline btn-success'>
                    view all recipe
                </Link>
                
            </div>
        </div>
    );
};

export default Chef;