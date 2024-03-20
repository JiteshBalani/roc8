import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import { doCreateUserWithEmailAndPassword, doSendEmailVerification } from '../utils/auth';
import Verify from './Verify';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isVerificationSent, setIsVerificationSent] = useState(false);

    const { userLoggedIn } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        try {
            if (!isRegistering) {
                setIsRegistering(true);
                const userCredential = await doCreateUserWithEmailAndPassword(email, password);
                const user = userCredential.user;

                await doSendEmailVerification(user);
                setIsVerificationSent(true);
            }
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setErrorMessage('Email already in use. Please use a different email.');
            } else if (error.code === 'auth/weak-password') {
                setErrorMessage('Password is too weak. Please use a stronger password.');
            } else {
                setErrorMessage(error.message);
            }
        } finally {
            setIsRegistering(false);
        }
    };

    return (
        <div className='flex justify-center h-[100vh] mt-10'>
            {userLoggedIn && !isVerificationSent && <Navigate to={'/verify'} replace={true} />}
            {isVerificationSent && (
                <>
                    <Verify email={email} />
                    <div className='text-center'>
                        <p>A verification email has been sent to {email}.</p>
                        <p>Please check your inbox and verify your email address.</p>
                    </div>
                </>
            )}

            {!isVerificationSent && (
                <form onSubmit={handleSubmit} className='w-[576px] h-[691px] border-gray-200 border-[1px] rounded-xl px-10 py-5 space-y-6'>
                    <h1 className='text-3xl font-bold w-full text-center'>Create your account</h1>

                    <div className='flex-col justify-center items-center space-y-6'>
                        <div>
                            <label className='text-lg'>Name</label>
                            <input
                                type='text'
                                placeholder='Type your name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='p-2 bg-transparent border-[1px] rounded-md w-full'
                                required
                            />
                        </div>

                        <div>
                            <label className='text-lg'>Email</label>
                            <input
                                type='email'
                                placeholder='Type your email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='p-2 bg-transparent border-[1px] rounded-md w-full'
                                required
                            />
                        </div>

                        <div>
                            <label className='text-lg'>Password</label>
                            <input
                                type='password'
                                placeholder='Enter a strong password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='p-2 bg-transparent border-[1px] rounded-md w-full'
                                required
                                minLength={6}
                            />
                        </div>

                        {errorMessage && <span className='text-red-600 font-bold'>{errorMessage}</span>}

                        <div className='pt-6'>
                            <button
                                type='submit'
                                disabled={isRegistering}
                                className='bg-black text-white p-2 text-md rounded-md w-full font-thin cursor-pointer'
                            >
                                {isRegistering ? 'CREATING...' : 'CREATE ACCOUNT'}
                            </button>
                            <br />
                        </div>
                    </div>

                    <div className='text-center pt-3'>
                        Have an account?
                        <Link to='/'>
                            <span className='font-semibold'> LOGIN</span>
                        </Link>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Signup;