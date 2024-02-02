import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../data/CartContext';
import CartIcon from '../../assets/shoppingCart.svg'
import deleteIcon from '../../assets/delete.png';


const Cart = ({ cartItems, onCheckout }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const { state, dispatch } = useCart();
    const location = useLocation();

    useEffect(() => {
        // Close the dropdown when navigating to the checkout page
        if (location.pathname === '/checkout') {
          setShowDropdown(false);
        }
      }, [location.pathname]);
    
    const toggleDropdown = () => {
        setShowDropdown((prev) => !prev);
    };

    const removeFromCart = (productId) => {
        console.log('Current State:', state);
        dispatch({ type: 'REMOVE_FROM_CART', payload: { productId } });
        console.log('Updated State:', state);
      };

    return (
        <div className="relative">
            <span className="relative" onClick={toggleDropdown}>
                <img src={CartIcon} alt="Cart" />
                {state.cartItems.length > 0 && (
                    <span className="bg-black flex items-center justify-center text-white rounded-full text-[0.5rem] w-4 h-4 absolute -top-1 -right-1">
                        {state.cartItems.length}
                    </span>
                )}
            </span>
            {showDropdown && (
                <div className="absolute top-10 -right-20 mt-4 bg-white shadow-md p-6 w-52 text-sm text-left rounded z-50">
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                                <div key={item.id} className="flex items-end justify-between gap-x-8 mb-4">
                                    <span className='text-xs'>{item.name}</span>
                                    {/* <span className='text-xs'>${item.price}</span> */}
                                    <div>
                                        <span className='text-xs'>${item.price}</span>
                                        <img src={deleteIcon} alt="" className='w-3 ml-4 cursor-pointer' 
                                    onClick={() => removeFromCart(item.id)}/>
                                    </div>
                                    {/* <button
                                    className="text-red-500 underline"
                                    onClick={() => removeFromCart(item.id)}
                                    >
                                    <img src={deleteIcon} alt="" />
                                    </button> */}
                                </div>
                        ))
                    ) : (
                        <p className='py-3'>Your cart is empty.</p>
                    )}
                    <Link to="/checkout" className="bg-black text-white py-3 rounded-lg block px-6">
                        Go to Checkout
                    </Link>
                </div>
            )}
        </div>

    );
};

export default Cart;
