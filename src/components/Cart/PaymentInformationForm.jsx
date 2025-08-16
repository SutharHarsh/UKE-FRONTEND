import { useState } from "react";
import { ChevronDown, Info } from "lucide-react";
import { NavLink } from "react-router-dom";

const PaymentInformationForm = () => {
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expireMonth, setExpireMonth] = useState("Month");
  const [expireYear, setExpireYear] = useState("Year");
  const [cvv, setCvv] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Other Mode of Payment");

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Payment Information</h2>

      <div>
        <label className="block text-sm font-medium mb-2">
          Cardholder Name
        </label>
        <input
          type="text"
          placeholder="Your Name"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
          className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Card Number</label>
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Expire Date</label>
          <div className="relative">
            <select
              value={expireMonth}
              onChange={(e) => setExpireMonth(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white appearance-none cursor-pointer focus:border-orange-500 focus:outline-none"
            >
              <option>Month</option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>07</option>
              <option>08</option>
              <option>09</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 opacity-0">
            Year
          </label>
          <div className="relative">
            <select
              value={expireYear}
              onChange={(e) => setExpireYear(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white appearance-none cursor-pointer focus:border-orange-500 focus:outline-none"
            >
              <option>Year</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
              <option>2028</option>
              <option>2029</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className=" text-sm font-medium mb-2 flex items-center gap-1">
            CVV
            <Info className="w-4 h-4 text-gray-400" />
          </label>
          <input
            type="text"
            placeholder="CVV Number"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Other Payment Options
        </label>
        <div className="relative">
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white appearance-none cursor-pointer focus:border-orange-500 focus:outline-none"
          >
            <option>Other Mode of Payment</option>
            <option>PayPal</option>
            <option>Apple Pay</option>
            <option>Google Pay</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      <NavLink to="/cart/productdelivery">
        <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded transition-colors cursor-pointer">
          Back to Address
        </button>
      </NavLink>
    </div>
  );
};

export default PaymentInformationForm;
