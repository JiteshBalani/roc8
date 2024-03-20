import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Verify = ({email}) => {

    const [inputValues, setInputValues] = useState(['', '', '', '', '', '', '', '']);
    const history = useNavigate();

    const handleInputChange = (index, value) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);

        // Move focus to the next input field if the current one is filled
        if (value && index < inputValues.length - 1) {
            const nextInput = document.querySelectorAll('input')[index + 1];
            nextInput.focus();
        }
    };

    const handleVerify = () => {
        const enteredCode = inputValues.join('');

        // Perform your verification logic here
        // For example, you can check if the entered code matches a specific value
        if (/^\d{8}$/.test(enteredCode)) {
            // Redirect to '/protected' route
            history('/protected');
        } else {
            // Display an error message or handle invalid code
            alert('Invalid code entered');
        }
    };

    const maskedEmail = email
        ? `${email.slice(0, 3)}**@${email.split('@')[1]}`
        : '';

    return (
        <div className='flex justify-center h-[100vh] mt-10'>
            <div className='w-[576px] h-[453px] border-gray-200 border-2 px-12 pt-5 rounded-xl flex-col space-y-5'>
                <div className='text-3xl text-center font-bold'> Verify your email </div>

                <div className='space-x-0'>
                    <div className='text-center'>Enter the 8 digits you have received on </div>
                    <div className='font-semibold text-center'>your email</div>
                </div>

                <div className='flex-col justify-center items-center pb-10 space-y-4'>
                    <div className='pl-2 text-lg font-semibold'>Code</div>

                    <div className='flex space-x-4 justify-center items-center w-full'>
                        {inputValues.map((value, index) => (
                            <input
                                key={index}
                                type='number'
                                maxLength={1}
                                value={value}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                className='border-gray-200 border-2 text-xl text-center rounded-md w-[46px] h-[48px]'
                            />
                        ))}
                    </div>
                </div>

                <button
                    onClick={handleVerify}
                    className='bg-black text-white p-2 text-md rounded-md w-full font-thin'
                >
                    VERIFY
                </button>
            </div>
        </div>
    );
};

export default Verify;
   