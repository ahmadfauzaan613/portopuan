import React from 'react'

function Contacs() {
  return (
    <div className="mt-[20%]">
      <p className="font-bold text-[40px] text-center">Contact Me</p>
      <div className="flex items-center justify-center">
        <div className="bg-black w-[30px] mt-[12px] h-[3px]"></div>
        <p className="text-[#9a9483] text-center mx-[5px] text-[20px]">get in touch</p>
        <div className="bg-black w-[30px] mt-[12px] h-[3px]"></div>
      </div>
      <div className="ml-[15%]">
        <p className="font-bold">Looking forward to a fruitful collaboration with you</p>
        <div className="mt-2 flex items-center space-x-8">
          <span className="material-symbols-outlined">call</span>
          <div>
            <p className="font-bold">Call or Whatsapp Me</p>
            <p>dasdasdas</p>
          </div>
        </div>
        <div className="mt-2 flex items-center space-x-8">
          <span className="material-symbols-outlined">email</span>
          <div>
            <p className="font-bold">Email</p>
            <p>dasdasdas</p>
          </div>
        </div>
        <div className="mt-2 flex items-center space-x-8">
          <span class="material-symbols-outlined">location_on</span>
          <div>
            <p className="font-bold">Location</p>
            <p>Pekanbaru, Indonesia</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacs
