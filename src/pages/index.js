import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Button from './component/button'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [number ,updateNumber] = useState(0)

  return (
    <main
      className={`flex min-h-screen flex-col items-center  p-24  ${inter.className}`}
    >
      <h1>Next Js </h1>

      <div className='mt-5' >

      <Link className='p-2 m-2 bg-red-400 rounded text-white'  href={'/login'}>login</Link>
      <Link className='p-2 m-2 bg-red-400 rounded text-white' href={'/contact'}>contact</Link>
      <Link className='p-2 m-2 bg-red-400 rounded text-white' href={'/about'}>about</Link>
      <Link className='p-2 m-2 bg-red-400 rounded text-white' href={'/students'}>Students</Link>

      </div>
  <h1 className='my-2'>Counter App</h1>
<div className='flex gap-[100px]'>
  <Button onClick={()=>{
    updateNumber(number+1)
  }}>+</Button>
  <h2 className='text-[40px] font-bold'>{number}</h2>
  <Button onClick={()=>{
    updateNumber(number-1)
  }}>-</Button>
</div>
    </main>
  )
}
