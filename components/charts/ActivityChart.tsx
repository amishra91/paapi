/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { activityData, ViewType } from '@/data/chartData';
import { useEffect, useState } from 'react';
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis } from 'recharts';

const activeBarColor = '#fb923c';
const defaultBarColor = '#e0e7ff';

const ActivityChart = () => {
  const [view, setView] = useState<ViewType>('Weekly');
  const data = activityData[view];
  const [selected, setSelected] = useState(data[0].day);

  const [apiData, setApiData] = useState<any>();

  const handleViewChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newView = e.target.value as ViewType;
    setView(newView);
    setSelected(activityData[newView][0].day);
  };

  const fetchData = async () => {
    const url =
      'https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=2025-04-01&end_date=2025-04-02&hourly=temperature_2m';

    const resp = await fetch(url, {
      method: 'GET',
    });
    const data = await resp.json();
    const hourlyData = data.hourly.time.map((time: string, index: number) => ({
      time,
      temp: data.hourly.temperature_2m[index],
    }));
    setApiData(hourlyData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log('apiData=', apiData);

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

      {apiData ? (
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={apiData}>
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9ca3af' }}
            />
            {/* <Tooltip
            cursor={{ fill: 'transparent' }}
            content={({ active, payload }) =>
              active && payload?.length ? (
                <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded-md shadow">
                  {payload[0].value}%
                </div>
              ) : null
            }
          /> */}
            <Bar dataKey="temp" radius={[6, 6, 0, 0]}>
              {apiData.map((entry: any, index: number) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.time === selected ? activeBarColor : defaultBarColor}
                  onClick={() => setSelected(entry.time)}
                  cursor="pointer"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ActivityChart;
