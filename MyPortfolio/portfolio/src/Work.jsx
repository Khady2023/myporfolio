import React from 'react'
import mock from './mock';

const Work = () => {
  const images = mock();
  return ( 
    <div className='mx-10 md:mx-24 lg:mx-96'>
     
      <div className='my-10 grid grid-cols-3 md:grid-cols-4 space-y-6 place-items-center'>      
      {images.map((data, index)=>(
          <div key={index} className='w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-tr from-gray-950 to-zinc-500 flex justify-center items-center shadow-2xl animate animate-spin-slow'>
            <img src={data.src} className='w-6 h-6 md:w-12 md:h-8 object-contain' alt="" />
            </div>  
        
           
      ))}
    </div>
           </div>
  )
}

export default Work
