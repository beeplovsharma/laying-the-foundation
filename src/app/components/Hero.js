import React from 'react'

const Hero = ({content}) => {
  return (
    <div className='w-full h-screen text-6xl bg-zinc-700 flex justify-center items-center'> 
        {content}
    </div>
  )
}

export default Hero