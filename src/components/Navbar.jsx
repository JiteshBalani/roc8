import React, { useState } from 'react';
import { useAuth } from '../utils/AuthContext';
import { doSignOut } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const { currentUser } = useAuth();
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const history = useNavigate();

    const arrowLeft = '<';
    const arrowRight = '>';

    const handleLogout = async () => {
        try {
            await doSignOut();
            toggleLogoutModal();
            history('/');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    const toggleLogoutModal = () => {
        setShowLogoutModal(!showLogoutModal);
    };

    return (
        <div className='flex-col'>
            <div className="py-5 space-y-2">
                <div className='helpOrderHi text-md flex self-end justify-end px-8 gap-4 '>
                    <div>Help</div>
                    <div>Orders & Returns</div>
                    {currentUser && (
                        <div className='cursor-pointer' onClick={toggleLogoutModal}>
                            Hi, {currentUser.displayName || 'User'}
                        </div>
                    )}
                </div>

                <div className='flex justify-between items-center px-8'>
                    <div className='font-black text-4xl'>
                        <div>ECOMMERCE</div>
                    </div>
                    <div className='flex justify-around items-center gap-10 font-bold text-lg'>
                        <div>Categories</div>
                        <div>Sale</div>
                        <div>Clearance</div>
                        <div>New Stock</div>
                        <div>Trending</div>
                    </div>
                    <div className="flex gap-10 ">
                        <button>
                            <img
                                className="w-6 h-6"
                                src="https://cdn-icons-png.flaticon.com/512/482/482631.png"
                                alt="search" />
                        </button>
                        <button>
                            <img
                                className="w-8 h-8"
                                src="https://static.vecteezy.com/system/resources/previews/027/381/351/original/shopping-cart-icon-shopping-trolley-icon-shopping-cart-logo-container-for-goods-and-products-economics-symbol-design-elements-basket-symbol-silhouette-retail-design-elements-vector.jpg"
                                alt="cart"
                            />
                        </button>
                    </div>
                </div>
            </div>

            {showLogoutModal && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-6 rounded-lg'>
                        <h2 className='text-lg font-bold mb-4'>Logout</h2>
                        <p>Are you sure you want to logout?</p>
                        <div className='mt-4 flex justify-end space-x-2'>
                            <button
                                className='px-4 py-2 bg-gray-200 rounded-md'
                                onClick={toggleLogoutModal}
                            >
                                Cancel
                            </button>
                            <button
                                className='px-4 py-2 bg-red-500 text-white rounded-md'
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex justify-center items-center gap-4 bg-gray-100 text-center">
                <div className="text-center text-lg font-semibold">{arrowLeft}</div>
                <div className="font-semibold">Get 10% off on business sign up</div>
                <div className="text-center text-lg font-semibold">{arrowRight}</div>
            </div>

        </div>
    )
}

export default Navbar