'use client';

import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { stepsData } from '@/data/chartData';

const LineStepsChart = () => {
  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
      <h2 className="text-md font-semibold text-gray-800 mb-2">Daily Steps</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={stepsData}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="steps"
            stroke="#10b981"
            strokeWidth={3}
            dot={{ fill: '#34d399' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineStepsChart;
