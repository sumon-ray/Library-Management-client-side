import React from "react";

const Slider = ({ image, text }) => {
  return (
    <div>
      <header>
        <div
          className="w-full bg-center bg-cover h-[38rem]"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-white lg:text-4xl">
                    {text}
              </h1>
              <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Start project
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Slider;    
