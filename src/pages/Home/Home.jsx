import React, { useEffect, useState } from 'react';
import CategoryCard from '../singleComponents/CategoryCard';
import Banner from './Banner';
import Chef from '../chef/Chef';
import banner1 from '../../assets/banner.avif'
import { useNavigation } from 'react-router-dom';
import Loading from '../shared/Loading';
import useTitle from '../../hooks/useTitle';
const Home = () => {
    useTitle('Home');
    const [categories, setCategories] = useState([])
    const [recipes, setRecipes] = useState([])
    const navigation = useNavigation()
    if(navigation.state === 'loading') {
        return (
             <Loading></Loading>
        )
    }

    useEffect(() => {
        fetch('https://nice-pear-goldfish-cap.cyclic.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        fetch('https://nice-pear-goldfish-cap.cyclic.app/chef')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(error => console.log(error))
    })

    return (
        <div>
            {/* banner section */}
            <Banner></Banner>

            {/* Recipe Categories  */}
            <div className='mt-8 mb-8'>
                <h1 className='text-center text-3xl font-medium font-mono mb-2'>Recipe Categories</h1>
                <div className='w-[20%] mx-auto bg-[#E25111] mb-2 h-[2px]'></div>
                {
                   recipes.length === 0 ?
                   <Loading/> : '' 
                }
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 container'>
                    {
                        categories.map(category => <CategoryCard
                            key={category.id}
                            category={category}
                        ></CategoryCard>)
                    }
                </div>
            </div>

            {/* Our chef */}
            <div>
                <h1 className='text-center text-3xl font-medium font-mono mb-2 '>Our Chef</h1>
                <div className='w-[12%] mx-auto bg-[#E25111] mb-2 h-[2px]'></div>
                {
                   recipes.length === 0 ?
                   <Loading/> : '' 
                }
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 container'>
                    {
                        recipes.map(recipe => <Chef
                            key={recipe.id}
                            recipe={recipe}
                        ></Chef>)
                    }
                </div>
            </div>

            {/* Baked Chicken Breast */}
            <div className='mt-8 mb-8 relative'>
                <img className='h-[60vh] w-full' src={banner1} alt="banner" />
                <div className='bg-black top-0 opacity-75 pt-20 w-full md:h-[100vh] 
                lg:h-[60vh] absolute  text-white text-center'>
                   <h3 className='text-4xl lg:text-6xl  font-semibold'>Baked Chicken Breast</h3>
                   <p>A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.</p>
                </div>
            </div>
            {/* footer ends */}

        </div>
    );
};

export default Home;