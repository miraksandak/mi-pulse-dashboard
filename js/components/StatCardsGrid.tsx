import React from 'react'
import StatCard from './StatCard'

export default function StatCardsGrid() {
  const cards = [
    { label: "Live Hotels", value: 128, color: "text-[#006940]" },
    { label: "Pre-Install + Reinstall", value: 15, color: "text-yellow-500" },
    { label: "Installation", value: 6, color: "text-blue-500" },
    { label: "Maintenance", value: 22, color: "text-red-500" },
  ]

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-10">
      {cards.map((card, i) => (
        <StatCard key={i} {...card} delay={i * 300} />
      ))}
    </section>
  )
}
