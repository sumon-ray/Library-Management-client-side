import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const Update = () => {
  const loader = useLoaderData();
  const navigate = useNavigate();

  const { image, name, authorName, category, rating } = loader;
  const [bookCategory, setCategory] = useState(category);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;
    const updatedImage = form.image.value;
    const updatedName = form.name.value;
    const updatedAuthorName = form.authorName.value;
    const updatedRating = form.rating.value;

    const updatedBook = {
      image: updatedImage,
      name: updatedName,
      authorName: updatedAuthorName,
      rating: updatedRating,
      category: bookCategory,
    };

    try {
      await axios.put(
        `https://server-pi-amber.vercel.app/singleData/${loader._id}`,
        updatedBook
      );
      // console.log(response.data);
      toast.success("Book updated successfully");
      navigate(-1); // Redirect to home page after successful update
    } catch (error) {
      console.error("Error updating book:", error);
      toast.error("Failed to update book");
    }
  };

  return (
    <div className="container mx-auto  px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Update Book</h1>
      <form onSubmit={handleUpdate} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Image:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            defaultValue={image}
            className="input input-bordered w-full"
            placeholder="Enter image URL"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={name}
            className="input input-bordered w-full"
            placeholder="Enter book name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="authorName"
            className="block text-gray-700 font-bold mb-2"
          >
            Author Name:
          </label>
          <input
            type="text"
            id="authorName"
            name="authorName"
            defaultValue={authorName}
            className="input input-bordered w-full"
            placeholder="Enter author name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-gray-700 font-bold mb-2"
          >
            Rating:
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            defaultValue={rating}
            className="input input-bordered w-full"
            placeholder="Enter rating"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 font-bold mb-2"
          >
            Category:
          </label>
          <select
            id="category"
            name="category"
            value={bookCategory}
            onChange={(e) => setCategory(e.target.value)}
            className="input input-bordered w-full"
          >
            <option value="Arts & Music">Arts & Music</option>
            <option value="Biographies">Biographies</option>
            <option value="Cooking">Cooking</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>
        <button type="submit" className="btn text-gray-100 btn-primary w-full">
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
