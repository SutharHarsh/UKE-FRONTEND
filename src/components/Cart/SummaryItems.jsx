import React from "react";
import { ChevronDown } from "lucide-react";

const SummaryItem = ({ data }) => {
  const { name, img, short_description, price, quantity } = data;
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-gray-600 rounded-lg">
          <img className="rounded-lg" src={data?.images[0]?.url} />
        </div>

        {/* Product Info */}
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-400">{short_description}</p>
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
