import React from 'react'

function Navbar() {
  return (
    <div className="bg-[#d3e4cd] py-[10px] flex items-center justify-around">
      <p className="text-[35px] text-white font-bold">
        Portofo<span className="text-[#99a799]">lio.</span>
      </p>
      <div className="flex items-center space-x-12">
        <p className="text-white cursor-pointer">1</p>
        <p className="text-white cursor-pointer">2</p>
        <p className="text-white cursor-pointer">3</p>
        <p className="text-white cursor-pointer">4</p>
        <p className="text-white cursor-pointer">5</p>
      </div>
    </div>
  )
}

export default Navbar
