import React from 'react'

const Navbar = () => {
  return (
      <nav>
        <ul className='flex space-x-3' >
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
  )
}

export default Navbar