import React, { useState } from "react";
import HomepageProductCard from "../../components/ProductCard/HomepageProductCard";
import { useProducts } from "../../Hooks/Product";

const Home = () => {
  const [selectedCamera, setSelectedCamera] = useState("Rounded CCTV Camera");
  const [selectedSpecs, setSelectedSpecs] = useState(["Night Vision Camera"]);
  const [selectedPage, setSelectedPage] = useState(5);
  const [priceRange, setPriceRange] = useState([150, 500]);
  const [selectedStock, setSelectedStock] = useState("Available in Stock");

  const handleSpecToggle = (spec) => {
    setSelectedSpecs((prev) =>
      prev.includes(spec) ? prev.filter((s) => s !== spec) : [...prev, spec]
    );
  };

  const { products, loading, error } = useProducts();

  return (
    <div className="flex flex-col">
      <div className="flex flex-row bg-gradient-to-r from-[#FFFFFF] to-[#4CAF50] h-[500px] -mt-[74px] items-center gap-32 px-16">
        <h1 className="text-6xl font-bold text-black">Explore Our Products</h1>
        <img
          className="h-[300px]"
          src="../../../src/assets/HeroSection.png"
          alt=""
        />
      </div>
      <div className="flex flex-row justify-start gap-15 items-start">
        {/* Filtering Section */}
        <div className="w-80 py-12 space-y-8 ml-5">
          {/* Camera Type Filter */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg">
            <div className="space-y-4">
              {[
                "Rounded CCTV Camera",
                "Squared CCTV Camera",
                "CCTV Camera",
              ].map((camera, index) => (
                <label
                  key={index}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <div className="relative">
                    <input
                      type="radio"
                      name="camera"
                      value={camera}
                      checked={selectedCamera === camera}
                      onChange={(e) => setSelectedCamera(e.target.value)}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded-full border-2 ${
                        selectedCamera === camera
                          ? "bg-emerald-500 border-emerald-500"
                          : "bg-gray-300 border-gray-300"
                      }`}
                    >
                      {selectedCamera === camera && (
                        <div className="w-full h-full rounded-full bg-emerald-500"></div>
                      )}
                    </div>
                  </div>
                  <span className="text-white font-medium">{camera}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Specifications Filter */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg">
            <div className="grid grid-cols-3 gap-3 mb-4">
              {["2mb", "6mb", "10mb"].map((spec) => (
                <button
                  key={spec}
                  onClick={() => handleSpecToggle(spec)}
                  className={`px-4 py-2 rounded-lg cursor-pointer font-medium transition-all ${
                    selectedSpecs.includes(spec)
                      ? "bg-emerald-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {spec}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {["Night Vision Camera", "HKR"].map((spec) => (
                <button
                  key={spec}
                  onClick={() => handleSpecToggle(spec)}
                  className={`px-4 py-2 rounded-lg cursor-pointer font-medium transition-all ${
                    selectedSpecs.includes(spec)
                      ? "bg-emerald-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {spec}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {["HD", "360 Rotation Camera"].map((spec) => (
                <button
                  key={spec}
                  onClick={() => handleSpecToggle(spec)}
                  className={`px-4 py-2 rounded-lg cursor-pointer font-medium transition-all ${
                    selectedSpecs.includes(spec)
                      ? "bg-emerald-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {spec}
                </button>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg">
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  onClick={() => setSelectedPage(page)}
                  className={`w-12 h-12 rounded-xl cursor-pointer font-semibold transition-all ${
                    selectedPage === page
                      ? "bg-emerald-500 text-white shadow-lg"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Chart */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg">
            <div className="relative h-32 flex items-end justify-center space-x-1">
              {[20, 35, 45, 55, 65, 75, 85, 95, 100, 90, 80].map(
                (height, index) => (
                  <div
                    key={index}
                    className="bg-emerald-500 rounded-t-sm transition-all hover:bg-emerald-600"
                    style={{
                      height: `${height}%`,
                      width: "12px",
                      minHeight: "8px",
                    }}
                  ></div>
                )
              )}
              {/* Range indicators */}
              <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-emerald-500 rounded-full"></div>
              <div className="absolute -right-2 bottom-0 w-4 h-4 bg-white border-2 border-emerald-500 rounded-full"></div>
            </div>
          </div>

          {/* Price Range */}
          <div className="flex space-x-4">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3 shadow-lg">
              <span className="text-2xl font-bold text-white">$150</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3 shadow-lg">
              <span className="text-2xl font-bold text-white">$500</span>
            </div>
          </div>

          {/* Stock Status */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg">
            <div className="space-y-3">
              {["On sale", "Out of Stock", "Available in Stock"].map(
                (status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedStock(status)}
                    className={`w-full px-4 py-3 cursor-pointer rounded-xl font-medium transition-all ${
                      selectedStock === status
                        ? "bg-emerald-500 text-white shadow-lg"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {status}
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* Product Showcase Section */}
        <div className="min-h-screen py-12 px-4">
          <div className="flex flex-wrap justify-center gap-8">
            {products.map((product) => (
              <HomepageProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
