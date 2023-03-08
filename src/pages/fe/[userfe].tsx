import React from 'react'
import { useRouter } from 'next/router'

export default function Fe() {
    
    const router = useRouter()
    const { userfe } = router.query
  
    return (
    <div>Detail Halaman : {userfe}</div>
  )
}