import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div className='flex justify-center h-[100vh] mt-10'>

            <div className='w-[576px] h-[691px] border-gray-200 border-[1px] rounded-xl px-10 py-5 space-y-4'>

                <h1 className='text-3xl font-bold w-full text-center'>Create your account</h1>

                <div className='flex-col justify-center items-center space-y-4'>

                    <div>
                        <label className='text-lg'>Name</label>
                        <input type='text'
                            placeholder='Type your name'
                            className='p-2 bg-transparent border-[1px] rounded-md w-full'
                        />
                    </div>

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

                    <button className='bg-black text-white p-2 text-md rounded-md w-full font-thin'>CREATE ACCOUNT</button><br />
                </div>

                <div className='text-center pt-3'>Have an account?
                    <Link to='/login'><span className='font-semibold'>LOGIN</span></Link>
                </div>
            </div>

        </div>
    )
}

export default Signup