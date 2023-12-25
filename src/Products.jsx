import React from 'react'
import NavBar from './components/NavBar'

const Products = () => {
  return (
    <div className="flex overflow-hidden bg-slate-100">
        <NavBar/>
        <div className="flex-col w-4/5">
          <div className="mt-5 mr-20">
              <p className="text-2xl">Welcome Back, Deepak</p>
          </div>
          <div>
            <label htmlFor="101"></label>
            <input type="search" name="search" id="101" />
          </div>
    </div>
    </div>
  )
}

export default Products;
