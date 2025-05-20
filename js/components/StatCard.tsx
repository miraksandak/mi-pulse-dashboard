import React from 'react'

type StatCardProps = {
    label: string
    value: number
    color: string
    delay?: number
  }
  
  export default function StatCard({ label, value, color, delay = 0 }: StatCardProps) {
    return (
      <div
        className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-3xl px-8 py-6 shadow-sm hover:shadow-md transition border border-gray-100 dark:border-gray-700 animate-fadeInUp"
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-5xl font-extrabold tracking-tight" style={{ color }}>{value}</div>
          <div className="text-lg text-gray-700 dark:text-gray-300 mt-2 font-medium">
            {label}
          </div>
        </div>
      </div>
    )
  }
  