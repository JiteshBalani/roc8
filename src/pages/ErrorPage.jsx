import React from 'react'
import Navbar from '../components/Navbar'

const ErrorPage = () => {
    return (
        <>
        <Navbar/>
        <div className='flex-col justify-center items-center space-y-10 h-[100vh] py-[10%]'>

            <div className='text-center text-6xl text-blue-700 font-semibold '>
                404: Not Found
            </div>

            <div className='text-center text-xl font-semibold'>
                Sorry, the page you are looking for does not exist.
            </div>
        </div>
        </>
    )
}

export default ErrorPage