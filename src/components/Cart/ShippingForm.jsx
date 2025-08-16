import { ChevronDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { updateShipping } from "../../store/shippingSlice";

const ShippingForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.shipping);

  const handleInputChange = (field, value) => {
    dispatch(updateShipping({ [field]: value }));
  };

  return (
    <div className="space-y-6">
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
            onChange={(e) => handleInputChange("middleName", e.target.value)}
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
        <label className="block text-sm font-medium mb-2">Your Address</label>
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
            <select
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 appearance-none"
              value={formData.country}
              onChange={(e) => handleInputChange("country", e.target.value)}
            >
              <option value="">Select</option>
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
            <select
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 appearance-none"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
            >
              <option value="">Select</option>
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
            <select
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 appearance-none"
              value={formData.state}
              onChange={(e) => handleInputChange("state", e.target.value)}
            >
              <option value="">Select</option>
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

      {/* Phones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Cell Phone</label>
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
              value={formData.cellPhone}
              onChange={(e) => handleInputChange("cellPhone", e.target.value)}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Telephone</label>
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
              value={formData.telephone}
              onChange={(e) => handleInputChange("telephone", e.target.value)}
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
              checked={formData.deliveryTime === "morning"}
              onChange={(e) => handleInputChange("deliveryTime", e.target.value)}
              className="mr-2 text-yellow-400 focus:ring-yellow-400"
            />
            <span>Morning 8 to 12</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="deliveryTime"
              value="afternoon"
              checked={formData.deliveryTime === "afternoon"}
              onChange={(e) => handleInputChange("deliveryTime", e.target.value)}
              className="mr-2 text-yellow-400 focus:ring-yellow-400"
            />
            <span>Afternoon 12 to 4</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="deliveryTime"
              value="evening"
              checked={formData.deliveryTime === "evening"}
              onChange={(e) => handleInputChange("deliveryTime", e.target.value)}
              className="mr-2 text-yellow-400 focus:ring-yellow-400"
            />
            <span>Evening 4 to 7</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ShippingForm;
