import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCart } from '../../data/CartContext';
import products from '../../data/products';
import categoryRectangle from '../../assets/categoryRectangle.svg';
import heart from '../../assets/smallHeart.svg';
import eye from '../../assets/visibility.svg';
import StarRating from './StarRating';
import loader from '../../assets/loader.png'
import filledHeart from '../../assets/filledHeart.svg'

const ProductDisplay = ({ product, onAddToCart }) => {
    const { dispatch } = useCart();
    const history = useHistory();

    const [showAddToCart, setShowAddToCart] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [productVisibility, setProductVisibility] = useState({});


    const [displayedProducts, setDisplayedProducts] = useState(16);
  
    const loadMoreProducts = () => {
      setDisplayedProducts((prevCount) => prevCount + 8);
    };

    const [isFavorite, setIsFavorite] = useState({});

    const [isVisible, setIsVisible] = useState(true);

    const toggleFavorite = (productId) => {
      setIsFavorite((prevFavorites) => ({
        ...prevFavorites,
        [productId]: !prevFavorites[productId],
      }));
    };

  // Function to toggle visibility
   const toggleVisibility = (productId) => {
     alert("We'll show this less.");
     
  setIsVisible((prev) => !prev);

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

    const handleProductClick = (productId) => {
     const clickedProduct = products.find(
       (product) => product.id === productId
     );
     setSelectedProduct(clickedProduct);
     setShowAddToCart(true);
    };
  
    const handleProductMouseLeave = () => {
      setShowAddToCart(false);
    };


  return (
    <div className="mt-40">
      <div className="flex gap-4 items-center mb-6">
        <img src={categoryRectangle} alt="" />
        <h3 className="text-orange-600 font-medium">Our Products</h3>
      </div>
      <h1 className="text-4xl font-semibold text-left mb-16">
        Explore Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
        {products.slice(0, displayedProducts).map((product) => (
          <div key={product.id} className="">
            <div
              className="relative flex items-center justify-center shadow-md bg-gray-100 h-64 max-w-72 duration-300"
              onMouseOver={() => handleProductClick(product.id)}
              onMouseLeave={handleProductMouseLeave}
            >
              <img
                src={product.image}
                alt={product.name}
                className={`object-cover ${
                  isVisible[product.id] && !productVisibility[product.id]
                    ? "blur"
                    : ""
                }`}
              />
              {product.isNew && (
                <div className="bg-green-400 text-white py-1 px-2 text-xs rounded-sm absolute -left-[18.5rem] top-3">
                  NEW
                </div>
              )}
              <div className="absolute flex flex-col gap-2 right-3 top-3">
                <img
                  src={isFavorite[product.id] ? filledHeart : heart}
                  alt=""
                  className="bg-white p-1 rounded-full cursor-pointer"
                  onClick={() => toggleFavorite(product.id)}
                />
                <img
                  src={eye}
                  alt=""
                  className="bg-white p-1 py-[0.4rem] rounded-full cursor-pointer"
                  onClick={() => {
                    handleProductClick(product.id);
                    toggleVisibility(product.id);
                  }}
                />
              </div>
              {showAddToCart && selectedProduct.id === product.id && (
                <div className="absolute flex flex-col gap-2 w-[17rem] bottom-0">
                  <button
                    className="bg-black text-white py-3 rounded-b-lg"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </div>
              )}
            </div>
            <h3 className="text-lg text-start font-semibold mb-2 ">
              {product.name}
            </h3>
            <div className="flex gap-2">
              <div className="">
                <p className="text-orange-600 font-medium">${product.price}</p>
              </div>
              <StarRating rating={product.rating} />
              <p className="text-gray-500 font-medium">({product.quantity})</p>
            </div>
            {product.color && (
              <div className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full bg-${product.color}-500`}
                ></div>
                <div
                  className={`w-4 h-4 rounded-full bg-${product.color2}-500`}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>
      {displayedProducts < products.length && (
        <button
          className="flex mx-auto bg-red-500 text-white py-3 px-8 rounded-sm mt-8"
          onClick={loadMoreProducts}
        >
          <img src={loader} alt="" />
          Load More Products
        </button>
      )}
    </div>
  );
};

export default ProductDisplay;
