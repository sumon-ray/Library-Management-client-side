import React from "react";
import { Link } from "react-router-dom";

const CategoryBooks = ({ bookData }) => {
  const { image, name, authorName, category,_id} = bookData;
//  console.log(_id)
  return (
    <div className="flex flex-col h-full   rounded-lg overflow-hidden shadow-xl  ">
          {/* <div className=" mx-auto text-center">
        </div> */}
  <div className="flex-grow w-full max-h-96 md:h-full p-6 bg-slate-400 bg-opacity-15 mx-auto  text-center  ">
          <span className="flex-grow inline-block text-center w-35 mb-4 mx-auto px-3 py-1 leading-none bg-blue-200 text-blue-800 rounded-full">{category}</span>
  <img className="flex-grow  w-full h-72  mx-auto " src={image} alt={name} />
  </div>
      <div className="flex-col ">
        <h2 className="flex-grow text-2xl font-bold dark:text-gray-400 text-black mt-3">  {name.substring(0,30)}</h2>
        <p className="mb-5 flex-grow text-sm font-medium text-gray-950 dark:text-gray-400">By: {authorName}</p>
      
      </div>
      <Link to={`/details/${_id}`} className=" justify1 px-6 pb-6">
        <button  className=" flex-grow px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Details
        </button>
      </Link>
    </div>
  );
};

export default CategoryBooks;
