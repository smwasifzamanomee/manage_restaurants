import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { BASE_URL } from '../../config/config'
import { Link } from 'react-router-dom'

const Menu = () => {
  const [menu, setMenu] = useState('')

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    }
  };
  useEffect(() => {
    fetch(BASE_URL + 'api/menu/', options)
      .then(response => response.json())
      .then(data => setMenu(data))

  }, [])

  // console.log(menu)
  return (
    <div className='container mx-auto grid grid-cols-3 py-10 gap-6 text-center'>
      <h1 className='text-3xl text-center font-bold col-span-4'>Menu</h1>
      {
        menu && menu.map((item, index) => {
          return (
            <div key={index} className="max-w-xs overflow-hidden bg-secondary rounded-lg shadow-lg ">
              <div className="px-4 py-2">
                <h1 className="text-xl font-bold uppercase ">{item?.menu_name}</h1>
              </div>

              <img className="object-cover w-full h-48 mt-2" src="https://www.vecteezy.com/free-vector/breakfast-lunch-dinner" alt="" />

              <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                <h1 className="text-lg font-bold text-white"></h1>
                <Link to='/menu_item'
                  className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Visit</Link>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Menu