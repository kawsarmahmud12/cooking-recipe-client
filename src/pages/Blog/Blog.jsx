import React, { createRef } from 'react';
import banner from '../../assets/banner.avif'
import { useNavigation } from 'react-router-dom';
import Loading from '../shared/Loading';
import Pdf from "react-to-pdf";
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle("Blog")
    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return (
            <Loading></Loading>
        )
    }
    const ref = createRef();
    return (
        <div>
            <img className='w-full h-[50vh]' src={banner} alt="" />
            <div className='absolute top-0 bg-black w-full h-[50vh] bg-opacity-50'>
                <h1 className='text-center text-white font-semibold text-3xl pt-28 md:pt-40'><span className='primary-color text-yellow-300'>Blog
                </span></h1>
            </div>
            {/* <div className='max-container mt-8 md:mt-14 text-right ' onClick={()=> toast.success('Blog content downloaded.')} >
                 <Pdf targetRef={ref} filename="blog_content.pdf">
                     {({ toPdf }) => <button className='px-2 py-1 bg-[#E25111] text-white font-semibold font-mono rounded hover:scale-95 duration-200' onClick={toPdf}>Download Content PDF</button>}
                 </Pdf>
            </div> */}
            <div className='container'>
                <div className='bg-[#dad5d5] p-12 rounded-md mb-4'>
                    <h1 className='text-2xl font-medium'>1. Tell us the differences between uncontrolled and controlled components.</h1>
                    <p className='text-[18px] '><span className='text-[20px] font-semibold'>Ans:</span> Controlled components refer to the components where the state and behaviors are controlled by Parent components while Uncontrolled components are the ones having control of their own state and manage the behaviors on themselves.</p>
                </div>
                <div className='bg-[#dad5d5] p-12 rounded-md mb-4'>
                    <h1 className='text-2xl font-medium'>2. How to validate React props using PropTypes.</h1>
                    <p className='text-[18px] '><span className='text-[20px] font-semibold'>Ans:</span> PropTypes is a built-in feature in React that allows validation of props passed to a component. To use PropTypes, first import the package, define the PropTypes for your component (including the type and whether it's required), and then use the defined PropTypes in your component. If a prop with an incorrect type is passed to a component, a warning will be displayed in the console. PropTypes help catch errors early in development and make debugging easier.</p>
                </div>
                <div className='bg-[#dad5d5] p-12 rounded-md mb-4'>
                    <h1 className='text-2xl font-medium'>3. Tell us the difference between nodejs and express js.</h1>
                    <p className='text-[18px] '><span className='text-[20px] font-semibold'>Ans:</span> Node.js is the underlying technology that allows JavaScript to be run on the server-side, while Express.js is a framework that provides a set of tools and features to simplify building web applications on top of Node.js.</p>
                </div>
                <div className='bg-[#dad5d5] p-12 rounded-md'>
                    <h1 className='text-2xl font-medium'>4. What is a custom hook, and why will you create a custom hook?</h1>
                    <p className='text-[18px] '><span className='text-[20px] font-semibold'>Ans:</span> Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;