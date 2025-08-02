'use client';
import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import ChartCard from '../ChartCard';

import { scatterData } from '@/data/chartData';

const ScatterWeightSleepChart = () => {
  return (
    <ChartCard title="Weight vs Sleep">
      <ResponsiveContainer width="100%" height={200}>
        <ScatterChart>
          <CartesianGrid />
          <XAxis dataKey="weight" name="Weight (kg)" />
          <YAxis dataKey="sleep" name="Sleep (hrs)" />
          <Tooltip />
          <Scatter data={scatterData} fill="#0ea5e9" />
        </ScatterChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default ScatterWeightSleepChart;
