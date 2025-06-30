import ProductCard from "../../components/ProductCard/LandingpageProductCard";

const BestProductSection = () => {
  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Best Products</h1>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default BestProductSection;
