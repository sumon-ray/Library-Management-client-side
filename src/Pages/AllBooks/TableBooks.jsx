import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../UseAuth/UseAuth';

const TableBooks = ({ books }) => {
    const { theme } = UseAuth();

    const isDarkTheme = theme === 'dark';

    const tableHeaderClass = isDarkTheme ? "bg-gray-200" : "bg-gray-100";
    const tableRowClass = isDarkTheme ? "bg-gray-700 text-white" : "bg-white text-gray-800";
    const tableBodyClass = isDarkTheme ? "dark:bg-gray-900" : ""; 

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className={tableHeaderClass}>
                    <tr className={isDarkTheme ? 'text-gray-400' : 'text-gray-900'}>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Author Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Category</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Rating</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Update</th>
                        {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th> */}
                    </tr>
                </thead>
                <tbody className={tableBodyClass}>
                    {books.map((book) => (
                        <tr key={book._id}>
                            <td className="px-6 py-4 whitespace-nowrap">{book.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{book.authorName}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{book.category}</td>
                            {/* <td className="px-6 py-4 whitespace-nowrap">{book.description}</td> */}
                            <td className="px-6 py-4 whitespace-nowrap">{parseFloat(book.rating).toFixed(2)}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <Link to={`/update/${book._id}`} className={isDarkTheme ? "text-indigo-400 hover:text-indigo-600" : "text-indigo-600 hover:text-indigo-900"}>Update</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableBooks;
