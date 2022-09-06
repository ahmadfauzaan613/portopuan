import React from 'react'

function Navbar() {
  return (
    <div className="bg-[#d3e4cd] py-[10px] flex items-center justify-around">
      <p className="text-[35px] text-white font-bold">
        Portofo<span className="text-[#99a799]">lio.</span>
      </p>
      <div className="flex items-center space-x-12">
        <p className="text-white cursor-pointer">Home</p>
        <p className="text-white cursor-pointer">About Me</p>
        <p className="text-white cursor-pointer">Portofolio</p>
        <p className="text-white cursor-pointer">Contact Me</p>
      </div>
    </div>
  )
}

export default Navbar
