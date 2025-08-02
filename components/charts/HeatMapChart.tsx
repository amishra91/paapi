'use client';

import { Legend, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip } from 'recharts';

import { intensityData } from '@/data/chartData';

const HeatMapChart = () => {
  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
      <h2 className="text-md font-semibold text-gray-800 mb-2">Weekly Intensity</h2>
      <ResponsiveContainer width="100%" height={250}>
        <RadialBarChart innerRadius="40%" outerRadius="80%" barSize={10} data={intensityData}>
          <RadialBar background dataKey="uv" cornerRadius={5} />
          <Tooltip />
          <Legend iconSize={10} layout="vertical" verticalAlign="top" align="left" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HeatMapChart;
