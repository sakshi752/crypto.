import React from 'react';

const ToggleComponent = ({ priceType, handlePriceTypeChange }) => {
  return (
    <div className="flex md:items-center justify-start md:justify-center gap-1">
      <button
        className={`text-[#7a4191] ${priceType === 'prices' ? 'bg-[#7a4191] bg-opacity-15' : 'bg-transparent'} border border-[#7a4191] px-3 py-2 rounded-sm text-lg`}
        onClick={() => handlePriceTypeChange("prices")}
      >
        Price
      </button>
      <button
        className={`text-[#7a4191] ${priceType === 'market_caps' ? 'bg-[#7a4191] bg-opacity-15' : 'bg-transparent'} border border-[#7a4191] px-3 py-2 rounded-sm text-lg`}
        onClick={() => handlePriceTypeChange("market_caps")}
      >
        MKT CAP
      </button>
      <button
        className={`text-[#7a4191] ${priceType === 'total_volumes' ? 'bg-[#7a4191] bg-opacity-15' : 'bg-transparent'} border border-[#7a4191] px-3 py-2 rounded-sm text-lg`}
        onClick={() => handlePriceTypeChange("total_volumes")}
      >
        VOLUME
      </button>
    </div>
  );
};

export default ToggleComponent;
