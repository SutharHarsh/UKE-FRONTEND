import React, { useState } from "react";
import {
  Star,
  Plus,
  Minus,
  ShoppingCart,
  CreditCard,
  Home,
  ChevronRight,
} from "lucide-react";
import { useProduct } from "../../Hooks/Product";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../store/productSlice";

const ProductData = ({ productId }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("information");
  const dispatch = useDispatch();

  const productData = useProduct(productId);
  // console.log(productData)
  const product = productData?.product?.data;
  console.log(product);

  const handleQuantityChange = (action) => {
    if (action === "increment") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrement" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product?.name} to cart`);
  };

  const handleBuyNow = () => {
    dispatch(addProductToCart(product));
  };

  return (
    <div className="min-h-screen text-white my-10">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 ">
          {/* Product Images */}
          <div>
            <img
              className="rounded-lg"
              src={"https://uke-strapi.onrender.com" + product?.images[0]?.url}
              alt=""
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-green-400 text-sm font-medium">
                {/* {product.category} */}
              </p>
              <h1 className="text-2xl mt-2">Product Name</h1>
              <h1 className="text-3xl font-bold mt-2">{product?.name}</h1>

              {/* Rating */}
              <div className="flex items-center mt-3">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-400">
                  {product?.reviews} Reviews
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-green-400">
              £{product?.price}
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-left flex-col gap-6 sm:flex-row space-x-4">
              <div className="flex w-30 sm:w-auto items-center bg-gray-800 rounded">
                <button
                  onClick={() => handleQuantityChange("decrement")}
                  className="p-2 text-gray-400 hover:text-white cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 min-w-[50px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange("increment")}
                  className="p-2 text-gray-400 hover:text-white cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-col gap-4 items-left sm:flex-row sm:gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex items-center justify-center space-x-2  bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded font-medium transition-colors cursor-pointer"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
                <NavLink to="/cart">
                  <button
                    onClick={handleBuyNow}
                    className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded font-medium transition-colors cursor-pointer"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Buy Now</span>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="mt-16 bg-[#272727] p-10 rounded-lg">
          <div className="flex flex-col sm:flex-row border-b border-gray-700">
            <button
              onClick={() => setActiveTab("information")}
              className={`px-6 py-3 font-medium cursor-pointer ${
                activeTab === "information"
                  ? "text-white border-b-2 border-green-500"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Product Information
            </button>
            <button
              onClick={() => setActiveTab("delivery")}
              className={`px-6 py-3 font-medium cursor-pointer ${
                activeTab === "delivery"
                  ? "text-white border-b-2 border-green-500"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Delivery & Returns
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`px-6 py-3 font-medium cursor-pointer ${
                activeTab === "reviews"
                  ? "text-white border-b-2 border-green-500"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Reviews
            </button>
          </div>

          <div className="py-8">
            {activeTab === "information" && (
              <div className="mt-8">
                <p className="text-gray-300 leading-relaxed">
                  {product?.description}
                </p>
              </div>
            )}

            {activeTab === "delivery" && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Delivery Information
                    </h3>
                    <div className="space-y-3 text-sm text-gray-300">
                      <p>• Free delivery on orders over £100</p>
                      <p>• Standard delivery: 3-5 business days</p>
                      <p>• Express delivery: 1-2 business days</p>
                      <p>• Installation service available</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Return Policy
                    </h3>
                    <div className="space-y-3 text-sm text-gray-300">
                      <p>• 30-day return policy</p>
                      <p>• Free returns on defective items</p>
                      <p>• Original packaging required</p>
                      <p>• Warranty: 2 years manufacturer warranty</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold">5.0</div>
                  <div>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                      Based on {product.reviews} reviews
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="border-b border-gray-700 pb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, j) => (
                            <Star
                              key={j}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">
                          Anonymous User
                        </span>
                      </div>
                      <p className="text-sm text-gray-300">
                        Excellent camera quality with crystal clear night
                        vision. Easy to install and great value for money.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductData;
