
import { ImArrowUp } from "react-icons/im";
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {
  const [items, setItems] = useState(Array.from({ length: 200 }));
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const fetchMoreData = () => {
    if (items.length >= 2000000) return;
    setItems(items.concat(Array.from({ length: 200 })));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Effect to show/hide the "scroll to top" button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="p-4 bg-primary relative">
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={items.length < 2000000}
        endMessage={<p>You've seen all the boxes!</p>}
      >
        {/* Responsive grid layout */}
        <div className="grid grid-cols-20 sm:grid-cols-20 md:grid-cols-20 lg:grid-cols-20 xl:grid-cols-20 gap-1.5">
          {items.map((_, index) => (
            <div
              key={index}
              className="border p-2 flex items-center justify-center text-center bg-secondary cursor-pointer shadow-inner hover:bg-hover transform hover:scale-110 transition-all duration-300 ease-in-out"
              style={{ height: '5vw' }} >
            </div>
          ))}
        </div>
      </InfiniteScroll>

      {/* Scroll to top button (only visible after scrolling down) */}
      {showScrollToTop && (
        <button
          className="fixed bottom-4 right-10 bg-black text-white p-4 rounded-full shadow-xl hover:bg-gray-900 transform hover:scale-110 transition-all duration-300 ease-in-out"
          onClick={scrollToTop}
        >
          <ImArrowUp className="text-xl font-2rem" />
        </button>
      )}
    </div>
  );
};

export default Home;

