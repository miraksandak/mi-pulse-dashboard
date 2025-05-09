import React from 'react'
import { useRef } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Filler, Legend)

type LineChartProps = {
  title: string
  labels: string[]
  data: number[]
  color: string
  bgColor: string
}

export default function LineChart({ title, labels, data, color, bgColor }: LineChartProps) {
  const chartRef = useRef<any>(null)

  const chartData = {
    labels,
    datasets: [
        {
            label: title,
            data,
            borderColor: color,
            backgroundColor: (ctx: any) => {
            const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 250)
            gradient.addColorStop(0, bgColor)
            gradient.addColorStop(1, 'rgba(255,255,255,0)')
            return gradient
            },
            fill: true,
            tension: 0.4,
            pointRadius: 3,
            pointHoverRadius: 5,
            borderWidth: 3,
        },
    ],      
  }

  const options = {
    responsive: true,
    plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function (context: any) {
              const label = context.dataset.label || ''
              const value = context.parsed.y
              return `${label}: ${value}`
            },
          },
        },
      },      
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#6b7280' },
      },
      y: {
        grid: { color: '#e5e7eb' },
        ticks: { color: '#6b7280' },
      },
    },
    animation: {
        duration: 1000,
        easing: 'easeOutQuart',
        delay(ctx) {
          return ctx.type === 'data' ? ctx.dataIndex * 150 : 0
        }
      }      
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
      <h3 className="text-sm font-semibold mb-4 text-gray-700">{title}</h3>
      <Line ref={chartRef} data={chartData} options={options} />
    </div>
  )
}
