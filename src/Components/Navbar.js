import React from 'react'
import {Link} from 'react-router-dom'

function Navbar({page}) {
  return (
    <div>
    <header className="text-gray-600 body-font bg-[#FFE300]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        
          <span className="ml-3 text-xl">Home</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/page" state={{page:'people'}} className={`${page==='people'?'text-black text-2xl underline ':''}mr-5 hover:text-yellow-900`}>People</Link>
          <Link to="/page" state={{page:'planets'}} className={`${page==='planets'?'text-black text-2xl underline ':''}mr-5 hover:text-yellow-900`}>Planets</Link>
          <Link to="/page" state={{page:'films'}} className={`${page==='films'?'text-black text-2xl underline ':''}mr-5 hover:text-yellow-900`}>Films</Link>
          <Link to="/page" state={{page:'species'}} className={`${page==='species'?'text-black text-2xl underline ':''}mr-5 hover:text-yellow-900`}>Species</Link>
          <Link to="/page" state={{page:'vehicles'}} className={`${page==='vehicles'?'text-black text-2xl underline ':''}mr-5 hover:text-yellow-900`}>Vehicles</Link>
          <Link to="/page" state={{page:'starships'}} className={`${page==='starships'?'text-black text-2xl underline ':''}mr-5 hover:text-yellow-900`}>Starships</Link>
        </nav>
      </div>
    </header>
  </div>
  )
}

export default Navbar