import React from 'react';
import Product from './Product';
import Carousel from './Carousel';
import Categories from './Caterogies';
import FeatureItem from './FeatureItem';
import truck from '../../assets/truck.svg'
import smallHeadphones from '../../assets/smallHeadphones.svg'
import shield from '../../assets/shield.svg'
import frame from '../../assets/Footer.png'
import Header from './Header';
import Footer from './Footer';

const Home = () => {

    return (
        <div>
        <Header/> 
            <div className="px-32">
            <Carousel />
            <Categories />
            <Product />
            <div className="flex justify-center mt-10 gap-28">
                <FeatureItem
                    icon={truck}
                    header="FREE AND FAST DELIVERY"
                    text="Free delivery for all orders over $140"
                />
                <FeatureItem
                    icon={smallHeadphones}
                    header="24/7 CUSTOMER SERVICE"
                    text="Friendly 24/7 customer support"
                />
                <FeatureItem
                    icon={shield}
                    header="MONEY BACK GUARANTEE"
                    text="We reurn money within 30 days"
                />
            </div>
        </div>
            {/* <img src={frame} alt="" className='mx-auto my-4'/> */}
            <Footer/>
        </div>
    );
};

export default Home;
