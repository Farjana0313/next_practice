"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'


export default function NotFound() {
    const pathname = usePathname()
    return (
        <>
            <h2 className='font-bold text-xl'>Not Found</h2>
            <p className="my-5">The page <span className='text-red-500'>{pathname}</span> your are requesting was not found</p>

            <Link href="/" className='text-blue-500 pb-2'>Return Home</Link>

        </>
    )
}
