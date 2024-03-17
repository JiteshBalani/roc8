import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className='flex justify-center h-[100vh] mt-10'>

            <div className='w-[576px] h-[614px] flex-col justify-center border-gray-200 border-[1px] rounded-lg px-10 pt-5 space-y-2'>

                <div className='text-3xl font-bold w-full text-center pb-2'>Login</div>

                <div className='font-bold w-full text-center text-xl'>Welcome back to ECOMMERCE</div>
                <div className='w-full text-center'>The next gen business marketplace</div>

                <div className='flex-col justify-center items-center space-y-4 py-8 mb-10'>


                    <div>
                        <label className='text-lg'>Email</label>
                        <input type='text'
                            placeholder='Type your email'
                            className='p-2 bg-transparent border-[1px] rounded-md w-full'
                        />
                    </div>

                    <div>
                        <label className='text-lg'>Password</label>
                        <div className='flex justify-between p-2 bg-transparent border-[1px] rounded-md w-full'>
                            <input type={passwordVisible ? 'text' : 'password'}
                                placeholder='Type your password'
                                className='outline-none w-full'
                                value={password}
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

                <div className='border-b-2 border-gray-300 pb-6'>
                    <button className='bg-black text-white p-2 text-lg rounded-md w-full font-thin mb-1 '>LOGIN</button>
                </div>
                <div className='text-center pt-3'>Don't have an account?
                    <Link to='/signup'><span className='font-semibold'> SIGN UP</span></Link>
                </div>
            </div>

        </div>
    )
}

export default Login