'use client';

import { heartRateData } from '@/data/chartData';
import { Area, AreaChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const HeartRateChart = () => {
  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
      <h2 className="text-md font-semibold text-gray-800 mb-2">Heart Rate</h2>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={heartRateData}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="bpm" stroke="#ec4899" fill="#fbcfe8" strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HeartRateChart;
