import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
const Section1 = () => {
  return (
    <div>
      <h1 className=" font-bold  lg:w-1/2 mb-4 lg:mb-10 mx-auto text-center lg:text-5xl text-2xl">
        WHAT IS ONLINE LIBRARY MANAGEMENT SYSTEM
      </h1>
      <div className="flex gap-8 justify-between lg:flex-row   flex-col">
        <div className="lg:w-1/2 md:w-full">
          <p className="">
          Online Library Management System is an Automated Library System that handles the various functions of the library. It provides a complete solution to the library management software. The online Library Management System is classified into two parts Bar Code System and RFID System.
          </p>
          <p className="my-4">Library plays an important role in all schools and colleges, no educational institution can exist without Library Administration Software. It is an important part of every school and college and it helps the librarian to keep records of available books as well as issued books. Library Management System software helps in different ways by providing students the facility to learn, gather resources, promote group learning and improve knowledge and skills.</p>
          <h1 className="font-bold text-lg">
            Features of Online Library Management System
          </h1>
          <ul>
            <li className="flex items-center gap-1"> <IoMdCheckmarkCircle /> Integration of all records of students</li>
            <li className="flex items-center gap-1"> <IoMdCheckmarkCircle />Manage the records systematically</li>
            <li className="flex items-center gap-1"><IoMdCheckmarkCircle />It can track any information online</li>
            <li className="flex items-center gap-1"><IoMdCheckmarkCircle /> One can generate the reports</li>
            <li className="flex items-center gap-1"><IoMdCheckmarkCircle /> Manage all information online</li>
            <li className="flex items-center gap-1"><IoMdCheckmarkCircle /> Easy to maintain records</li>
            <li className="flex items-center gap-1"><IoMdCheckmarkCircle /> It leads to fast book entry</li>
          </ul>
        </div>
        <div className="lg:w-1/2 md:w-full">
<img className="w-full h-full"
  src="https://plus.unsplash.com/premium_photo-1661964155525-fe70c0f7162b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  alt=""
/>

        </div>
      </div>
    </div>
  );
};
export default Section1;
