import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import StatCardsGrid from './components/StatCardsGrid'
import ChartSection from './components/ChartSection'

function App() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    fetch('/api/dashboard')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error('Failed to load dashboard data:', err))
  }, [])

  if (!data) return <div className="text-center p-10">Loading...</div>

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors">
      <Header />
      <main className="max-w-screen-2xl mx-auto px-4">
        <StatCardsGrid cards={data.stats} />
        <ChartSection donutCharts={data.donutCharts} lineCharts={data.lineCharts} />
      </main>
    </div>
  )
}

export default App
