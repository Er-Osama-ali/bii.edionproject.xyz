
import React, { useState } from 'react';

const Advertisement = () => {
  const [noOfBlocks, setNoOfBlocks] = useState(1); 
  const [layout, setLayout] = useState('vertical'); 

  const handleBlockSelection = (event) => {
    const selectedBlocks = Math.min(10, Math.max(1, parseInt(event.target.value) || 1));
    setNoOfBlocks(selectedBlocks);
  };

  const handleLayoutChange = (event) => {
    setLayout(event.target.value);
  };

  const getLayoutClasses = () => {
    switch (layout) {
      case 'vertical':
        return 'flex flex-col'; // Blocks stacked vertically
      case 'horizontal':
        return 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-2'; // Responsive grid with minimal gap
      case 'mixed':
        return 'grid grid-cols-2 gap-2'; // Example mixed layout: 2 columns with minimal gap
      default:
        return '';
    }
  };

  return (
    <div className="p-4 bg-white">
      <h1 className="text-4xl font-serif mb-4 pl-44">Select Blocks for your advertisement</h1>

      {/* Flex container for No. of Blocks and Layout selection */}
      <div className="flex justify-between mb-4">
        {/* No. of Blocks Input */}
        <div className="flex flex-col mr-0 ml-12 w-1/4">
          <label className="block text-black mb-2">No of Blocks</label>
          <input
            type="number"
            value={noOfBlocks}
            onChange={handleBlockSelection}
            className="p-2 rounded bg-secondary text-white"
            min="1"
            max="10"
          />
        </div>

        {/* Layout Selection */}
        <div className="flex flex-col w-1/4 mr-0">
          <label className="block text-black mb-2">Select Layout</label>
          <select 
            value={layout} 
            onChange={handleLayoutChange} 
            className="p-2 rounded bg-secondary text-white"
          >
            <option value="vertical">Vertical</option>
            <option value="horizontal">Horizontal</option>
            <option value="mixed">Mixed</option>
          </select>
        </div>
      </div>

      {/* Box Preview */}
      <div className="mt-6">
        <div className={getLayoutClasses()}>
          {Array.from({ length: noOfBlocks }).map((_, index) => (
            <div
              key={index}
              className="border p-4 bg-secondary text-white text-center m-1" // Small margin for spacing
              style={{ width: '100px', height: '100px' }}
            >
              {/* Content of the box can go here */}
            </div>
          ))}
        </div>
      </div>

      {/* Buy Button */}
      <button
        onClick={() => alert(`You have selected ${noOfBlocks} blocks in ${layout} layout.`)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Select
      </button>
    </div>
  );
};

export default Advertisement;

