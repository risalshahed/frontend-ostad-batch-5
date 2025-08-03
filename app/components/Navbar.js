import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="py-6">
    <ul className="flex gap-x-8">
      <li>
        <Link href='/'>
          Home
        </Link>
      </li>
      <li>
        <Link href='/about'>
          About
        </Link>
      </li>
      <li>
        <Link href='/posts'>
          Posts
        </Link>
      </li>
    </ul>
  </nav>
  )
}
