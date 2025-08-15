import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// import { totalPrice} from "../../store/productSlice"

const ProductDelivery = () => {
  const [shippingType, setShippingType] = useState("standard");
  const [deliveryTime, setDeliveryTime] = useState("morning");

  const { productData, totalPrice } = useSelector((store) => store.product);

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    address: "",
    zipCode: "",
    country: "",
    city: "",
    state: "",
    cellPhone: "",
    telephone: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-black my-20 text-white p-4">
      {/* Header Navigation */}
      <div className="flex items-center justify-center py-4 md:py-6 border-b border-gray-700 px-4">
        <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 overflow-x-auto">
          <div className="text-gray-400 text-sm md:text-base whitespace-nowrap">
            My Cart
          </div>
          <div className="bg-orange-400 px-3 sm:px-4 md:px-6 py-2 rounded-full text-white font-medium text-sm md:text-base whitespace-nowrap">
            Delivery
          </div>

          <div className="text-gray-400 text-sm md:text-base whitespace-nowrap">
            Payment
          </div>
          <div className="text-gray-400 text-sm md:text-base whitespace-nowrap">
            Confirmation
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 my-10">
        {/* Left Section - Shipping Information */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
              <input
                type="text"
                placeholder="Middle Name"
                className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                value={formData.middleName}
                onChange={(e) =>
                  handleInputChange("middleName", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Your Address
            </label>
            <input
              type="text"
              placeholder="Permanent Address"
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
              value={formData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
            />
          </div>

          {/* Zip Code and Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Zip Code</label>
              <input
                type="text"
                placeholder="0 0 0 0 0"
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                value={formData.zipCode}
                onChange={(e) => handleInputChange("zipCode", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Country</label>
              <div className="relative">
                <select className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 appearance-none">
                  <option>Select</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>
          </div>

          {/* City and State */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">City</label>
              <div className="relative">
                <select className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 appearance-none">
                  <option>Select</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                  <option>Chicago</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">State</label>
              <div className="relative">
                <select className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 appearance-none">
                  <option>Select</option>
                  <option>California</option>
                  <option>New York</option>
                  <option>Texas</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Cell Phone
              </label>
              <div className="flex">
                <select className="bg-gray-800 border border-gray-600 rounded-l-lg px-3 py-3 text-white focus:outline-none focus:border-yellow-400">
                  <option>+1</option>
                  <option>+44</option>
                  <option>+91</option>
                </select>
                <input
                  type="tel"
                  placeholder="111111111"
                  className="flex-1 bg-gray-800 border border-gray-600 border-l-0 rounded-r-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Telephone
              </label>
              <div className="flex">
                <select className="bg-gray-800 border border-gray-600 rounded-l-lg px-3 py-3 text-white focus:outline-none focus:border-yellow-400">
                  <option>+1</option>
                  <option>+44</option>
                  <option>+91</option>
                </select>
                <input
                  type="tel"
                  placeholder="111111111"
                  className="flex-1 bg-gray-800 border border-gray-600 border-l-0 rounded-r-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                />
              </div>
            </div>
          </div>

          {/* Delivery Timing Preferences */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Delivery timing Preferences
            </h3>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="deliveryTime"
                  value="morning"
                  checked={deliveryTime === "morning"}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  className="mr-2 text-yellow-400 focus:ring-yellow-400"
                />
                <span>Morning 8 to 12</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="deliveryTime"
                  value="afternoon"
                  checked={deliveryTime === "afternoon"}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  className="mr-2 text-yellow-400 focus:ring-yellow-400"
                />
                <span>Afternoon 12 to 4</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="deliveryTime"
                  value="evening"
                  checked={deliveryTime === "evening"}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  className="mr-2 text-yellow-400 focus:ring-yellow-400"
                />
                <span>Evening 4 to 7</span>
              </label>
            </div>
          </div>

          {/* Back to Cart Button */}
          <NavLink to="/cart">
            <button className="bg-transparent border border-gray-600 text-white px-6 py-3 rounded-lg hover:border-yellow-400 transition-colors cursor-pointer">
              Back to Cart
            </button>
          </NavLink>
        </div>

        {/* Right Section - Summary and Shipping */}
        <div className="space-y-6">
          {/* Summary */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Summary</h3>

            {/* Product Items */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">CCTV Camera</p>
                    <p className="font-semibold">DS-2CD2H23G2-IZS</p>
                    <div className="relative">
                      <select className="bg-gray-700 text-white text-xs px-2 py-1 rounded pr-6 focus:outline-none focus:bg-gray-600 cursor-pointer">
                        <option>Sub Categories</option>
                        <option>Indoor Cameras</option>
                        <option>Outdoor Cameras</option>
                        <option>PTZ Cameras</option>
                        <option>IP Cameras</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Qty: 1</p>
                  <p className="text-green-400 font-semibold">$147.51</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">CCTV Camera</p>
                    <p className="font-semibold">DS-2CD2H23G2-IZS</p>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="bg-gray-700 px-2 py-1 rounded text-xs">
                        Sub Categories
                      </span>
                      <ChevronDown size={12} />
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Qty: 1</p>
                  <p className="text-green-400 font-semibold">{totalPrice}</p>
                </div>
              </div>
            </div>

            {/* Totals */}
            <div className="border-t border-gray-600 pt-4 mt-4 space-y-2">
              <div className="flex justify-between">
                <span>Cart Sub Total:</span>
                <span className="text-green-400">$147.51</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className="text-green-400">Free</span>
              </div>
              <div className="flex justify-between text-red-400">
                <span>Discount:</span>
                <span>-$7.51</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t border-gray-600 pt-2">
                <span>Cart Total:</span>
                <span className="text-green-400">$140</span>
              </div>
            </div>
          </div>

          {/* Shipping Options */}
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Shipping</h3>
            </div>

            <div className="space-y-4">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="shipping"
                  value="standard"
                  checked={shippingType === "standard"}
                  onChange={(e) => setShippingType(e.target.value)}
                  className="mt-1 text-green-400 focus:ring-green-400"
                />
                <div>
                  <p className="font-semibold">Standard Shipping</p>
                  <p className="text-sm text-gray-400">
                    Delivery is expected to delivered in 3 to 6 Working days if
                    it free of cost
                  </p>
                </div>
              </label>

              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="shipping"
                  value="express"
                  checked={shippingType === "express"}
                  onChange={(e) => setShippingType(e.target.value)}
                  className="mt-1 text-green-400 focus:ring-green-400"
                />
                <div>
                  <p className="font-semibold">Express Shipping</p>
                  <p className="text-sm text-gray-400">
                    Delivery is expected to delivered in 1 to 2 Working days but
                    charges upto $30
                  </p>
                </div>
              </label>
            </div>

            {/* Check Out Button */}
            <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg mt-6 flex items-center justify-center space-x-2 transition-colors cursor-pointer">
              <span>Check Out</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDelivery;
