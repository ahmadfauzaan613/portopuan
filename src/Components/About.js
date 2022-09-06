import React from 'react'
import Foto from '../Assets/test2.jpeg'

function About() {
  return (
    <div>
      <p className="font-bold text-[40px] text-center">About Me</p>
      <div className="flex items-center justify-center">
        <div className="bg-black w-[30px] mt-[12px] h-[3px]"></div>
        <p className="text-[#9a9483] text-center mx-[5px] text-[20px]">who i am</p>
        <div className="bg-black w-[30px] mt-[12px] h-[3px]"></div>
      </div>

      <div className="flex items-start my-[20px] mt-[4%] justify-center">
        <img src={Foto} alt="" className="w-[350px] h-full" />
        <div className="mt-[40px] ml-[8%]">
          <p>Lorem ipsum dolor sit amet consectetur</p>
          <p className="py-[20px] text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, expedita esse atque voluptatum <br /> dicta porro nulla eveniet repudiandae dolor repellat enim fugiat molestiae odit vero iure blanditiis <br /> id eligendi deleniti.
          </p>
          <button className="bg-[#d3e4cd] p-3 rounded-lg text-white font-bold">Download CV</button>
        </div>
      </div>
    </div>
  )
}

export default About
