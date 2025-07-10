import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='h-12 md:h-24 p-3 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between'>
            <Link href="/" className='folt-bold text-xl'>MASSIMO</Link>
            <p>© ALL RIGHTS RESERVED.</p>
        </div>
    )
}
