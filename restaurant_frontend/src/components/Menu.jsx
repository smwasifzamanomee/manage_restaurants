import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { BASE_URL } from '../../config/config'

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

  console.log(menu)
  return (
    <div className="flex flex-wrap justify-between items-center container mx-auto">
      {
        menu && menu.map((item, index) => (
          <div key={index}>
            <div className="bg-blue-400  rounded-lg shadow-lg">
              <div className="p-4">
                <h2 className="text-2xl font-bold text-gray-800">{item?.menu_name}</h2>
                <button>Visit</button>
              </div>
              </div>
          </div>
        ))
      }
    </div>
  )
}

export default Menu