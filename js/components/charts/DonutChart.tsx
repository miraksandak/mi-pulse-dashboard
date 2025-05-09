import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

type DonutChartProps = {
  title: string
  labels: string[]
  data: number[]
  colors: string[]
  total: number
}

export default function DonutChart({ title, labels, data, colors, total }: DonutChartProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
        <div className="flex flex-col items-center">
        <h3 className="text-base font-semibold text-gray-800 mb-4">{title}</h3>

        <div className="relative w-[160px] h-[160px] mb-4">
          <Doughnut
            data={{
              labels,
              datasets: [
                {
                  data,
                  backgroundColor: colors,
                  borderWidth: 0,
                  hoverOffset: 0,
                },
              ],
            }}
            options={{
              cutout: '70%',
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
              },
              animation: {
                animateRotate: true,
                animateScale: true,
                duration: 1000,
                delay(ctx) {
                  return ctx.type === 'data' ? ctx.dataIndex * 300 : 0
                },
                easing: 'easeOutQuart',
              },
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center text-sm text-gray-500">
              Total<br />
              <span className="text-xl font-bold text-gray-800">
                {total.toLocaleString('cs-CZ')}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-600">
          {labels.map((label, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-full shadow-sm"
                style={{ backgroundColor: colors[idx] }}
              />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
