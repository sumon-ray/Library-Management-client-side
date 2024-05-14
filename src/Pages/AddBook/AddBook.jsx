import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const AddBook = () => {
  const [category, setCategory] = useState("Arts & Music");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const authorName = form.authorName.value;
    const quantity = parseInt(form.quantity.value);
    const description = form.description.value;
    const rating = form.rating.value;
    // const bookId = form.bookId.value;

    const info = {
      image,
      name,
      authorName,
      quantity,
      description,
      rating,
      category,
    };
    // console.log(info);
    const { data } = await axios.post(
      "https://server-pi-amber.vercel.app/books",
      info
    );
    console.log(data);
    toast.success("added successfully");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-4">Add New Book</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Image URL:
          </label>
          <input
            type="text"
            name="image"
            className="input input-bordered"
            placeholder="Enter image URL"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Name:</label>
          <input
            type="text"
            name="name"
            className="input input-bordered"
            placeholder="Enter book name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Quantity:</label>
          <input
            type="number"
            name="quantity"
            className="input input-bordered"
            placeholder="Enter quantity"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Author Name:
          </label>
          <input
            type="text"
            name="authorName"
            className="input  input-bordered"
            placeholder="Enter author name"
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700" htmlFor="category">
            Category
          </label>
          <select
            name="category"
            id="category"
            className="border   text-gray-400 bg-slate-900 p-2 rounded-md"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="Arts & Music">Arts & Music</option>
            <option value="Biographies">Biographies</option>
            <option value="Cooking">Cooking</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Description:
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered"
            placeholder="Enter description"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Rating:</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            className="input input-bordered"
            placeholder="Enter rating (1-5)"
          />
        </div>
        <div className="col-span-2 flex justify-center mt-6">
          <button type="submit" className="btn btn-primary">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
