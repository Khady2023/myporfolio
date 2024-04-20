import React from 'react'
import computer from '/photos/design.png';

const Hero = () => {
  return (
    <div className='flex flex-col mx-4 lg:mx-40 mt-10 '>
      <div className='lg:flex flex-row mt-16'>
      <div className='hidden lg:flex flex-col'>
        <div className='w-5 h-5 bg-indigo-400 rounded-full'/>
        <div className='w-1 h-40 mx-2 bg-gradient-to-b from-indigo-400 to-red'/>
      </div>

      <div className='mx-6'>
        <h1 className='font-bold text-3xl lg:text-7xl pt-3'>Hi, I'm <span className='text-indigo-400'>Khady</span></h1>
        <p className='text-2xl font-semibold mt-4'>I am a web developer<br /> with added knowledge of UI/UX design</p>
      </div>
      </div>
        <img src={computer} alt="" className='lg:w-9/12 lg:h-[400px] my-4 mx-auto object-cover' />
    </div>

  )
}

export default Hero
