import React, { useState } from 'react';

const ToggleComponent = () => {
  const [priceType, setPriceType] = useState("prices");

  const handlePriceTypeChange = (newType) => {
    setPriceType(newType);
  };

  return (
    <div className="flex md:items-center justify-start md:justify-center gap-1">
      <button
        className={`text-[#7a4191] ${priceType === 'prices' ? 'bg-[#7a4191] bg-opacity-15' : 'bg-transparent'} border border-[#7a4191] px-3 py-2 rounded-sm text-lg`}
        onClick={() => handlePriceTypeChange("prices")}
      >
        Price
      </button>
      <button
        className={`text-[#7a4191] ${priceType === 'mktCap' ? 'bg-[#7a4191] bg-opacity-15' : 'bg-transparent'} border border-[#7a4191] px-3 py-2 rounded-sm text-lg`}
        onClick={() => handlePriceTypeChange("mktCap")}
      >
        MKT CAP
      </button>
      <button
        className={`text-[#7a4191] ${priceType === 'volume' ? 'bg-[#7a4191] bg-opacity-15' : 'bg-transparent'} border border-[#7a4191] px-3 py-2 rounded-sm text-lg`}
        onClick={() => handlePriceTypeChange("volume")}
      >
        VOLUME
      </button>
    </div>
  );
};

export default ToggleComponent;
