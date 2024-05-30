
import { Link } from 'react-router-dom';
const BorrowBooksDetails = ({ item,handleDelete }) => {
    const { image, bookName, authorName, description, category, _id,bookId,returnDate } = item;
    // console.log(bookName)

    return (
        <div className="rounded-lg overflow-hidden shadow-md shadow-slate-800 outline outline-zinc-500 ">
            <div className="mt-4 mx-auto text-center">
                <span className="inline-block px-3 py-1 leading-none bg-blue-200 text-blue-800 rounded-full">{category}</span>
            </div>
            <div className="w-[50%] mx-auto pt-6">
                <img className="w-full" src={image} alt={name} />
            </div>
            <div className="p-6">
                <h2 className="text-2xl font-semibold  ">{bookName}</h2>
                <p className="text-sm font-medium  ">By: {authorName}</p>
                <h1 className='outline-indigo-50 '>Borrow date: {returnDate} </h1>

                <p className="text-sm ">{description}</p>
            </div>
            <div className="flex justify1 px-6 pb-6">
                <button onClick={()=>handleDelete(_id)} className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    return
                </button>
            </div>
        </div>
    );
};    
  
export default BorrowBooksDetails;

