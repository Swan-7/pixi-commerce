import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Exclusive.png';
import send from '../../assets/send.svg';
import qrCode from '../../assets/QrCode.png';
import GooglePlay from '../../assets/GooglePlay.png';
import AppStore from '../../assets/AppStore.png';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';

const Footer = () => {
    const [email, setEmail] = useState('');
    const currentYear = new Date().getFullYear();

    const handleSubscribe = () => {
        // Add your logic for handling the subscription, e.g., sending data to a server
        console.log(`Subscribed with email: ${email}`);
        // Reset the email input
        setEmail('');
    };

    return (
        <footer>
            <div className="bg-black w-full text-gray-300 pb-12 pt-16 px-36 text-left gap-x-2">

            <div className="container mx-auto flex justify-between gap-4">
                {/* Download App Section */}
                <div className="">
                    <div className="flex flex-col mb-4">
                        {/* Your Logo */}
                        <Link to="/">
                            <img
                                src={Logo}
                                alt="Logo"
                                className="w-24 mb-4"
                            />
                        </Link>
                        <div className="flex flex-col gap-y-4 text-left">
                            <h2 className="text-md font-medium">Subscribe</h2>
                            <p className='text-sm'>Get 10% off your first order</p>
                        </div>
                    </div>
                    <div className="flex items-center relative">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mr-2 p-2 pr-4 outline text-sm outline-white bg-black placeholder:text-gray-600 rounded"
                        />
                        <img src={send} alt="" className="w-5 h-5 right-2 mr-4 absolute cursor-pointer" onClick={handleSubscribe} />
                    </div>
                </div>

                {/* Support Section */}
                <div className='w-44 ml-12'>
                    <h2 className="text-md mb-4 font-semibold">Support</h2>
                    <div className="flex flex-col gap-4">
                        <p className='text-sm'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                        <p className='text-sm'>exclusive@gmail.com</p>
                        <p className='text-sm'>+88015-88888-9999</p>
                    </div>
                </div>

                {/* Account Section */}
                <div className='ml-6'>
                    <h2 className="text-md mb-4 font-semibold">Account</h2>
                    <Link to="/product" className="block border-b-white py-1.5 text-sm hover:transform hover:-translate-y-0.5 transition-transform hover:text-white max-w-max duration-300">
                        My Account
                    </Link>
                    <Link to="/product" className="block border-b-white py-1.5 text-sm hover:transform hover:-translate-y-0.5 transition-transform hover:text-white max-w-max duration-300">
                        Login / Register
                    </Link>
                    <Link to="/product" className="block border-b-white py-1.5 text-sm hover:transform hover:-translate-y-0.5 transition-transform hover:text-white max-w-max duration-300">
                        Cart
                    </Link>
                    <Link to="/product" className="block border-b-white py-1.5 text-sm hover:transform hover:-translate-y-0.5 transition-transform hover:text-white max-w-max duration-300">
                        Wishlist
                    </Link>
                    <Link to="/product" className="block border-b-white py-1.5 text-sm hover:transform hover:-translate-y-0.5 transition-transform hover:text-white max-w-max duration-300">
                        Shop
                    </Link>
                </div>

                {/* Quick Links Section */}
                <div className='ml-10'>
                    <h2 className="text-md mb-4 font-semibold">Quick Link</h2>
                    <Link to="/product" className="block border-b-white py-1.5 text-sm hover:transform hover:-translate-y-0.5 transition-transform hover:text-white max-w-max duration-300">
                        Privacy Policy
                    </Link>
                    <Link to="/product" className="block border-b-white py-1.5 text-sm hover:transform hover:-translate-y-0.5 transition-transform hover:text-white max-w-max duration-300">
                        Terms Of Use
                    </Link>
                    <Link to="/product" className="block border-b-white py-1.5 text-sm hover:transform hover:-translate-y-0.5 transition-transform hover:text-white max-w-max duration-300">
                        FAQ
                    </Link>
                    <Link to="/product" className="block border-b-white py-1.5 text-sm hover:transform hover:-translate-y-0.5 transition-transform hover:text-white max-w-max duration-300">
                        Contact
                    </Link>
                </div>

                {/* Download App Section */}
                <div className="flex flex-col gap-1.5 ml-12">
                    <h2 className="text-md mb-4 font-semibold">Download App</h2>
                    <p className="text-[0.6rem] font-thin">Save $3 with App New User Only</p>
                    {/* Google Play Buttons */}
                    <div className="flex items-center">
                        {/* QR Code */}
                        <img src={qrCode} alt="QR Code" className="mr-2 w-1/3 cursor-pointer" />
                        <div>
                            <img src={GooglePlay} alt="Google Play Button 1" className="w-24 cursor-pointer" />
                            <img src={AppStore} alt="Google Play Button 2" className="w-24 cursor-pointer" />
                        </div>
                    </div>
                    <div className="flex justify-between w-3/4 mt-3">
                        <img src={facebook} alt="" className='w-5 cursor-pointer' />
                        <img src={twitter} alt="" className='w-5 cursor-pointer' />
                        <img src={instagram} alt="" className='w-5 cursor-pointer' />
                        <img src={linkedin} alt="" className='w-5 cursor-pointer' />
                    </div>
                </div>
            </div>
            <a href="https://www.flaticon.com/free-icons/delete" title="delete icons" className='text-gray-600 text-xs mx-auto bg-black'>Delete icons created by feen - Flaticon</a>
            <div className='text-center text-xs mt-12 text-gray-700'>
                <p>&copy; {currentYear} Your Company Name. All rights reserved.</p>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
