'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const projects = [
    { name: 'Projekt läsning 6-åring', href: 'https://www.mikkelwulff.se/orden' },
    { name: 'Projekt video', href: 'https://www.nohili.io' },
    // lägg till fler projekt här
  ]

  return (
    <nav className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col justify-between w-8 h-6 focus:outline-none"
      >
        {/* Hamburger-ikonen: tre streck */}
        <span
          className={`block h-1 bg-white transition-transform ${
            open ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`block h-1 bg-white transition-opacity ${
            open ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`block h-1 bg-white transition-transform ${
            open ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Dropdown-meny */}
      {open && (
        <div className="mt-2 bg-black bg-opacity-80 backdrop-blur-sm rounded-lg py-2 px-4 flex flex-col space-y-2">
          {projects.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              target="_blank"
              className="text-white hover:underline"
            >
              {p.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
