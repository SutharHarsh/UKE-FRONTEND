import React from "react";
import { ChevronDown } from "lucide-react";

const SummaryItem = ({ data }) => {
  
  const { title, img, description, price, quantity } = data;
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        
        <div className="w-12 h-12 bg-gray-600 rounded-lg">
          <img src={img} alt="product_img" />
        </div>

        {/* Product Info */}
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <p className="font-semibold">{description}</p>
        </div>
      </div>

      {/* Price & Quantity */}
      <div className="text-right">
        <p className="text-sm text-gray-400">Qty: {quantity}</p>
        <p className="text-green-400 font-semibold">${price}</p>
      </div>
    </div>
  );
};

export default SummaryItem;
