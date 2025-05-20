import React from 'react'
import Cdur from 'cdur'
import ChartSection from '../ChartSection'

type DonutData = {
  title: string
  labels: string[]
  data: number[]
  colors: string[]
  total: number
}

type LineData = {
  title: string
  labels: string[]
  data: number[]
  color: string
  bgColor: string
}

type ChartData = {
  donutCharts: DonutData[]
  lineCharts: LineData[]
}

class ChartSectionLoader extends Cdur.Component<{}, { charts: ChartData | null }> {
  init() {
    const promise = fetch('/api/dashboard')
      .then(res => res.json())
      .then((json: any): ChartData => ({
        donutCharts: json.donutCharts,
        lineCharts: json.lineCharts,
      }))

    this.setState(
      'charts',
      Cdur.promise(promise)
        .writeNullOnWait()
        .writeNullOnError()
    )
  }

  renderWait(): JSX.Element {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 relative">
  
        {Array(4).fill(null).map((_, i) => (
          <div
            key={i}
            className="h-[320px] bg-gray-300 dark:bg-gray-700 rounded-3xl animate-pulse"
          />
        ))}
      </section>
    )
  }  

  render(): JSX.Element {
    const charts = this.state.charts
    if (!charts) return this.renderWait()

    return <ChartSection donutCharts={charts.donutCharts} lineCharts={charts.lineCharts} />
  }
}

export default ChartSectionLoader.createRootComponent()
