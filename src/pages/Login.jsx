import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='flex justify-center h-[100vh] mt-10'>

            <div className='w-[576px] h-[614px] flex-col justify-center border-gray-200 border-[1px] rounded-lg px-10 py-5 space-y-2'>

                <div className='text-3xl font-bold w-full text-center pb-3'>Login</div>

                <div className='font-semibold w-full text-center mb[-50px]'>Welcome back to ECOMMERCE</div>
                <div className='w-full text-center'>The next gen business marketplace</div>

                <div className='flex-col justify-center items-center space-y-4 pt-5'>


                    <div>
                        <label className='text-lg'>Email</label>
                        <input type='text'
                            placeholder='Type your email'
                            className='p-2 bg-transparent border-[1px] rounded-md w-full'
                        />
                    </div>

                    <div>
                        <label className='text-lg'>Password</label>
                        <input type='text'
                            placeholder='Enter a strong password'
                            className='p-2 bg-transparent border-[1px] rounded-md w-full'
                        />
                    </div>

                    <button className='bg-black text-white p-2 text-md rounded-md w-full font-thin pt-2'>LOGIN</button><br />
                </div>

                <div className='text-center pt-3'>Don't have an account? 
                    <Link to='/signup'><span className='font-semibold'> SIGN UP</span></Link>
                </div>
            </div>

        </div>
    )
}

export default Login