'use client';
import { skillData } from '@/data/chartData';
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts';
import ChartCard from '../ChartCard';

const RadarSkillsChart = () => {
  return (
    <ChartCard title="Fitness Skills Radar">
      <ResponsiveContainer width="100%" height={200}>
        <RadarChart data={skillData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar dataKey="A" stroke="#3b82f6" fill="#93c5fd" fillOpacity={0.5} />
        </RadarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

export default RadarSkillsChart;
