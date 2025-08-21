'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'

const Navbar = () => {
  const pathname = usePathname()
  // console.log(pathname, pathname.includes('dashboard'))
  if(!pathname.includes('dashboard')){
       return (
    <div>
        <ul className='flex justify-center gap-5 py-5 bg-sky-700 '>
          <Link href={'/'}> <li>Home</li> </Link>
          <Link href={'/posts'}> <li>Posts</li> </Link>
          <Link href={'/meals'}> <li>Meals</li> </Link>
        </ul>
    </div>
  )
  }else{
    return <></>
  }
 
}

export default Navbar