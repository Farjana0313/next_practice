import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <div>
        <nav className='p-5 border-b'>
            <ul className='flex gap-4'>
                <li>Settins</li>
                <li>Analytics</li>
            </ul>
        </nav>
      {children}
    </div>
  )
}
