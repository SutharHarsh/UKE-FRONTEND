import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Summary from "../../components/Cart/Summary";
import ShippingForm from "../../components/Cart/ShippingForm";
import { clearShipping, updateShipping } from "../../store/shippingSlice";
import useShippingData from "../../Hooks/useShippingData";

const ProductDelivery = () => {
  const dispatch = useDispatch();
  const data = useShippingData();

  const formData = useSelector((state) => state.shipping);

  const handleClearShippingInfo = () => {
    dispatch(clearShipping());
    console.log(data);
  };

  const handleCheckOut = () => {
    dispatch(updateShipping({ shippingType: formData.shippingType })); // ✅ wrap in object
  };

  const handleInputChange = (field, value) => {
    dispatch(updateShipping({ [field]: value }));
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
          <ShippingForm
            onChange={(data) => console.log("Form updated:", data)}
          />

          {/* Back to Cart Button */}
          <NavLink to="/cart">
            <button className="bg-transparent border border-gray-600 text-white px-6 py-3 rounded-lg hover:border-yellow-400 transition-colors cursor-pointer">
              Back to Cart
            </button>
          </NavLink>

          {/* Clear Shipping Information */}
          <button
            onClick={handleClearShippingInfo}
            className="bg-transparent border border-gray-600 text-white px-6 mx-6 py-3 rounded-lg hover:border-yellow-400 transition-colors cursor-pointer"
          >
            Clear Shipping Information
          </button>
        </div>

        {/* Right Section - Summary and Shipping */}
        <div className="space-y-6">
          {/* Summary */}
          <Summary />

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
                  value="Standard"
                  checked={formData.shippingType === "Standard"}
                  onChange={(e) =>
                    handleInputChange("shippingType", e.target.value)
                  }
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
                  value="Express"
                  checked={formData.shippingType === "Express"}
                  onChange={(e) =>
                    handleInputChange("shippingType", e.target.value)
                  }
                  className="mt-1 text-green-400 focus:ring-green-400"
                />
                <div>
                  <p className="font-semibold">Express Shipping</p>
                  <p className="text-sm text-gray-400">
                    Delivery is expected to delivered in 1 to 2 Working days but
                    charges upto £30
                  </p>
                </div>
              </label>
            </div>

            {/* Check Out Button */}
            <NavLink to="/cart/productdelivery/paymentinfo">
              <button
                onClick={handleCheckOut}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg mt-6 flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                <span>Check Out</span>
                <ArrowRight size={20} />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDelivery;
