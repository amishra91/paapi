'use client';
import { workoutData } from '@/data/chartData';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ChartCard from '../ChartCard';

const StackedWorkoutChart = () => {
  return (
    <ChartCard title="Cardio vs Strength (min)">
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={workoutData}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="cardio" stackId="a" fill="#3b82f6" />
          <Bar dataKey="strength" stackId="a" fill="#8dc6ff" />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default StackedWorkoutChart;
