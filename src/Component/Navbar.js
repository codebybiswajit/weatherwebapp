import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate();
  const [city, setCity] = useState('')

  const handelChangeCity = (event) => {
    setCity(event.target.value)
  }

  const handelSubmitButton = (event) => {
    event.preventDefault()
    navigate(`/search?city=${city}`) 
  }

  return (
    <div>
      <div className="bg-dark-subtle rounded-top p-2 d-flex justify-content-between align-items-center back-image ">
        <ul className='nav d-flex justify-content-between'>
          <li>
            <Link to={'/'} className='nav-link nav-item text-light'>Weather Application</Link>
          </li>
          <li>
            <Link to={'/about'} className='nav-link nav-item text-light'>About</Link>
          </li>
        </ul>
        <form className='d-flex justify-content-between align-content-center' onSubmit={handelSubmitButton}>
          <input type="text" name="location" className="form-control" value={city} placeholder='State or Country' onChange={handelChangeCity} />
          <button type="submit" className='btn btn-primary ms-2'>Search</button>
        </form>
      </div>
    </div>
  )
}