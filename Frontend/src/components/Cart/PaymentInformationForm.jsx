import { useState } from "react";
import { ChevronDown, Info } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateShipping } from "../../store/shippingSlice";

let typingTimer;

const PaymentInformationForm = () => {
  const dispatch = useDispatch();
  const email = useSelector((store) => store.shipping.email);
  const [localEmail, setLocalEmail] = useState(email);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setLocalEmail(value);

    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      dispatch(updateShipping({ email: value })); // save after user stops typing
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Customer's Email</h2>

      <div>
        <label className="block text-sm font-medium mb-2">Add Your Email</label>
        <input
          required
          type="text"
          placeholder="Your Email"
          value={localEmail}
          onChange={handleInputChange}
          className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
        />
      </div>

      <NavLink className="mb-6" to="/cart/productdelivery">
        <button className="border-1 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded transition-colors cursor-pointer">
          Back to Address
        </button>
      </NavLink>
    </div>
  );
};

export default PaymentInformationForm;
