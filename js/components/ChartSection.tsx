import React from 'react'
import DonutChart from './charts/DonutChart'
import LineChart from './charts/LineChart'

export default function ChartSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      <DonutChart
        title="Managed Devices"
        labels={['AP', 'Switch', 'GW+FW']}
        data={[1200, 450, 120]}
        colors={['#1abc9c', '#9b59b6', '#f39c12']}
        total={1770}
      />
      <DonutChart
        title="Monthly Closed Tickets"
        labels={['TechSupport', 'Helpline']}
        data={[480, 220]}
        colors={['#e74c3c', '#3498db']}
        total={700}
      />
      <LineChart
        title="Bandwidth (last 7 days)"
        labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
        data={[2.8, 3.1, 3.0, 2.9, 3.2, 3.4, 3.1]}
        color="#3498db"
        bgColor="rgba(52, 152, 219, 0.2)"
      />
      <LineChart
        title="Rooms Operated (last 7 days)"
        labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
        data={[14000, 14120, 14200, 14350, 14410, 14500, 14520]}
        color="#2ecc71"
        bgColor="rgba(46, 204, 113, 0.2)"
      />
    </section>
  )
}
