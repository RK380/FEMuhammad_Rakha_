import { ChevronRightIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { User } from '../types/User'
import Image from 'next/image'
import Link from 'next/link'

export default function ItemUser({user}:Props) {
  return (
    <div className='flex justify-between items-center w-full hover:bg-slate-200 px-[20px] py-[5px]'>
        <div className='inline-flex items-center space-x-3'>
            <Image alt="profile" width={40} height={40} src={user?.avatar_url} className='rounded-full' />
            <span>{user.login}</span>
        </div>
        <span className='hover:bg-white hover:text-black p-3'><Link href={`/fe/${user.login}`}><ChevronRightIcon className='w-2 h-2'/>Detail</Link></span>
    </div>
  )
}

interface Props{
    user:User
}