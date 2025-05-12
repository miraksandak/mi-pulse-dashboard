import React from 'react'
import DonutChart from './charts/DonutChart'
import LineChart from './charts/LineChart'

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

type Props = {
  donutCharts: DonutData[]
  lineCharts: LineData[]
}

export default function ChartSection({ donutCharts, lineCharts }: Props) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      {donutCharts.map((chart, idx) => (
        <DonutChart key={idx} {...chart} />
      ))}
      {lineCharts.map((chart, idx) => (
        <LineChart key={idx} {...chart} />
      ))}
    </section>
  )
}
