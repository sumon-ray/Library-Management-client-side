import axios from "axios";
import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryBooks from "./CategoryBooks";
import SearchBar from "./SearchBook";

const CategoryCard = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const { data } = await axios.get(
          "https://server-pi-amber.vercel.app/freeBooks"
        );
        setBooks(data);
        setFilteredBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    getBooks();
  }, []);

  const handleSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://server-pi-amber.vercel.app/searchBooks?search=${searchQuery}`
      );
      setFilteredBooks(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error searching books:", error);
      setFilteredBooks([]);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Tabs>
      <div className="">
        <div className="flex justify-center flex-col items-center w-full mx-auto ">
          <TabList className="mx-auto ml-10 md:mr-10 justify-center">
            <Tab>Arts & Music</Tab>
            <Tab>Biographies</Tab>
            <Tab>Cooking</Tab>
            <Tab>Entertainment</Tab>
          </TabList>
          <SearchBar
            searchQuery={searchQuery}
            handleInputChange={handleInputChange}
            handleSearch={handleSearch}
          />
        </div>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 my-6 md:grid-cols-2">
            {Array.isArray(filteredBooks) &&
              filteredBooks
                .filter((item) => item.category === "Arts & Music")
                .map((book) => (
                  <CategoryBooks key={book._id} bookData={book} />
                ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 my-6 md:grid-cols-2">
            {Array.isArray(filteredBooks) &&
              filteredBooks
                .filter((item) => item.category === "Biographies")
                .map((book) => (
                  <CategoryBooks key={book._id} bookData={book} />
                ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 my-6 md:grid-cols-2">
            {Array.isArray(filteredBooks) &&
              filteredBooks
                .filter((item) => item.category === "Cooking")
                .map((book) => (
                  <CategoryBooks key={book._id} bookData={book} />
                ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 my-6 md:grid-cols-2">
            {Array.isArray(filteredBooks) &&
              filteredBooks
                .filter((item) => item.category === "Entertainment")
                .map((book) => (
                  <CategoryBooks key={book._id} bookData={book} />
                ))}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default CategoryCard;
