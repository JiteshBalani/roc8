import React, { useState } from 'react'
import { doSignInWithEmailAndPassword, doCreateUserWithEmailAndPassword } from '../utils/auth';
import { useAuth } from '../utils/AuthContext';
import { Navigate } from 'react-router-dom';

const Login = () => {

    const  { userLoggedIn }  = useAuth();

    const [email, setEmail] = useState('');
    const [signIn, setSignIn] = useState(true);
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleSignIn = () => {
        setSignIn(!signIn);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if(!signIn) {
            setSignIn(true);
            await doSignInWithEmailAndPassword(email, password)
        }
    }

    return (
        <>
        {userLoggedIn && (<Navigate to={'/protected'} replace={true}/>)}
        <div className='flex justify-center h-[100vh] mt-10'>

            <div className='w-[576px] h-[614px] flex-col justify-center border-gray-200 border-[1px] rounded-lg px-10 pt-5 space-y-2'>

                <div className='text-3xl font-bold w-full text-center pb-2'>{!signIn ? 'Create your account' : 'Login'}</div>

                {signIn ?
                    <>
                        <div className='font-bold w-full text-center text-xl'>Welcome back to ECOMMERCE</div>
                        <div className='w-full text-center'>The next gen business marketplace</div>
                    </> : ''}

                <div className='flex-col justify-center items-center space-y-4 py-8 mb-10'>

                    {!signIn ?
                        <div className=''>
                            <label className='text-lg'>Name</label>
                            <input type='text'
                                placeholder='Type your name'
                                className='p-2 bg-transparent border-[1px] rounded-md w-full'
                            />
                        </div> :
                        ''
                    }

                    <div>
                        <label className='text-lg'>Email</label>
                        <input type='email'
                            placeholder='Type your email'
                            className='p-2 bg-transparent border-[1px] rounded-md w-full'
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className='text-lg'>Password</label>
                        <div className='flex justify-between p-2 bg-transparent border-[1px] rounded-md w-full'>
                            <input type={passwordVisible ? 'text' : 'password'}
                                placeholder='Type your password'
                                className='outline-none w-full'
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {password.length !== 0 ? <span
                                className='cursor-pointer w-fit underline underline-offset-2 border-black'
                                onClick={togglePasswordVisibility}>
                                {passwordVisible ? 'Hide' : 'Show'}
                            </span> : ''}
                        </div>
                    </div>
                </div>

                {signIn ?

                    <div onClick={onSubmit} className='border-b-2 border-gray-300 pb-6'>
                        <button className='bg-black text-white p-2 text-lg rounded-md w-full font-thin mb-1 '>LOGIN</button>
                    </div> :
                    <div className=' pb-6'>
                        <button className='bg-black text-white p-2 text-lg rounded-md w-full font-thin mb-1 '>CREATE ACCOUNT</button>
                    </div>
                }

                {signIn ?
                    <div onClick={toggleSignIn} className='text-center pt-3 cursor-pointer'>Don't have an account?
                        <span className='font-semibold'> SIGN UP</span>
                    </div> :
                    <div onClick={toggleSignIn} className='text-center pt-3 cursor-pointer'>Have an account?
                        <span className='font-semibold'> LOGIN</span>
                    </div>
                }

            </div>

        </div>
        </>
    )
}

export default Login