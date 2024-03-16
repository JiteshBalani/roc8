
const Navbar = () => {

    const arrowLeft = '<';
    const arrowRight = '>';

    return (
        <div className='flex-col'>
            <div className="py-5 space-y-2">
                <div className='helpOrderHi text-md flex self-end justify-end px-8 gap-4 '>
                    <div>Help</div>
                    <div>Orders & Returns</div>
                    <div>Hi, John</div>
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

            <div className="flex justify-center items-center gap-4 bg-gray-100 text-center">
                <div className="text-center text-lg font-semibold">{arrowLeft}</div>
                <div className="font-semibold">Get 10% off on business sign up</div>
                <div className="text-center text-lg font-semibold">{arrowRight}</div>
            </div>

        </div>
    )
}

export default Navbar