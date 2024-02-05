import Hero from '@/app/components/Hero'
import React from 'react'

const page = ({params}) => {
  return (
    <Hero content={params.task}/>
  )
}

export default page