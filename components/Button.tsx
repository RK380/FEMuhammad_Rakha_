import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export default function Button() {
  return (
    <button className='bg-white text-white hover:bg-zinc-800 p-[20px] aspect-square'>
        Search
        {/* <MagnifyingGlassIcon className='w-6 h-6'/> */}
    </button>
  )
}