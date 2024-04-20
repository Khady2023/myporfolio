import React from 'react'

const About = () => {
  const uiux = "/photos/uiux.png";
  const webdev = "/photos/webdev.png";
  return (
    <div className='mx-10 mb-20 lg:mx-40' id= 'about'>
      <h2 className='font-semibold text-xl lg:text-2xl'>INTRODUCTION</h2>
      <h1 className='font-bold text-4xl lg:text-6xl my-2 lg:my-4'>Overview</h1>
      <p className='lg:text-xl lg:w-7/12 pb-4 text-offwhite'>I'm a skilled software developer with experience in HTML, CSS, TailwindCSS and Javascript, and expertise in frameworks like React. I'm a quick learner and collaborate closely with clients to create efficient, scalable and user-friendly solutions that solve real world problems. Let's work together to bring your ideas to life!</p>

      <div className='my-6 md:mx-20 space-y-6 lg:space-y-16'>
        <div className='flex flex-col md:flex-row mx-auto space-y-6 md:space-y-0 md:space-x-16 justify-center'>
        <div className='w-10/12 mx-auto lg:mx-0 lg:w-3/12 h-60 rounded-2xl bg-gradient-to-b from-pink-500 to-green-500 p-0.5 shadow-xl shadow-indigo-900/50 hover:skew-y-6'>
          <div className='w-full h-full bg-slate-900  rounded-xl flex flex-col items-center justify-center px-4 gap-8'>
          <img src={webdev} alt="" className='w-20 h-20' />
          <h1 className='text-white font-bold text-xl'>Web development</h1>

          </div>
        </div>
        
        <div className='w-10/12 mx-auto lg:mx-0 lg:w-3/12 h-60 rounded-2xl bg-gradient-to-b from-pink-500 to-green-500 p-0.5 shadow-xl shadow-indigo-900/50 hover:skew-y-6'>
          <div className='w-full h-full bg-slate-900 rounded-xl flex flex-col items-center justify-center gap-8'>
          <img src={uiux} alt="" className='w-20 h-20' />
          <h1 className='text-white font-bold text-xl'>UI/UX Design</h1>
          </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default About

