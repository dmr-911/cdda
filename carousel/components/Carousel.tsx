import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const images = [
  "https://via.placeholder.com/600x400?text=Image+1",
  "https://via.placeholder.com/600x400?text=Image+2",
  "https://via.placeholder.com/600x400?text=Image+3",
  "https://via.placeholder.com/600x400?text=Image+4",
  "https://via.placeholder.com/600x400?text=Image+5",
  "https://via.placeholder.com/600x400?text=Image+6",
  "https://via.placeholder.com/600x400?text=Image+7",
  "https://via.placeholder.com/600x400?text=Image+8",
  "https://via.placeholder.com/600x400?text=Image+9",
];

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const previousPage = () => {
    const page =
      (currentPage - 1 + Math.ceil(images.length / 3)) %
      Math.ceil(images.length / 3);
    setCurrentPage(page);
  };

  const nextPage = () => {
    const page = (currentPage + 1) % Math.ceil(images.length / 3);

    setCurrentPage(page);
  };

  const startIndex = currentPage * 3;
  const endIndex = Math.min(startIndex + 3, images.length);

  console.log(startIndex, endIndex);

  return (
    <div className="relative">
      <div className="overflow-y-hidden w-full">
        <div
          className="flex transition-all duration-300 ease-in-out border-2 border-red-400"
          style={{
            transform: `translateX(-${startIndex * (100 / images.length)}%)`,
          }}
        >
          {images.slice(startIndex, endIndex).map((image, index) => (
            <div key={index} className="w-96 h-72 px-2">
              <img
                src={image}
                alt={`Image ${startIndex + index}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={previousPage}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 rounded-full bg-gray-800 text-white"
      >
        <BsChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextPage}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 rounded-full bg-gray-800 text-white"
      >
        <BsChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Carousel;
