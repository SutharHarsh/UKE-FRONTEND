import { ShoppingCart } from "lucide-react";

const HomepageProductCard = ({ product }) => {
  console.log(product)
  return (
    <div className="w-80 rounded-2xl p-6 shadow-2xl border border-gray-700">
      {/* Product Image */}
      <div className="bg-gray-100 rounded-xl p-6 mb-6 flex items-center justify-center h-48">
        <img src={"http://localhost:1337" + product?.images[0]?.url} alt="product_image" />
      </div>

      {/* Product Details */}
      <div className="space-y-3">
        {/* Product Name */}
        <div>
          <span className="text-xs text-gray-400 font-medium">
            Product Name:{" "}
          </span>
          <span className="text-xs text-white">
            {product?.name || "DS-2CD2H23G2-IZS"}
          </span>
        </div>

        {/* Price */}
        <div>
          <span className="text-xs text-gray-400 font-medium">Price: </span>
          <span className="text-lg text-white font-bold">
            {product?.price || "$147.51"}
          </span>
        </div>

        {/* Product Description */}
        <div>
          <span className="text-xs text-gray-400 font-medium">
            Product Description:{" "}
          </span>
          <p className="text-xs text-white leading-relaxed mt-1">
            {product?.description ||
              "2MP, Motorized Varifocal lens (2.8~12mm), AcuSense, IP67, IK10, 120dB WDR"}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-6">
        {/* Buy Now Button */}
        <button className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2.5 rounded-lg transition-colors duration-200 cursor-pointer">
          Buy Now
        </button>

        {/* Add to Cart Button */}
        <button className="flex-1 bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-white text-sm font-medium py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer">
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default HomepageProductCard;
