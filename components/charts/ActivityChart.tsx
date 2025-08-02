'use client';

import { activityData, ViewType } from '@/data/chartData';
import { useState } from 'react';
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const activeBarColor = '#fb923c';
const defaultBarColor = '#e0e7ff';

const ActivityChart = () => {
  const [view, setView] = useState<ViewType>('Weekly');
  const data = activityData[view];
  const [selected, setSelected] = useState(data[0].day);

  const handleViewChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newView = e.target.value as ViewType;
    setView(newView);
    setSelected(activityData[newView][0].day);
  };

  return (
    <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-md font-semibold text-gray-800">Activity</h2>
        <select
          className="text-sm border bg-gray-100 px-2 py-1 rounded-md text-gray-600"
          value={view}
          onChange={handleViewChange}
        >
          {Object.keys(activityData).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={data}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#9ca3af' }}
          />
          <Tooltip
            cursor={{ fill: 'transparent' }}
            content={({ active, payload }) =>
              active && payload?.length ? (
                <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow">
                  {payload[0].value}%
                </div>
              ) : null
            }
          />
          <Bar dataKey="value" radius={[6, 6, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.day === selected ? activeBarColor : defaultBarColor}
                onClick={() => setSelected(entry.day)}
                cursor="pointer"
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
