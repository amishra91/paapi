'use client';

import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { calorieData } from '@/data/chartData';

const BarCaloriesChart = () => {
  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
      <h2 className="text-md font-semibold text-gray-800 mb-2">Calories Burned</h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={calorieData}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="calories" fill="#f97316" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarCaloriesChart;
