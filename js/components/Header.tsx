import React, { useEffect, useState } from 'react'

export default function Header() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-800 shadow mb-6 transition-colors">
      <div className={`w-56 h-12 bg-contain bg-no-repeat bg-center ${dark ? 'mi-white-logo' : 'mi-logo'}`} />
      <div className="flex items-center gap-2">
        <button
          onClick={() => setDark(!dark)}
          className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded-full transition"
          aria-label="Toggle Dark Mode"
        >
          <i className={`fas ${dark ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
        <button
          onClick={() => window.location.reload()}
          className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded-full transition"
          aria-label="Refresh"
        >
          <i className="fas fa-sync"></i>
        </button>

        <button
        onClick={() => {
          fetch('/logout', { method: 'POST' })
            .then(() => {
              window.location.href = '/login'
            })
            .catch(err => {
              console.error('Logout failed:', err)
            })
        }}
        className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded-full transition"
        aria-label="Sign out"
      >
        <i className="fas fa-sign-out"></i>
      </button>

      </div>
    </header>
  )
}
