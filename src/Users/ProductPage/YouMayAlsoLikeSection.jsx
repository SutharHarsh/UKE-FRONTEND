import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useProducts } from "../../Hooks/Product";
import { Link } from "react-router-dom";
import HomepageProductCard from "../../components/ProductCard/HomepageProductCard";

const YouMayAlsoLikeSection = () => {
  const { products } = useProducts();
  return (
    <div className=" text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">You may also like</h2>

          {/* Navigation Arrows */}
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div key={product.id || index} className="w-full">
              <Link to={"/productpage/" + product?.documentId}>
                <HomepageProductCard product={product} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouMayAlsoLikeSection;
