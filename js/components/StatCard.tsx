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
        className="bg-white rounded-2xl px-6 py-5 shadow-sm hover:shadow-md transition border border-gray-100 animate-fadeInUp"
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <div className={`text-4xl font-extrabold tracking-tight ${color}`}>{value}</div>
          <div className="text-sm text-gray-700 mt-1 font-medium">{label}</div>
        </div>
      </div>
    )
  }
  