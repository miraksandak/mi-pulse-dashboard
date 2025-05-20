import React from 'react'
import Header from './components/Header'
import StatCardsLoader from './components/loaders/StatCardsLoader'
import ChartSectionLoader from './components/loaders/ChartSectionLoader'

export default function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors">
      <Header />
      <main className="max-w-screen-2xl mx-auto px-4">
        <StatCardsLoader.View />
        <ChartSectionLoader.View />
      </main>
    </div>
  )
}
