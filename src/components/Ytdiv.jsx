import React from 'react'

const Ytdiv = ({ imgSrc, title }) => {
    return (
      <div className="w-[270px] h-[300px] bg-gray-200 flex flex-col pt-6 justify-between items-center p-2 rounded-lg shadow-lg">
        {/* Image/Thumbnail */}
        <img
          src={imgSrc}
          alt="Thumbnail"
          className="w-[240px] h-[135px] object-cover rounded-md"
        />
  
        {/* Heading Below Image */}
        <h3 className="text-lg font-bold mt-4 text-center">{title}</h3>
  
        {/* Watch Now Button at the Bottom */}
        <button className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
          Watch Now
        </button>
      </div>
    );
  };
  

export default Ytdiv
