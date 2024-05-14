import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Section2 = () => {
  return (
    <div>
      <h1 className="text-center  mb-4 lg:mb-10 lg:my-12 mt-5 font-bold lg:w-2/3 mx-auto lg:text-5xl text-2xl">
        ADVANTAGES OF ONLINE LIBRARY MANAGEMENT SYSTEM
      </h1>
      <div className="flex flex-col lg:flex-row justify-between mb-6 gap-8">
        <div className="lg:w-1/2 md:w-full">
          <h1 className="text-lg font-bold">
            Advantages of Online Library Management System are:
          </h1>
          <ul className="my-4">
            <li className="flex items-center gap-1">
              {" "}
              <IoMdCheckmarkCircle /> Integration of all records of students
            </li>
            <li className="flex items-center gap-1">
              {" "}
              <IoMdCheckmarkCircle />
              Manage the records systematically
            </li>
            <li className="flex items-center gap-1">
              <IoMdCheckmarkCircle />
              It can track any information online
            </li>
            <li className="flex items-center gap-1">
              <IoMdCheckmarkCircle /> One can generate the reports
            </li>
            <li className="flex items-center gap-1">
              <IoMdCheckmarkCircle /> Manage all information online
            </li>
            <li className="flex items-center gap-1">
              <IoMdCheckmarkCircle /> Easy to maintain records
            </li>
            <li className="flex items-center gap-1">
              <IoMdCheckmarkCircle /> It leads to fast book entry
            </li>
          </ul>
          <p>
          As discussed, the Online Library Management System is categorized into two parts bar code system and RFID system. In a bar code system, books a unique bar code number is assigned to every book and with the help of a bar code reader, we can check the status of the book like when it is issued and returned. While RFID based library management system is a wireless-based system which helps in easy maintenance of records, which reduces the burden of a librarian and lead to fast-tracking of record.
          </p>
          <p className="my-4">Library Management System stores every information electronically and in an organized and systematic way which leads to effective results. It enhances the overall performance of the students and develops the habit of silent reading. The software is designed in such a way that it modernize the library system and help the students to make the best use of the Library Automation System</p>
        </div>
        <div className="lg:w-1/2 md:w-full">
            <img 
             className='w-full h-full'
              src="https://media.istockphoto.com/id/1448108142/photo/student-searching-for-a-book-in-the-library-system.webp?b=1&s=170667a&w=0&k=20&c=GLnXuiKfpK_r_ZGcxAZ-bEYrQru6pVOwWaowP_L4FFY=" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
