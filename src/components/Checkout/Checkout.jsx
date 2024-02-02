import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useCart } from '../../data/CartContext';
import logo from '../../assets/checkoutLogo.svg'
import phone from '../../assets/phone.svg'
import back from '../../assets/back.svg'
import confirm from '../../assets/confirm.svg'
import user from '../../assets/user.svg'
import location from '../../assets/location.svg'
import creditcard from '../../assets/creditcard.svg'
import confirm2 from '../../assets/confirm2.svg'
import user2 from '../../assets/user2.svg'
import location2 from '../../assets/location2.svg'
import payment from '../../assets/payment2.svg'
import info from '../../assets/info.svg'
import toggleOn from '../../assets/toggleOn.svg'
import toggleOff from '../../assets/toggleOff.svg'
import check from '../../assets/check.svg'
import jacket from '../../assets/jacket.png'
import pad from '../../assets/pad.png'
import success from '../../assets/success.svg'
import share from '../../assets/share.svg'
import system from '../../assets/system.svg'
import camera from '../../assets/camera.svg'
import Product from '../Home/Product';
import products from '../../data/products';
import heart from '../../assets/smallHeart.svg';
import eye from '../../assets/visibility.svg';
import StarRating from '../Home/StarRating';

const Checkout = () => {
    const history = useHistory();
    const [showAddToCart, setShowAddToCart] = useState(false);
    const { state } = useCart();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentStep, setCurrentStep] = useState(1);
    const [displayedProducts, setDisplayedProducts] = useState(4);

    const handleCancel = () => {
        history.push('/');
    };

    const handleNext = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handleSubmit = () => {
        history.push('/thank-you');
    };

    const isEmailValid = (email) => {
        return true;
    };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        streetAddress: '',
        apartment: '',
        city: '',
        state: '',
        addressType: '',
        isDefault: false,
    });

    const sectionHeaders = [
        { step: 1, icon: user, inactiveIcon: user2, title: 'Personal Information', header: 'Add your Personal Information' },
        { step: 2, icon: location, inactiveIcon: location2, title: 'Shipping Address', header: 'Add new Address' },
        { step: 3, icon: creditcard, inactiveIcon: payment, title: 'Payment', header: 'Review Order and Payment' },
        { step: 4, icon: confirm, inactiveIcon: confirm2, title: 'Confirmation', header: '' },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddToCart = () => {
        dispatch({
          type: 'ADD_TO_CART',
          payload: {
            id: selectedProduct.id,
            name: selectedProduct.name,
            price: selectedProduct.price,
          },
        });
        alert(`Added ${selectedProduct.name} to cart!`);
      };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setShowAddToCart(true);
      };

    const handleRadioChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleToggleDefault = (e) => {
        e.preventDefault();
        setFormData((prevData) => ({
            ...prevData,
            isDefault: !prevData.isDefault,
        }));
    };

    const handleProductMouseLeave = () => {
        // Hide the "Add to Cart" button when the mouse leaves the product
        setShowAddToCart(false);
      };

    const handleContinueShopping = () => {
        history.push('/'); // Or your desired route for continue shopping
    };
    


    return (
        <div className="mt-8 bg-gray-100/50 text-left">
            {/* Header */}
            <div className="flex px-40 bg-white justify-between items-center p-4">
                <img src={logo} alt="Logo" className="w-24" />
                <div className="flex gap-4 text-xs font-semibold text-gray-600">
                    <p>Secure Checkout</p>
                    <div className="flex gap-2">
                        <img src={phone} alt="" />
                        <p>For assistance, call <span className='text-sm font-semibold'>800-1160210</span></p>
                    </div>
                </div>
            </div>
            <hr className='w-full' />

            {/* Back to Cart button */}
            <div className='w-full bg-white py-2'>
                <button onClick={handleCancel} className="flex bg-white justify-center items-center gap-3 ml-[9.5rem] text-gray-800 ">
                    <img src={back} alt="Back to Cart" className="w-6 h-6" />
                    <p className='text-sm'>Back to cart</p>
                </button>
            </div>
            <hr className='w-full' />

            {/* Checkout Steps */}
            <div className='bg-gray-100/50'>
                <div className={`max-w-6xl shadow-sm bg-white mx-auto mt-6 rounded-lg py-4 ${currentStep > 2 ? '' : 'px-8'}`}>
                    {/* Section Headers */}
                    <div className={`flex justify-between items-center mb-6 ${currentStep < 3 ? '' : 'px-8'}`}>
                        {sectionHeaders.map(({ step, icon, inactiveIcon, title },) => (
                            <div
                                key={step}
                                className={`flex gap-2 items-center ${currentStep === step
                                    ? 'text-red-400 font-medium'
                                    : 'text-gray-500 hover:text-gray-700 cursor-pointer'
                                    }`}
                                onClick={() => setCurrentStep(step)}
                            >
                                <img src={currentStep === step ? icon : inactiveIcon} alt="" />
                                <h2 className="text-sm font-medium">{title}</h2>
                            </div>
                        ))}
                    </div>

                    {/* Dynamic Section Content */}
                    {sectionHeaders.map(({ step }) => (
                        <div key={step} className={currentStep === step ? '' : 'hidden'}>
                            <h2 className={`text-md font-medium mb-4 ${currentStep > 2 ? 'ml-8' : ''}`}>{`${sectionHeaders.find((header) => header.step === currentStep)?.header
                                }`}</h2>
                            <hr className="w-[72rem] " />
                            <form onSubmit={handleSubmit} className={`text-xs ${currentStep > 2 && currentStep < 3 && currentStep !== 4 || currentStep === 1 ? 'w-4/5 mb-32 ' : 'mt-8'}`}>
                                {step < 3 && (
                                    <h2 className="text-xs text-gray-300 my-4">{`${sectionHeaders.find((header) => header.step === currentStep)?.title
                                        }`}
                                    </h2>
                                )}
                                {currentStep === 1 && (
                                    <div className='mt-3'>
                                        {/* Personal information form fields */}
                                        <div className="flex gap-6">
                                            <div className="mb-4 w-1/3 mr-8">
                                                <label htmlFor="firstName" className="hidden">
                                                    First Name <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    className="mt-1 p-4 w-80 rounded-md bg-gray-100/50 placeholder:font-semibold placeholder:text-slate-400/100"
                                                    placeholder="First Name *"
                                                    required
                                                />
                                            </div>

                                            <div className="mb-4 w-1/3 mr-8">
                                                <label htmlFor="lastName" className="hidden">
                                                    Last Name <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    className="mt-1 p-4 w-80 rounded-md bg-gray-100/50 placeholder:font-semibold placeholder:text-slate-400/100"
                                                    placeholder="Last Name *"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="flex gap-6">
                                            <div className="mb-4 w-1/3 mr-8">
                                                <label htmlFor="email" className="hidden">
                                                    Email <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="mt-1 p-4 w-80 rounded-md bg-gray-100/50 placeholder:font-semibold placeholder:text-slate-400/100"
                                                    placeholder="Email Address *"
                                                    required
                                                />
                                            </div>

                                            <div className="mb-4 w-1/3 mr-8">
                                                <label htmlFor="phone" className="hidden">
                                                    Phone <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="Phone"
                                                    name="Phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="mt-1 p-4 w-80 rounded-md bg-gray-100/50 placeholder:font-semibold placeholder:text-slate-400/100"
                                                    placeholder="Phone Number*"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="flex gap-6">
                                            <div className="mb-4 w-1/3 mr-8">
                                                <label htmlFor="password" className="hidden">
                                                    Password <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    className="mt-1 p-4 w-80 rounded-md bg-gray-100/50 placeholder:font-semibold placeholder:text-slate-400/100"
                                                    placeholder="Password *"
                                                    required
                                                />
                                            </div>

                                            <div className="mb-4 w-1/3 mr-8">
                                                <label htmlFor="confirmPassword" className="hidden">
                                                    Confirm Password <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="password"
                                                    id="confirmPassword"
                                                    name="confirmPassword"
                                                    value={formData.confirmPassword}
                                                    onChange={handleChange}
                                                    className="mt-1 p-4 w-80 rounded-md bg-gray-100/50 placeholder:font-semibold placeholder:text-slate-400/100"
                                                    placeholder="Confirm Password*"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {currentStep === 2 && (
                                    <div>
                                        {/* Shipping information form fields */}
                                        <div className="flex gap-6">
                                            <div className="mb-4 w-1/3 mr-8">
                                                <label htmlFor="streetAddress" className="hidden">
                                                    Street Address <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="streetAddress"
                                                    name="streetAddress"
                                                    value={formData.streetAddress}
                                                    onChange={handleChange}
                                                    className="mt-1 p-4 w-96 rounded-md bg-gray-100/50 placeholder:font-semibold placeholder:text-slate-400/100"
                                                    placeholder="Street Address*"
                                                    required
                                                />
                                            </div>

                                            <div className="mb-4 w-1/3 mr-8">
                                                <label htmlFor="apartment" className="hidden">
                                                    Apartment <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="apartment"
                                                    name="apartment"
                                                    value={formData.apartment}
                                                    onChange={handleChange}
                                                    className="mt-1 p-4 w-96 rounded-md bg-gray-100/50 placeholder:font-semibold placeholder:text-slate-400/100"
                                                    placeholder="Apartment, floor, etc. (optional)"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="flex gap-6">
                                            <div className="mb-4 w-1/3 mr-8">
                                                <label htmlFor="city" className="hidden">
                                                    City <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="city"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                    className="mt-1 p-4 w-96 rounded-md bg-gray-100/50 placeholder:font-semibold placeholder:text-slate-400/100"
                                                    placeholder="Town/City*"
                                                    required
                                                />
                                            </div>

                                            <div className="mb-4 w-1/3 mr-8">
                                                <label htmlFor="state" className="hidden">
                                                    state <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="state"
                                                    name="state"
                                                    value={formData.state}
                                                    onChange={handleChange}
                                                    className="mt-1 p-4 w-96 rounded-md bg-gray-100/50 placeholder:font-semibold placeholder:text-slate-400/100"
                                                    placeholder="State*"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="mb-4 w-1/3 mr-8 relative">
                                            <img src={location2} alt="" className='absolute top-5 left-2.5 w-4 h-4' />
                                            <label htmlFor="additionalAddress" className="hidden">
                                                additionalAddress <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="additionalAddress"
                                                name="additionalAddress"
                                                value={formData.additionalAddress}
                                                onChange={handleChange}
                                                className="mt-1 p-4 pl-8 w-[41.5rem] rounded-md bg-gray-100/50 placeholder:font-semibold placeholder:text-slate-400/100"
                                                placeholder="Additional Address"
                                                required
                                            />
                                        </div>

                                        <div className="flex justify-between w-3/4 ">
                                            <div className="flex items-center mt-2 p-4 rounded-md w-1/2 bg-gray-100/50 text-xs text-slate-400/100 font-semibold">
                                                <label className="text-xs mr-4">
                                                    Address Label (optional)
                                                </label>
                                                <div className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        id="home"
                                                        name="addressType"
                                                        value="home"
                                                        checked={formData.addressType === "home"}
                                                        onChange={handleRadioChange}
                                                        className={`mr-2 ${formData.addressType === 'home' ? 'border-orange-500' : ''}`}
                                                    />
                                                    <label htmlFor="home" className="mr-4">Home</label>

                                                    <input
                                                        type="radio"
                                                        id="work"
                                                        name="addressType"
                                                        value="work"
                                                        checked={formData.addressType === "work"}
                                                        onChange={handleRadioChange}
                                                        className="mr-2"
                                                    />
                                                    <label htmlFor="work">Work</label>
                                                </div>
                                            </div>

                                            {/* Toggle button for setting as default */}
                                            <div className="flex items-center mt-2">
                                                <label htmlFor="setDefault" className="text-xs font-semibold text-gray-600 mr-2">
                                                    Set as Default
                                                </label>
                                                <div className="flex items-center">
                                                    <button
                                                        onClick={handleToggleDefault}
                                                        className={`toggle-btn flex justify-items-end ${formData.isDefault ? 'active' : ''}`}
                                                    >{formData.isDefault ? (
                                                        <img src={toggleOn} alt="Default" className="" />
                                                    ) : (
                                                        <img src={toggleOff} alt="Not Default" className="w-20 h-8 -mr-8" />
                                                    )}
                                                    </button>
                                                </div>
                                                {/* <input
                                                type="checkbox"
                                                id="setDefault"
                                                name="setDefault"
                                                checked={formData.setDefault}
                                                onChange={(e) => setFormData({ ...formData, setDefault: e.target.checked })}
                                                className="p-2"
                                            /> */}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {currentStep === 3 && (
                                    <div>
                                        <div className="flex justify-between items-start">

                                            {/* Home Section and Review Order Section */}
                                            <div className="w-1/2">
                                                {/* Home Section */}
                                                <div className="mb-8 bg-gray-100/50">
                                                    <div className="flex justify-between items-center px-6 py-4 ml-2">
                                                        <h2 className="flex text-xs text-gray-700 font-semibold items-center ">
                                                            <img src={location2} alt="" className='mr-2 w-4' />Home</h2>
                                                        <p className="text-xs text-orange-700 font-semibold">Change Address</p>
                                                    </div>
                                                    <hr className='w-full' />
                                                    <div className="text-xs px-8 gap-y-4 flex flex-col mt-2 font-medium text-gray-700 pb-8">
                                                        <p><span className='text-gray-400'>Name: </span>John Doe</p>
                                                        <p><span className='text-gray-400'>Address: </span>39 Adeola Odeku Street, VI, Lagos State</p>
                                                        <p className='flex justify-between'>
                                                            <span>
                                                                <span className='text-gray-400'>Email: </span><span>sarahsarah@gmail.com</span></span>
                                                            {isEmailValid("sarahsarah@gmail.com") && <span className="text-green-500 font-normal flex items-center">
                                                                <img src={check} alt="" /> Verified</span>}
                                                        </p>
                                                        <p><span className='text-gray-400'>Phone: </span>+234 814 134 8080</p>
                                                    </div>
                                                </div>

                                                {/* Review Order Section */}
                                                <div className='px-8 bg-gray-100/50 pb-2 mb-32'>
                                                    <h2 className="text-xs text-gray-700 font-medium py-4 mb-4">Review your Order</h2>
                                                    {/* Product 1 Review */}
                                                    <div className="flex items-center mb-6">
                                                        <div className="w-16 h-16 rounded-md">
                                                            <img src={jacket} alt="" />
                                                        </div>
                                                        <div className="flex items-center justify-between justify-items-center w-80 ml-4">
                                                            <div>
                                                                <p className="text-xs font-medium"><p className='ext-[0.5rem] text-gray-400'>ADIDAS</p> Quilted Satin Jacket</p>
                                                                <p className="text-xs text-gray-500">This item cannot be changed or returned</p>
                                                            </div>
                                                            <div>
                                                                <p className="text-xs text-orange-700">$24.99</p>
                                                                <p className='ml-4 text-[0.6rem]'><span className="text-gray-300">QTY:</span>1</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <hr className='w-[28.7rem] -ml-8' />
                                                    {/* Product 2 Review */}
                                                    <div className="flex items-center my-6">
                                                        <div className="w-16 h-16 rounded-md">
                                                            <img src={pad} alt="" />
                                                        </div>
                                                        <div className="flex items-center justify-between justify-items-center w-80 ml-4">
                                                            <div>
                                                                <p className="text-xs font-medium"><p className='ext-[0.5rem] text-gray-400'>ADIDAS</p> GP1 Shooter USB Gamepad</p>
                                                                <p className="text-xs text-gray-500">This item cannot be changed or returned</p>
                                                            </div>
                                                            <div>
                                                                <p className="text-xs text-orange-700">$24.99</p>
                                                                <p className='ml-4 text-[0.6rem]'><span className="text-gray-300">QTY:</span>1</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Order Summary */}
                                            <div className="w-1/2 px-8 py-4">
                                                <h2 className="text-xs text-gray-700 font-semibold mb-4">Order Summary</h2>

                                                <div className="mt-8 text-xs font-medium text-gray-400">
                                                    <div className='gap-y-2 flex flex-col mb-2'>

                                                        <p className="flex justify-between">Subtotal: <span className='text-gray-800 '>$24.99</span></p>
                                                        <p className="flex justify-between">Shipping Fee:  <span className='text-green-500 '>Free</span></p>
                                                    </div>
                                                    <hr className='w-full'/>
                                                    <div className='gap-y-2 flex flex-col mt-2'>

                                                        <p className="flex justify-between">Total (Inclusive of VAT):  <span className='text-gray-800 '>$20</span></p>
                                                        <p className="flex justify-between">Estimated VAT:  <span className='text-gray-800 '>$39.99</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {currentStep === 4 && (
                                    <div>
                                        <div className='text-center text-gray-500 '>
                                            <img src={success} alt=""className='mx-auto' />
                                            <h3 className='font-medium mt-4 mb-6 '>Your order has been successfully registered.</h3>
                                            <p className='w-[27%] mx-auto mb-10 '>You’ll receive an email at <span className='text-orange-500'>sarahoshuu@gmail.com</span> once your order is confirmed</p>

                                                <button onClick={handleContinueShopping} className={`bg-red-500 text-xs text-white px-4 py-4 rounded-lg cursor-pointer`}>
                                                    Continue Shopping
                                                </button>
                                            <div className="mt-8 text-xs font-medium text-gray-400 w-2/5 bg-gray-100 mx-auto p-3 rounded-lg">
                                                <h2 className='text-left text-gray-800 mb-6'>Order Details</h2>
                                                    <div className='gap-y-2 flex flex-col mb-2 text-xs'>

                                                        <p className="flex justify-between font-medium">Order Number:  <span className='text-gray-800 '>#ORD - 202000000</span></p>
                                                        <p className="flex justify-between font-medium">Amount Paid: <span className='text-gray-800 '>$400</span></p>
                                                    </div>
                                            </div>
                                            <div className="flex items-center justify-center mx-auto max-w-lg my-4 gap-x-1">
                                                <button className="border border-transparent gap-x-2 font-medium cursor-pointer flex items-center justify-center hover:border-gray-600 focus:outline-none focus:border-gray-300 transition-all duration-300 text-xs text-gray-500 px-2 py-2 rounded-md">
                                                    <img src={share} alt="" className='w-4 h-4'/>
                                                    Share with friends
                                                </button>
                                                <span className="text-gray-300 mx-2">|</span>
                                                <button className="border border-transparent gap-x-2 font-medium cursor-pointer flex items-center justify-center hover:border-gray-600 focus:outline-none focus:border-gray-300 transition-all duration-300 text-xs text-gray-500 px-2 py-2 rounded-md">
                                                <img src={system} alt="" className='w-4 h-4'/>
                                                    Track Order
                                                </button>
                                                <span className="text-gray-300 mx-2">|</span>
                                                <button className="border border-transparent gap-x-2 font-medium cursor-pointer flex items-center justify-center hover:border-gray-600 focus:outline-none focus:border-gray-300 transition-all duration-300 text-xs text-gray-500 px-2 py-2 rounded-md">
                                                <img src={camera} alt="" className='w-4 h-4'/>
                                                    Take a Screenshot
                                                </button>
                                            </div>
                                            
                                            <div>
                                                <h2 className='text-left py-8 text-gray-900 text-sm font-md '>We think you might like these</h2>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
                                            {products.slice(0, displayedProducts).map((product) => (
                                                <div key={product.id} className="">
                                                <div className="relative flex items-center justify-center shadow-md bg-gray-100 h-64 max-w-72 duration-300"
                                                onMouseOver={() => handleProductClick(product)}
                                                onMouseLeave={handleProductMouseLeave}
                                                >
                                                  <img src={product.image} alt={product.name} className="object-cover" />
                                                    {product.isNew && (
                                                      <div className="bg-green-400 text-white py-1 px-2 text-xs rounded-sm absolute -left-[18.5rem] top-3">
                                                        NEW
                                                      </div>
                                                    )}
                                                  <div className="absolute flex flex-col gap-2 right-3 top-3">
                                                    <img src={heart} alt="" className='bg-white p-1 rounded-full' />
                                                    <img src={eye} alt="" className='bg-white p-1 py-[0.4rem] rounded-full' />
                                                  </div>
                                                  {showAddToCart && selectedProduct.id === product.id && (
                                                  <div className="absolute flex flex-col gap-2 w-[17rem] bottom-0">
                                                    <button className="bg-black text-white py-3 rounded-b-lg" onClick={handleAddToCart}>
                                                      Add to Cart
                                                    </button>
                                                    {/* <button className="bg-green-500 text-white px-2 py-1 rounded" onClick={handleCheckout}>
                                                      Checkout
                                                    </button> */}
                                                  </div>
                                                )}
                                                </div>
                                                <h3 className="text-lg text-start font-semibold mb-2 ">{product.name}</h3>
                                                <div className="flex gap-2">
                                                  <div className=''>
                                                  <p className="text-orange-600 font-medium">${product.price}</p>
                                                    {/* {product.discount && (
                                                    <p className="line-through text-gray-500 mt-2">
                                                        ${product.discount}
                                                    </p>
                                                    )} */}
                                                  </div>
                                                  <StarRating rating={product.rating} />
                                                  <p className="text-gray-500 font-medium">({product.quantity})</p>
                                                </div>
                                                {product.color && (
                                                  <div className="flex items-center gap-2">
                                                    <div className={`w-4 h-4 rounded-full bg-${product.color}-500`}></div>
                                                    <div className={`w-4 h-4 rounded-full bg-${product.color2}-500`}></div>
                                                  </div>
                                                )}
                                              </div>
                                             ))}
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </form>
                            <hr className="w-full" />
                        </div>
                    ))}



                   {/* Navigation Buttons */}
                    <div className={`flex justify-end mt-8 ${currentStep === 4 ? 'justify-center' : ''}`}>
                        {currentStep > 1 && currentStep < 4 && (
                            <button onClick={() => setCurrentStep((prevStep) => prevStep - 1)} className="text-slate-500 border hover:bg-slate-200 hover:text-white text-xs cursor-pointer px-12 py-4 rounded-lg mr-4">
                                Previous
                            </button>
                        )}

                        {currentStep === 1 && (
                            <button onClick={handleCancel} className="text-slate-500 border text-xs cursor-pointer px-12 py-4 rounded-lg mr-4">
                                Cancel
                            </button>
                        )}

                        {currentStep < 3 && (
                            <button onClick={handleNext} className={`bg-red-500 text-xs text-white px-12 py-4 rounded-lg cursor-pointer ${currentStep > 2 ? 'mr-8' : ''}`}>
                                Next
                            </button>
                        )}

                        {currentStep === 3 && (
                            <button onClick={handleNext} className={`bg-red-500 text-xs text-white px-12 py-4 rounded-lg cursor-pointer ${currentStep > 2 ? 'mr-8' : ''}`}>
                                Pay
                            </button>
                        )}

                    </div>

                </div>

                {/* Disclaimer */}
                {currentStep !== 4 && (
                    <div className="mt-8 p-4 bg-gray-200 text-xs w-2/3 xl:w-4/5 lg:w-full xl:w-[45%] rounded mx-auto flex items-center justify-center gap-2">
                    <img src={info} alt="" />
                    <p className="text-xs lg:text-[0.65rem]">
                        Our checkout is safe and secure. Your personal and payment information is securely transmitted via 128-bit encryption. We do not store any payment card information on our systems
                    </p>
                </div>
                )}
            </div>

            {/* Footer */}
            <div className="mt-8 p-4 bg-white text-gray-400 text-xs w-2/3 xl:w-4/5 lg:w-full xl:w-[45%] mx-auto">
                <div className="flex justify-between items-center">
                    {/* Links to terms of use, privacy policy, etc. */}
                    <div>
                        <a href="/terms" className="text-gray-400">
                            Terms of Use -
                        </a>
                        <a href="/privacy" className="ml-4 text-gray-400">
                            Privacy Policy -
                        </a>
                        <a href="/privacy" className="ml-4 text-gray-400">
                            Terms of Return
                        </a>
                    </div>

                    {/* Copyright */}
                    <p>&copy; 2024 Pixicommerce. All rights reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
