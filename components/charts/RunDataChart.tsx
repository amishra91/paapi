'use client';
import { runData } from '@/data/chartData';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import ChartCard from '../ChartCard';

const RunDataChart = () => {
  return (
    <ChartCard title="Run Distance (km)">
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={runData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="distance" stroke="#0ea5e9" strokeWidth={3} dot />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default RunDataChart;
