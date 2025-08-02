'use client';

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

import { hydrationData } from '@/data/chartData';

const COLORS = ['#14b8a6', '#e5e7eb'];

const DonutHydrationChart = () => {
  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
      <h2 className="text-md font-semibold text-gray-800 mb-2">Hydration</h2>
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={hydrationData}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={80}
            startAngle={90}
            endAngle={-270}
            paddingAngle={3}
          >
            {hydrationData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonutHydrationChart;
