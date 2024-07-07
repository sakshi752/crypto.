import React from 'react'

const Header = () => {
  return (
    <div className='w-full'>
      <h1>Crypto<span>.</span>
      </h1>
      <div>
        <a href="#">
          <p>WatchList</p>
        </a>
        <a href="#">
          <p>Home</p>
        </a>
        <a href="#">
          <p>Compare</p>
        </a>
        <a href="#">
          <button>Dashboard</button>
        </a>
      </div>
    </div>
  )
}

export default Header
