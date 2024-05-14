import React, { useState } from 'react';
import Rating from 'react-rating';
import { FcRating } from "react-icons/fc";
import { Link } from 'react-router-dom';

const AllBookDetails = ({ book }) => {
    const { image, name, authorName, category, description, rating, _id } = book;
    const ratingValue = typeof rating === 'number' ? rating : parseFloat(rating);

    return (
        <div className="shadow-lg  shadow-slate-700 mb-4 p-6 rounded-lg flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <div className="mb-4 w-full md:w-96  rounded-lg bg-opacity-15  p-8 bg-slate-400 lg:mb-0 mx-auto lg:mr-6">
                <img className="w-56  md:w-48 mx-auto   h-auto rounded-lg" src={image} alt={name} />
            </div>
            <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="text-sm mb-2">by {authorName}</p>
                <p className="text-sm mb-2">Category: {category}</p>
                <p className="lg:w-2/3 text-sm mb-4">{description}</p>
                <div className="flex gap-2 items-center">
                    <Rating
                        initialRating={ratingValue}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        readonly
                    />
                    <span className="text-sm ml-2">{ratingValue.toFixed(2)}</span>
                    <FcRating />
                    <FcRating />
                    <FcRating />
                    <FcRating />
                </div>
            </div>
            <div className="mt-4 lg:mt-0 ">
                <Link to={`/update/${_id}`} className="">
                    <button className="btn btn-primary">Update</button>
                </Link>
            </div>
        </div>
    );
};

export default AllBookDetails;
