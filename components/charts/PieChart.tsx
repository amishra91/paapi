'use client';
import { macroData } from '@/data/chartData';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import ChartCard from '../ChartCard';
const COLORS = ['#3b82f6', '#10b981', '#f87171'];

const PieMacroChart = () => {
  return (
    <ChartCard title="Macronutrient Breakdown">
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={macroData}
            dataKey="value"
            nameKey="name"
            outerRadius={70}
            label
            fill="#3b82f6"
          >
            {macroData.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default PieMacroChart;
