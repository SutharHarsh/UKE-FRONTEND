import { useState, useRef, useEffect } from "react";

const PriceRangeSlider = () => {
  const [minPrice, setMinPrice] = useState(150);
  const [maxPrice, setMaxPrice] = useState(500);
  const [isDragging, setIsDragging] = useState(null);
  
  const sliderRef = useRef(null);
  const minValue = 0;
  const maxValue = 1000;

  // Generate fixed bars from small to big
  const generateFixedBars = () => {
    const bars = [];
    const totalBars = 20;
    
    for (let i = 0; i < totalBars; i++) {
      const value = (i / (totalBars - 1)) * maxValue;
      const height = 30 + (i / (totalBars - 1)) * 90; // Progressive height from 30px to 120px
      
      bars.push({
        height,
        value
      });
    }
    return bars;
  };

  const [bars] = useState(generateFixedBars());

  // Function to check if bar is in selected range
  const isBarInRange = (barValue) => {
    return barValue >= minPrice && barValue <= maxPrice;
  };

  const handleMouseDown = (type) => {
    setIsDragging(type);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const value = Math.round(percentage * maxValue);

    if (isDragging === 'min') {
      setMinPrice(Math.min(value, maxPrice - 10));
    } else if (isDragging === 'max') {
      setMaxPrice(Math.max(value, minPrice + 10));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(null);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, minPrice, maxPrice]);

  const handleInputChange = (type, value) => {
    const numValue = parseInt(value) || 0;
    if (type === 'min') {
      setMinPrice(Math.max(minValue, Math.min(numValue, maxPrice - 10)));
    } else {
      setMaxPrice(Math.min(maxValue, Math.max(numValue, minPrice + 10)));
    }
  };

  const minPercentage = (minPrice / maxValue) * 100;
  const maxPercentage = (maxPrice / maxValue) * 100;

  return (
    <div className="">
      <div className="">
        
        {/* Price Header */}
        <div className="flex items-center mb-6">
          <h2 className="text-xl font-bold text-white">Price</h2>
        </div>

        {/* Price Range Visualization */}
        <div className="bg-black backdrop-blur-sm rounded-2xl p-4 shadow-lg">
          
          {/* Bar Chart */}
          <div className="flex items-end justify-between h-32 mb-4 px-1">
            {bars.map((bar, index) => (
              <div
                key={index}
                className={`w-3 rounded-t-sm transition-colors duration-300 ${
                  isBarInRange(bar.value) ? 'bg-emerald-500' : 'bg-gray-200'
                }`}
                style={{ height: `${bar.height}px` }}
              />
            ))}
          </div>

          {/* Slider Track */}
          <div className="relative mb-8">
            <div
              ref={sliderRef}
              className="relative h-2 bg-gray-300 rounded-full cursor-pointer"
            >
              {/* Active Range */}
              <div
                className="absolute h-2 bg-emerald-500 rounded-full"
                style={{
                  left: `${minPercentage}%`,
                  width: `${maxPercentage - minPercentage}%`
                }}
              />
              
              {/* Min Handle */}
              <div
                className="absolute w-6 h-6 bg-white rounded-full border-4 border-emerald-500 cursor-grab active:cursor-grabbing shadow-lg"
                style={{ 
                  left: `${minPercentage}%`, 
                  transform: `translateX(-50%) translateY(-25%)`,
                  top: '50%'
                }}
                onMouseDown={() => handleMouseDown('min')}
              />
              
              {/* Max Handle */}
              <div
                className="absolute w-6 h-6 bg-white rounded-full border-4 border-emerald-500 cursor-grab active:cursor-grabbing shadow-lg"
                style={{ 
                  left: `${maxPercentage}%`, 
                  transform: `translateX(-50%) translateY(-25%)`,
                  top: '50%'
                }}
                onMouseDown={() => handleMouseDown('max')}
              />
            </div>
          </div>

          {/* Price Inputs */}
          <div className="grid grid-cols-2 gap-3">
            {/* From Input */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">From</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 font-medium">$</span>
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => handleInputChange('min', e.target.value)}
                  className="w-full bg-white rounded-xl px-8 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  min={minValue}
                  max={maxValue}
                />
              </div>
            </div>

            {/* To Input */}
            <div>
              <label className="block text-white text-sm font-medium mb-2">To</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700 font-medium">$</span>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => handleInputChange('max', e.target.value)}
                  className="w-full bg-white rounded-xl px-8 py-3 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  min={minValue}
                  max={maxValue}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;