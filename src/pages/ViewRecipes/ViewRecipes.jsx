import React from 'react';
import { useLoaderData } from 'react-router-dom';
import banner from '../../assets/banner.avif'
import CardRecipe from '../singleComponents/CardRecipe';

const ViewRecipes = () => {
    const recipeData = useLoaderData();
    console.log(recipeData);
    const { chef_name, chef_picture, years_of_experience, num_of_recipes, description, recipes } = recipeData;
    return (
        <div className="relative w-full bg-no-repeat bg-cover bg-blend-overlay bg-center">
            <img className='w-full h-[50vh]' src={banner} alt="" />
            <div className='absolute top-0 bg-black w-full h-[50vh] bg-opacity-50'>
                <h1 className='text-center text-white font-semibold text-3xl pt-28 md:pt-40'>View Details of <span className='primary-color text-yellow-300'>{chef_name}
                </span></h1>
            </div>
            <div className='flex container gap-5'>
                <div>
                    <img className='w-full' src={chef_picture} alt="" />
                </div>
                <div className='mt-10'>
                    <h2 className='text-2xl font-medium'>Name: {chef_name}</h2>
                    <p className='text-[18px] font-medium'>years of experience: {years_of_experience}</p>
                    <p className='text-[18px] font-medium'>num of recipes: {num_of_recipes}</p>
                    <p className='text-[16px] font-medium'>description: {description}</p>
                </div>
            </div>
            <div className='mt-8 mb-8'>
                <h1 className='text-3xl font-bold font-serif text-center'>Recipes preview of <span className='text-orange-500'>{chef_name}</span></h1>
                <div className='w-[35%] mx-auto bg-[#E25111] my-3 h-[2px]'></div>
                <div className='grid lg:grid-cols-6 items-center container'>
                    <div>
                        <h2>Recipe Picture</h2> 
                       
                    </div>
                    <div>
                        <h2>Recipe Name</h2>
                    </div>
                    <div>
                        <h2>Cooking Methods</h2>
                    </div>
                    <dir>
                        <h2>Ingredients</h2>
                    </dir>
                    <div>
                        <h2>Rating</h2>
                    </div>
                    <div>
                        <h2>Add to Favorite</h2>
                    </div>
                    
                </div>
                <div className='container'>
                        {
                           recipes?.map((cardRecipe, index) => <CardRecipe
                              key={index}
                              cardRecipe={cardRecipe}
                              index={index+1}
                           ></CardRecipe>)
                        }
                    </div>
            </div>
        </div>

    );
};

export default ViewRecipes;