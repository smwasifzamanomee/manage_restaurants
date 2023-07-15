import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantCard = ({ name, address}) => {
  return (
    <div className="w-1/3 p-4 text-center">
      <div className="bg-blue-500 rounded-lg shadow-lg overflow-hidden">
        <div className="p-4">
          <h3 className="text-xl font-medium mb-2">{name}</h3>
          <p className="text-gray-200 text-sm mb-4">{address}</p>
          <Link 
            to={`/menu`}
           className="border rounded py-2 px-4 mt-4">Visit</Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;