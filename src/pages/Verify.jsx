import React from 'react'

const Verify = () => {
    return (
        <div className='flex justify-center h-[100vh] mt-10'>

            <div className='w-[576px] h-[453px] border-gray-200 border-2 px-10 py-5 rounded-xl flex-col space-y-5'>
                <div className='text-3xl text-center font-bold'> Verify your email </div>

                <div className='text-center'>Enter the 8 digits you have recieved on </div>
                <div className='font-semibold text-center'>swa**@gmail.com</div>

                <div>Code</div>
                <div className='flex space-x-2 justify-center items-center'>
                    <input type='number' maxLength={1}
                        className='border-gray-200 border-2 text-xl text-center rounded-md w-[46px] h-[48px]'
                    />
                    <input type='number' maxLength={1}
                        className='border-gray-200 border-2 text-xl text-center rounded-md w-[46px] h-[48px]'
                    />
                    <input type='number' maxLength={1}
                        className='border-gray-200 border-2 text-xl text-center rounded-md w-[46px] h-[48px]'
                    />
                    <input type='number' maxLength={1}
                        className='border-gray-200 border-2 text-xl text-center rounded-md w-[46px] h-[48px]'
                    />
                    <input type='number' maxLength={1}
                        className='border-gray-200 border-2 text-xl text-center rounded-md w-[46px] h-[48px]'
                    />
                    <input type='number' maxLength={1}
                        className='border-gray-200 border-2 text-xl text-center rounded-md w-[46px] h-[48px]'
                    />
                    <input type='number' maxLength={1}
                        className='border-gray-200 border-2 text-xl  text-center rounded-md w-[46px] h-[48px]'
                    />
                    <input type='number' maxLength={1}
                        className='border-gray-200 border-2 text-xl text-center rounded-md w-[46px] h-[48px]'
                    />
                </div>

                <button className='bg-black text-white p-2 text-md rounded-md w-full font-thin'>VERIFY</button>
            </div>
        </div>
    )
}

export default Verify