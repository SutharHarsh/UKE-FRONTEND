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

const ProductData = ({ productId }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("information");

  const productData = useProduct(productId);
  const product = productData?.product?.data;

  const images = [
    "https://uke-strapi-backend.onrender.com/api/upload/files/" + { productId },
    "/api/placeholder/400/400",
    "/api/placeholder/400/400",
    "/api/placeholder/400/400",
  ];

  const features = [
    "2MP Camera With Night Vision",
    "360 Degree Rotation Camera",
    "High Quality Camera",
    "24/7 Security Provided",
    "Solar based charging of Camera",
    "2 kg of weight of camera",
    "120X120 Dimensions of Camera",
  ];

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

  return (
    <div className="min-h-screen text-white my-10">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 ">
          {/* Product Images */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Thumbnail Images */}
            <div className="flex justify-center flex-row md:flex-col gap-2 space-y-2">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`w-16 h-16 rounded-lg border-2 cursor-pointer overflow-hidden ${
                    selectedImage === index
                      ? "border-green-500"
                      : "border-gray-600"
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1">
              <div className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="w-64 h-64 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <p className="text-green-400 text-sm font-medium">
                {/* {product.category} */}
              </p>
              <h1 className="text-3xl font-bold mt-2">
                Product Name: {product?.name}
              </h1>

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
              ${product?.price}
            </div>

            {/* Product Options */}
            <div className="space-y-4">
              <div className="flex sm:flex-row flex-col gap-3 items-left justify-between">
                <span className="text-sm">Sub-Categories</span>
                <select className="bg-gray-800 border border-gray-600 rounded px-3 py-2 text-sm cursor-pointer">
                  <option>{product?.subCategory}</option>
                </select>
              </div>

              <div className="flex sm:flex-row flex-col gap-3 items-left justify-between">
                <span className="text-sm">Color</span>
                <select className="bg-gray-800 border border-gray-600 rounded px-3 py-2 text-sm cursor-pointer">
                  <option>{product?.color}</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm">Availability: {product?.stocks}</span>
                {product?.bestseller && (
                  <span className="text-xs bg-green-600 px-2 py-1 rounded">
                    Best Seller Product
                  </span>
                )}
              </div>
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
                <button
                  // onClick={handleBuyNow}
                  className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded font-medium transition-colors cursor-pointer"
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Buy Now</span>
                </button>
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
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    {features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {features.slice(4).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-gray-300 leading-relaxed">
                    Keep your property secure with our advanced CCTV cameras.
                    Equipped with high-definition video and night vision. Built
                    for all weather conditions with motion detection alerts.
                    Perfect for both home and commercial surveillance.2MP
                    Motorized Varifocal Lens (2.8-12mm), AcuSense, IP67, IK10,
                    120dB WDR Motorized Varifocal Lens (2.8-12mm), AcuSense,
                    IP67, IK10, 120dB WDR Experience peace of mind with
                    cutting-edge surveillance technology. Our cameras offer
                    crisp clarity, remote monitoring, and smart alerts designed
                    to blend into any environment with sleek aesthetics. Secure
                    every corner – indoors or outdoors – with confidence.
                  </p>
                </div>
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
                      <p>• Free delivery on orders over $100</p>
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
