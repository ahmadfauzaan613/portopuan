import React from 'react'

function Porto() {
  return (
    <div className="mt-[14%]">
      <p className="font-bold text-[40px] text-center">Portolio</p>
      <div className="flex items-center justify-center">
        <div className="bg-black w-[30px] mt-[12px] h-[3px]"></div>
        <p className="text-[#9a9483] text-center mx-[5px] text-[20px]">selected works</p>
        <div className="bg-black w-[30px] mt-[12px] h-[3px]"></div>
      </div>
      <div className="flex items-center justify-center space-x-[7%] my-[3%]">
        <div className="border rounded w-[296px] h-[237px]">1</div>
        <div className="border rounded w-[296px] h-[237px]">1</div>
        <div className="border rounded w-[296px] h-[237px]">1</div>
      </div>
    </div>
  )
}

export default Porto
