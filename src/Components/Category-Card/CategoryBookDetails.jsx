import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../UseAuth/UseAuth";

const CategoryBookDetails = () => {
  const { user, theme } = UseAuth();
  // console.log(user)
  const loader = useLoaderData();
  const { _id, image, name, authorName, description, category } = loader;
  const [isModalOpen, setIsModalOpen] = useState(false);
  // console.log(name)

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleBorrow = async (e) => {
    e.preventDefault();
    const userName = e.target.borrowerName.value;
    const userEmail = e.target.borrowerEmail.value;
    const returnBook = e.target.return.value;

    // Access the book details from the loader
    const { _id, name, authorName, description, category, image } = loader;

    // Create an object with the borrowed book details
    const borrowedBook = {
      bookId: _id,
      bookName: name,
      image: image,
      authorName: authorName,
      description: description,
      category: category,
      userName: userName,
      userEmail: userEmail,
      returnDate: returnBook,
    };

    try {
      // Make a POST request to send the borrowed book details to the backend
      await axios.post(
        "https://server-pi-amber.vercel.app/borrow",
        borrowedBook
      );

      Swal.fire({
        title: "Good job!",
        text: "Book borrowed successfully",
        icon: "success",
      });
      closeModal();
    } catch (error) {
      toast.error("You have already borrowed this book.");
    }
  };
  return (
    <div className="max-w-lg mx-auto my-6 p-4 shadow-md shadow-slate-600 ">
      <div className="flex justify-between pb-4 border-b">
        <div className="flex items-center">
          <span className="mb-0 capitalize ">{category}</span>
        </div>
        <Link>See All</Link>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src={image}
            className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="flex items-center text-xs">
            {/* <span>6 min ago</span> */}
          </div>
        </div>
        <div className="space-y-2">
          <a href="#" className="block">
            <h3 className="text-xl font-semibold dark:text-violet-600">
              {name}
            </h3>
            <h1 className="text-xl font-bold">By: {authorName}</h1>
          </a>
          <p className="leading-snug ">{description}</p>
          <button
            onClick={openModal}
            className="btn btn-primary text-white flex mx-auto"
          >
            Borrow
          </button>
        </div>
      </div>
      {/* Borrow Modal */}
      {isModalOpen && (
        <div
          className={`${
            theme == "light" ? "backdrop-blur-xl" : "backdrop-blur-lg"
          } fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50`}
        >
          <div
            className={`${
              theme == "light" ? "bg-zinc-100 text-black" : "bg-slate-700 "
            } p-8 rounded-md shadow-md w-96`}
          >
            <h2 className="text-xl font-semibold mb-4">Borrow Book</h2>
            <form onSubmit={handleBorrow}>
              <div className="mb-4">
                <label
                  htmlFor="borrowerName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  defaultValue={user?.displayName}
                  name="borrowerName"
                  className={` mt-1 text-zinc-300  p-2 w-full border rounded-md  input input-ghost shadow-md ${
                    theme == "light" ? "text-slate-800" : ""
                  }`}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="borrowerEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue={user?.email || "no user"}
                  name="borrowerEmail"
                  className={`text-zinc-300 input input-ghost shadow-md mt-1 p-2 w-full border rounded-md ${
                    theme == "light" ? "text-slate-800" : ""
                  }`}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="return" className="block text-sm font-medium ">
                  Returne
                </label>
                <input
                  type="date"
                  id="return"
                  name="return"
                  required
                  placeholder="place return date "
                  className={`text-zinc-300 ${
                    theme == "light" ? "text-slate-800" : ""
                  } shadow-md input input-ghost mt-1 p-2 w-full border rounded-md`}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="btn bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-blue-500 hover:text-blue-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryBookDetails;
