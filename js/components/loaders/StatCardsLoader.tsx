import React from 'react'
import Cdur from 'cdur'
import StatCardsGrid from '../StatCardsGrid'

type StatCard = {
  label: string
  value: number
  color: string
}

class StatCardsLoader extends Cdur.Component<{}, { cards: StatCard[] | null }> {
  init() {
    const promise = fetch('/api/dashboard')
      .then(res => res.json())
      .then((json: any): StatCard[] => json.stats)

    this.setState(
      'cards',
      Cdur.promise(promise)
        .writeNullOnWait()
        .writeNullOnError()
    )
  }

  renderWait(): JSX.Element {
    return (
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-5">
        {Array(4).fill(null).map((_, i) => (
          <div
            key={i}
            className="h-[120px] bg-gray-300 dark:bg-gray-700 rounded-3xl animate-pulse"
          />
        ))}
      </section>
    )
  }

  render(): JSX.Element {
    const cards = this.state.cards
    if (!cards) return this.renderWait()

    return <StatCardsGrid cards={cards} />
  }
}

export default StatCardsLoader.createRootComponent()
