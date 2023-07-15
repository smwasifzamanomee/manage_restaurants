import React from 'react'
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';
import { BASE_URL } from '../../../config/config';
import { useEffect } from 'react';

const Restaurant = () => {
    const [restaurants, setRestaurants] = useState('')

    const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('accessToken')
        },
      };

      useEffect (() => {

      
      fetch(BASE_URL + 'api/restaurant/', options)
        .then(response => response.json())
        .then(data => setRestaurants(data))
        .catch(err => console.error(err));
    }, [])
    
    // console.log(restaurants)

    return (
        <div className="container mx-auto flex flex-wrap">
            {
            restaurants && restaurants.map((restaurant, index) => (
                <RestaurantCard
                    key={index}
                    name={restaurant?.restaurant_name}
                    address={restaurant?.address}
                />
            ))}
        </div>
    )
}

export default Restaurant