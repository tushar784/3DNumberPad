import React from 'react'
import logo from '../assets/tusharsurvedesigns-02.png'
import '../App.css'

const HeaderSection = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-[#FFFBF5]">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 w-[3rem] h-[3rem]" />
      </div>
      <nav className="flex space-x-4">
        <a href="#home" className="text-gray-700 hover:text-gray-900">Home</a>
        <a href="#features" className="text-gray-700 hover:text-gray-900">Features</a>
        <a href="#benefits" className="text-gray-700 hover:text-gray-900">Benefits</a>
        <a href="#reviews" className="text-gray-700 hover:text-gray-900">Reviews</a>
        <a href="#buy" className="text-gray-700 hover:text-gray-900">Buy Now</a>
      </nav>
      <div>
        <button className="px-3 py-2 rounded-lg bg-[#fc6a03] hover:bg-[#E68000] glow-button">
          <span className="font-bold text-white">Buy Now</span>
        </button>
      </div>
    </header>
  )
}

export default HeaderSection
