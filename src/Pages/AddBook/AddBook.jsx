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
    console.log(info);
    const { data } = await axios.post(
      "https://server-pi-amber.vercel.app/books",
      info
    );
    console.log(data);
    toast.success("added successfully");
  };

  return (
    <section className=" my-8 max-w-4xl p-6 mx-auto bg-blue-100 rounded-md shadow-md dark:bg-gray-800">
    <h2 className="text-2xl font-semibold text-gray-700  capitalize dark:text-white text-center mb-12 ">Add Book</h2>

    <form onSubmit={handleSubmit}>
    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
            <label className="text-gray-700 dark:text-gray-200"    htmlFor="username"> Image URL:</label>
            <input name="image" id="username" placeholder="place image url" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700  bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
        </div>

        <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Name:</label>
            <input placeholder="type book name " name="name" id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
        </div>

        <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Quantity</label>
            <input placeholder="set book quantity" name="quantity" id="password" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
        </div>

        <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="authorName">Author Name:</label>
            <input placeholder="Athor name " name="authorName" id="authorName" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
        </div>

        <div className="mb-4">
            <label className="text-gray-700 dark:text-gray-200" htmlFor="category">Category</label>
            <select
                name="category"
                id="category"
                className="block px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                value={category}
                onChange={handleCategoryChange}
            >
                <option value="Arts & Music">Arts & Music</option>
                <option value="Biographies">Biographies</option>
                <option value="Cooking">Cooking</option>
            </select>
        </div>

        <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="description">Description:</label>
            <textarea placeholder="write details of the book" name="description" id="description" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
        </div>

        <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="rating">Rating</label>
            <input placeholder="rating (0-5)" name="rating" id="rating" type="number" min="0" max="5" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
        </div>
    </div>

    <div className="flex justify-end mt-6">
        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add Book</button>
    </div>
</form>

</section>

  );
};

export default AddBook;
