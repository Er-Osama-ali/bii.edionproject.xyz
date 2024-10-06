import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {
  const [items, setItems] = useState(Array.from({ length: 200 }));

  const fetchMoreData = () => {
    if (items.length >= 2000000) return;
    // Add more boxes when user scrolls
    setItems(items.concat(Array.from({ length: 200 })));
  };

  return (
    <div className="p-4 bg-primary">
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={items.length < 2000000}
        endMessage={<p>You've seen all the boxes!</p>}
      >
        {/* Responsive grid with 20 columns */}
        <div className="grid grid-cols-20 gap-1.5">
          {items.map((_, index) => (
            <div
              key={index}
              className=" border p-2 flex items-center justify-center text-center bg-secondary cursor-pointer shadow-lg"
              style={{height:"60px"}}
            >
             {/* {index + 1} */}
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Home;
