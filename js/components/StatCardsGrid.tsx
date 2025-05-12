import React from 'react'
import StatCard from './StatCard'

type Props = {
  cards: { label: string; value: number; color: string }[]
}

export default function StatCardsGrid({ cards }: Props) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-5">
      {cards.map((card, i) => (
        <StatCard key={i} {...card} delay={i * 300} />
      ))}
    </section>
  )
}
