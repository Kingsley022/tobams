"use client"
import React from 'react'

interface Props{
    setNumberOfArticles: (newNumber: number) => void,
    numberOfArticles: number
}

const LoadmoreBtn = ({setNumberOfArticles, numberOfArticles}:Props) => {
  return (
    <button  className='text-hue border-hue border-[1.5px] px-4 py-2 rounded-lg mt-12'>Load More</button>
  )
}

export default LoadmoreBtn