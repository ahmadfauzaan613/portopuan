import React from 'react'
import ReactTypingEffect from 'react-typing-effect'

function First() {
  return (
    <div className=" mt-[17%] mb-[21%] mx-[10%]">
      <p className="text-[27px] m-0">Hello there, my name is</p>
      <p className="text-[75px] m-0 font-bold">Puan Alma Nalita</p>
      <div className="flex items-center space-x-2">
        <p className="text-[40px] m-0 ">And I'm a</p>
        <ReactTypingEffect className="text-[40px] font-normal text-[#9a9483] m-0" speed={200} eraseDelay={200} typingDelay={200} eraseSpeed={200} text={['UI/UX Designer', 'QA Tester']} />
      </div>
      <p className="text-[16px] m-0 ">Lorem ipsum dolor sit amet, consectetur adipisicing eli</p>
    </div>
  )
}

export default First
