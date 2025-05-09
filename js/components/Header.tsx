import React from 'react'

export default function Header() {
    return (
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow mb-6">
        <div
          className="w-56 h-12 bg-contain bg-no-repeat bg-center mi-logo"
        />
        <button
          onClick={() => window.location.reload()}
          className="text-gray-600 hover:text-gray-900 text-xl p-2 rounded-full hover:bg-gray-100 transition bg-white shadow"
          aria-label="Refresh"
        >
          <i className="fas fa-sync"></i>
        </button>
      </header>
    )
  }
  