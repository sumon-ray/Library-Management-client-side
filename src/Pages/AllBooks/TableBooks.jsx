import React from 'react';
import { Link } from 'react-router-dom';

const TableBooks = ({ books }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {books.map((book) => (
                        <tr key={book._id}>
                            <td className="px-6 py-4 whitespace-nowrap">{book.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{book.authorName}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{book.category}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{book.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{parseFloat(book.rating).toFixed(2)}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <Link to={`/update/${book._id}`} className="text-indigo-600 hover:text-indigo-900">Update</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableBooks;
