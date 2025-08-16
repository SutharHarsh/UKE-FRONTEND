import React from "react";
import PaymentInformationForm from "../../components/Cart/PaymentInformationForm";
import Summary from "../../components/Cart/Summary";
import { useSelector } from "react-redux";
import { Store } from "lucide-react";
import { NavLink } from "react-router-dom";

const PaymentPage = () => {
  const shippingType = useSelector((store) => store.shipping.shippingType);
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Progress Bar */}
        <div className="flex items-center mb-8">
          <div className="flex-1 bg-orange-500 text-black text-center py-2 font-semibold">
            My Cart
          </div>
          <div className="flex-1 bg-orange-500 text-black text-center py-2 font-semibold">
            Delivery
          </div>
          <div className="flex-1 bg-orange-500 text-black text-center py-2 font-semibold">
            Payment
          </div>
          <div className="flex-1 bg-gray-600 text-gray-300 text-center py-2 font-semibold">
            Confirmation
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Information */}
          <PaymentInformationForm />

          {/* Summary */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 h-fit">

            <div className="space-y-4 mb-6">
              <Summary />
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 flex items-center justify-between">
                Shipping
                <NavLink to="/cart/productdelivery">
                  <button className="text-green-500 text-xs hover:underline cursor-pointer">
                    View Shipping Details
                  </button>
                </NavLink>
              </h3>
              <div>
                <div className="text-sm font-medium mb-1">{shippingType}</div>
                <div className="text-xs text-gray-400">
                  Delivery is expected to be delivered in 3 to 6 Working days if
                  it free of cost
                </div>
              </div>
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer">
              Pay $140
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
