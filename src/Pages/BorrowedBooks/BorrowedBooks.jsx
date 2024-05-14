import axios from "axios";
import { useEffect, useState } from "react";
import UseAuth from "../../UseAuth/UseAuth";
import BorrowBooksDetails from "./BorrowBooksDetails";
import Swal from "sweetalert2";

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
        icon: "success"
      });
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const { user } = UseAuth();
  useEffect(() => {
    const getAllData = async () => {
      const { data } = await axios(
        `https://server-pi-amber.vercel.app/borrow/${user?.email}`
      );
      setBorrowedBooks(data);
    };
    getAllData();
  }, [user]);

  return (
    <div>
      Total Books: {borrowedBooks.length}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
