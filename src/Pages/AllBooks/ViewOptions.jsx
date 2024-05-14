import React from 'react';

const ViewOptions = ({ onViewChange }) => {
    const handleViewChange = (e) => {
        onViewChange(e.target.value);
    };

    return (
        <div className="mb-4">
            <label htmlFor="view" className="block text-gray-700 font-bold mb-2">View Options:</label>
            <select id="view" name="view" onChange={handleViewChange} className="input input-bordered">
                <option value="card">Card View</option>
                <option value="table">Table View</option>
            </select>
        </div>
    );
};

export default ViewOptions;
