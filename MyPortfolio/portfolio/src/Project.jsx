import React from 'react'

const Project = ({postcard}) => {
  return (
    <div className='mx-10 mb-20 lg:mx-40'>
      <h1 className='font-bold text-4xl lg:text-6xl my-2 lg:my-4 pt-10'>Projects</h1>
      <p className='lg:text-xl lg:w-7/12 pb-4 text-offwhite'>Following projects showcases my work through real life example of my work. Each projects is described with links to code repository and live demos in it. It reflect my ability to solve complex problems, work with different technologies, manage projects effectively.</p>

      <div className='md:mx-24 lg:mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
      {postcard.map((data)=>(
        <div key={data.id} className=''> 
         <div className='w-full lg:w-10/12 bg-indigo-950/40 rounded-2xl p-6'>
          {/* <div className='w-8 h-8 bg-gradient-to-bl from-black to-zinc-600 rounded-full flex justify-end absolute m-3'></div> */}
          <img src={data.image} alt={data.name} className='rounded-2xl w-full' />
        <h1 className='font-bold text-white mt-2'>{data.name}</h1>
        <p className='mt-2 text-offwhite'>{data.description}</p>
         </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Project