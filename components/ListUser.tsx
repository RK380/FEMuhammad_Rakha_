import React from 'react'
import { SearchRes } from '../types/SearchRes'
import ItemUser from './ItemUser'

export default function ListUser({result}:Props) {
  return (
    <div className='border rounded-[8px] w-full space-y-3 pb-10'>
        <p className='text-center p-[20px]'>List : <span className='font-bold'>Hunt</span></p>
        {result?.users.map((user,index)=>(
            <ItemUser key={index} user={user}/>
        ))}
    </div>
  )
}

interface Props{
    result?:SearchRes
}