import BarCaloriesChart from '@/components/charts/BarChart';
import LineStepsChart from '@/components/charts/LineChart';
import PieMacroChart from '@/components/charts/PieChart';
import Header from '@/components/Header';
import { Check, Footprints, GlassWater, HeartPulse, Zap } from 'lucide-react';
import ActivityChart from '../components/charts/ActivityChart';
import AreaHeartRateChart from '../components/charts/AreaChart';
import DonutHydrationChart from '../components/charts/DonutChart';
import HeatMapChart from '../components/charts/HeatMapChart';
import RadarSkillsChart from '../components/charts/RadarChart';
import RunDataChart from '../components/charts/RunDataChart';
import ScatterWeightSleepChart from '../components/charts/ScatterChart';
import StackedWorkoutChart from '../components/charts/StackedBarChart';
import ProfilePanel from '../components/ProfilePanel';
import ProgressTile from '../components/ProgressTile';
import Sidebar from '../components/Sidebar';
import StatTile from '../components/StatTile';

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex flex-1">
        <div className="flex flex-col flex-1">
          <Header />

          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatTile
              icon={<Footprints />}
              label="Steps"
              value="10,550"
              bgColor="#1AB0B0"
              goalMetIcon={<Check />}
            />
            <StatTile icon={<GlassWater />} label="Water" value="1.25 Liters" bgColor="#18a4ed" />
            <StatTile icon={<Zap />} label="Calories" value="4,720 kcal" bgColor="#FA5A7D" />
            <StatTile icon={<HeartPulse />} label="Heart Rate" value="110 bpm" bgColor="#8676FE" />
          </div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ActivityChart />
            <ProgressTile />
          </div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            <LineStepsChart />
            <BarCaloriesChart />
            <PieMacroChart />
            <AreaHeartRateChart />
            <RadarSkillsChart />
            <ScatterWeightSleepChart />
            <StackedWorkoutChart />
            <DonutHydrationChart />
            <HeatMapChart />
            <RunDataChart />
          </div>
        </div>

        <div className="hidden lg:block">
          <ProfilePanel />
        </div>
      </main>
    </div>
  );
}
