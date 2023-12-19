import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa6';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    useTitle('Login');
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        setError('');
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // password validation
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
        }
        else if (email === undefined) {
            setError('Email is required');
        }

        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }
    // sign in with google
    const handleSignInGoogle = event => {
        event.preventDefault();
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                setError(error);
            })
    }

    // sign in with github
    const handleSignInGithub = event => {
        event.preventDefault();
        signInWithGithub()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                setError(error);
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="mt-20 text-4xl lg:text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-lg">Login</button>
                        </div>
                        <div className='text-red-600 text-center'>
                            <p>{error}</p>
                        </div>
                        <div className='my-3 flex items-center justify-between'>
                            <hr className='w-[40%]' />
                            <p className='text-slate-500'>or</p>
                            <hr className='w-[40%]' />
                        </div>
                        <div className='flex mb-3 mx-auto mt-2'>
                            <button onClick={handleSignInGoogle} className="btn btn-outline btn-primary text-lg mr-3"><FaGoogle className='text-black' />Google</button>
                            <button onClick={handleSignInGithub} className="btn btn-outline btn-accent text-lg"><FaGithub className='text-black' />github</button>
                        </div>
                        <div className='mx-auto'>
                            Don't have an account? <NavLink className="underline text-success" to="/register">Register</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
