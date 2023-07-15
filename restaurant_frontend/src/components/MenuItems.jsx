import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { BASE_URL } from '../../config/config';

const MenuItems = () => {
    const [menuItem, setMenuItem] = useState('')

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken') 
    }
  };
  useEffect(() => {
    fetch(BASE_URL + 'api/menu_item/', options)
      .then(response => response.json())
      .then(data => setMenuItem(data))

  }, [])

//   console.log(menuItem)
  return (
    <div className='container mx-auto grid grid-cols-3 py-10 gap-6 text-center'>
      <h1 className='text-3xl text-center font-bold col-span-4'>Menu Item</h1>
      {
        menuItem && menuItem.map((item, index) => {
          return (
            <div key={index} className="max-w-xs overflow-hidden bg-secondary rounded-lg shadow-lg ">
              <div className="px-4 py-2">
                <h1 className="text-xl font-bold uppercase ">{item?.item_name}</h1>
              </div>

              <div className="px-4 py-2 bg-blue-900 tex-center">
                {item?.price}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default MenuItems