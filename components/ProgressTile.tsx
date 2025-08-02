'use client';

import { progressData, ViewType } from '@/data/chartData';
import { useState } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

const ProgressTile = () => {
  const [view, setView] = useState<ViewType>('Weekly');
  const data = progressData[view];
  const topActivity = data.reduce((a, b) => (b.value > a.value ? b : a));

  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-md font-semibold text-gray-800">Progress</h2>
        <select
          className="text-sm border px-2 py-1 rounded-md text-gray-600 bg-gray-100"
          value={view}
          onChange={(e) => setView(e.target.value as ViewType)}
        >
          {Object.keys(progressData).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between mt-4">
        <div className="relative w-[180px] h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={60}
                outerRadius={80}
                startAngle={90}
                endAngle={-270}
                paddingAngle={2}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-xs text-gray-400">{topActivity.name}</div>
            <div className="text-md font-bold text-gray-800">{topActivity.value} hrs</div>
          </div>
        </div>

        <div className="space-y-2 mt-4 md:mt-0">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-gray-600">{item.name}</span>
              <span className="ml-auto text-gray-500">{item.value} hrs</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressTile;
