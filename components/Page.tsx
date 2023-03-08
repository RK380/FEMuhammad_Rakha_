import React from 'react'

export default function Page({value,onChange}:Props) {
  return (
    <input placeholder='Search User Akun Github' className='border border-zinc-100 p-[20px] rounded-[8px]' 
    value={value}
    onChange={onChange}
    />
  )
}

interface Props{
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

