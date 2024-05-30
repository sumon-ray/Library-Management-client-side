import axios from "axios";
import { useEffect, useState } from "react";
// **********************************************
import AllBookDetails from "./AllBookDetails";
import TableBooks from "./TableBooks";
import ViewOptions from "./ViewOptions";
// **********************************************

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [view, setView] = useState("card");

  const [showAvailable, setShowAvailable] = useState(false);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const { data } = await axios.get(
          "https://server-pi-amber.vercel.app/books",
          {
            withCredentials: true,
          }
        );
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    getAllData();
  }, []);

  const handleViewChange = (option) => {
    setView(option);
  };

  // Filter function

  // ********************************************
  const handleToggleAvailable = () => {
    setShowAvailable(!showAvailable);
  };

  const filteredBooks = showAvailable
    ? books.filter((book) => book.quantity > 0)
    : books;
  // **************************************************
  return (
    <div className="my-8">
      <div className="flex justify-between mb-4">
        <ViewOptions onViewChange={handleViewChange} />
        <button onClick={handleToggleAvailable} className="btn btn-primary">
          {showAvailable ? "Show All Books" : "Show Available Books"}
        </button>
      </div>
      {view === "card" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-4">
          {filteredBooks.map((book) => (
            <AllBookDetails key={book._id} book={book} />
          ))}
        </div>
      ) : (
        <TableBooks books={filteredBooks} />
      )}
    </div>
  );
};

export default AllBooks;
