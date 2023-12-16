import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { img, title, description } = category;
    return (
        <div className='shadow-xl p-4 border rounded-md overflow-hidden'>
            <img className='rounded-md w-full blur-[1px] hover:blur-0 hover:scale-[1.05] duration-200 object-cover origin-center' src={img} alt="" />
            <div>
                <h2 className='text-center text-xl font-semibold mt-3'>{title}</h2>
                <p className='text-center'>{description}</p>
                <Link>
                    <button className="btn btn-warning mx-auto block mt-4">Click Here</button>
                </Link>
            </div>
        </div>

    );
};

export default CategoryCard;