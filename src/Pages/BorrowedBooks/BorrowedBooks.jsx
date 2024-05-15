import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import UseAuth from "../../UseAuth/UseAuth";
import BorrowBooksDetails from "./BorrowBooksDetails";

const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://server-pi-amber.vercel.app/borrow/${id}`);
      const remaining = borrowedBooks.filter((book) => book._id !== id);
      setBorrowedBooks(remaining);
      Swal.fire({
        title: "Good job!",
        text: " Book returned successfully",
        icon: "success",
      });
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const { user } = UseAuth();
  useEffect(() => {
    if (user?.email) {
      const getAllData = async () => {
        const { data } = await axios(
          `https://server-pi-amber.vercel.app/borrow/${user?.email}`,
          { withCredentials: true }
        );
        setBorrowedBooks(data);
      };
      getAllData();
    }
  }, [user]);

  return (
    <div>
  <p className="text-lg text-center my-3">Total Books: {borrowedBooks.length}</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 mb-6 gap-6">
        {borrowedBooks.map((item) => (
          <BorrowBooksDetails
            handleDelete={handleDelete}
            item={item}
            key={item._id}
          />
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
