import axios from "axios";
import { useEffect, useState } from "react";
import UseAuth from "../../UseAuth/UseAuth";
import BorrowBooksDetails from "./BorrowBooksDetails";

const BorrowedBooks = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://server-pi-amber.vercel.app/borrow/${id}`);
      const remaining = borrowedBooks.filter((book) => book._id !== id);
      setBorrowedBooks(remaining);
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  // console.log(borrowedBooks)
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
      length:{borrowedBooks.length}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* {
                borrowedBooks.map(books=><BorrowBooksDetails books={books} key={books._id} />)
            } */}
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
