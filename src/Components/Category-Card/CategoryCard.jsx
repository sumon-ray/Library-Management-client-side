import axios from "axios";
import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryBooks from "./CategoryBooks";

const CategoryCard = () => {
  const [books, setBooks] = useState([]);
  // console.log(books)
  useEffect(() => {
    const getBooks = async () => {
      try {
        const { data } = await axios.get(
          "https://server-pi-amber.vercel.app/books"
        );
        setBooks(data);
        // console.log(data); // Add this line to check the fetched data
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    getBooks();
  }, []);

  return (
    <Tabs>
      <div className="">
        <div className="flex justify-center mx-auto ">
          <TabList>
            <Tab>Arts & Music</Tab>
            <Tab>Biographies</Tab>
            <Tab>Cooking</Tab>
            <Tab>Entertainment</Tab>
          </TabList>
        </div>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 my-6 md:grid-cols-2">
            {books
              .filter((item) => item.category == "Arts & Music")
              .map((book) => (
                <CategoryBooks key={book._id} bookData={book} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 my-6 md:grid-cols-2">
            {books
              .filter((item) => item.category == "Biographies")
              .map((book) => (
                <CategoryBooks key={book._id} bookData={book} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 my-6 md:grid-cols-2">
            {books
              .filter((item) => item.category == "Cooking")
              .map((book) => (
                <CategoryBooks key={book._id} bookData={book} />
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 my-6 md:grid-cols-2">
            {books
              .filter((item) => item.category == "Entertainment")
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
