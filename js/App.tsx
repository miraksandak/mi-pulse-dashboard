import React from 'react'
import Header from './components/Header'
import StatCardsGrid from './components/StatCardsGrid'
import ChartSection from './components/ChartSection'

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="max-w-screen-xl mx-auto px-4">
        <StatCardsGrid />

          <ChartSection />
      </main>
    </div>
  )
}

export default App
