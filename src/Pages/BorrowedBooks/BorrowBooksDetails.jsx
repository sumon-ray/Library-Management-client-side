
import { Link } from 'react-router-dom';
const BorrowBooksDetails = ({ item,handleDelete }) => {
    const { image, name, authorName, description, category, _id,bookId,returnDate } = item;
    console.log(returnDate)

    return (
        <div className="rounded-lg overflow-hidden shadow-xl  dark:bg-gray-800">
            <div className="mt-4 mx-auto text-center">
                <span className="inline-block px-3 py-1 leading-none bg-blue-200 text-blue-800 rounded-full">{item?.category}</span>
            </div>
            <div className="w-[50%] mx-auto pt-6">
                <img className="w-full" src={image} alt={name} />
            </div>
            <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{name}</h2>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{authorName}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
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

