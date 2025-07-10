import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import CartIcon from './CartIcon';
import Image from 'next/image';

export default function Navbar() {

  const user = false;

  return (
      <div className='flex justify-between items-center h-12 text-red-500 p-4 border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40'>
        {/* LEFT LINKS */}
        <div className='hidden md:flex gap-4 flex-1'>
          <Link href="/">Homepage</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/contact">Contact</Link>
        </div>
        {/* LOGO */}
        <div className='text-xl md:font-bold flex-1 md:text-center'>
          <Link href="/">MASSIMO</Link>
        </div>
        {/* MOBILE VIEW */}
        <div className='md:hidden'>
          <Menu />
        </div>
        {/* RIGHT LINKS */}
        <div className='hidden md:flex items-center gap-4 flex-1 justify-end'>
          <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
            <Image src="/phone.png" alt='' width={20} height={20} />
            <span>+91 1234567890</span>
          </div>
          {!user ? (
            <Link href="/login">Login</Link>
          ) : (
            <Link href="/menu">Orders</Link>
          )}
          <CartIcon />
        </div>
      </div>
  )
}
