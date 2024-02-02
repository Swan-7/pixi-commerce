import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../data/CartContext.jsx';
import Logo from '../../assets/Logo.png';
import Favorite from '../../assets/favoriteIcon.svg'
import CartIcon from '../../assets/shoppingCart.svg'
import Cart from './Cart';

const Header = () => {
    const { state } = useCart();

    return (
        <>
            <div className="bg-black text-white p-4 mb-4 flex mx-0">
                <div className="flex mx-auto">
                    <p className='mr-8'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <span className='font-semibold underline'>ShopNow</span>
                </div>
                <div>English </div>
            </div>
            <header className="py-4 px-36 pb-4 border-b">
                <div className="container mx-auto flex items-center justify-between">
                    <Link to="/">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="w-28"
                        />
                    </Link>
                    <nav className="flex space-x-4">
                        <Link to="/">Home</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/about">About</Link>
                        <Link to="/signup">Sign Up</Link>
                    </nav>
                    <div className="flex items-center space-x-4">
                        {/* Search Bar */}
                        <input
                            type="text"
                            placeholder="Search..."
                            className="p-2 border border-gray-500 rounded"
                        />
                        {/* Favorite Icon */}
                        <span>
                            <img src={Favorite} alt="Favorite" />
                        </span>
                        <span>
                            {/* <img src={CartIcon} alt="Cart" /> */}
                        </span>
                        <Cart cartItems={state.cartItems} />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
