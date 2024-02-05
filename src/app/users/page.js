import React from 'react'
import Hero from '../components/Hero'

async function timer(){
   await new Promise(res => {
    setTimeout(res,3000);
  })
}

const page = async () => {
  await timer();
  return (
    <div>
        <Hero content='users page'/>
    </div>
  )
}

export default page