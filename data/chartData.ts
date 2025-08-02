export type ProgressDataItem = { name: string; value: number; color: string };

export type ViewType = 'Daily' | 'Weekly' | 'Monthly';

export type ActivityDataItem = { day: string; value: number };

export const activityData: Record<ViewType, ActivityDataItem[]> = {
  Daily: [
    { day: '6 AM', value: 5 },
    { day: '9 AM', value: 10 },
    { day: '12 PM', value: 8 },
    { day: '3 PM', value: 12 },
    { day: '6 PM', value: 18 },
    { day: '9 PM', value: 10 },
  ],
  Weekly: [
    { day: 'Mon', value: 12 },
    { day: 'Tue', value: 25 },
    { day: 'Wed', value: 18 },
    { day: 'Thu', value: 24 },
    { day: 'Fri', value: 32 },
    { day: 'Sat', value: 20 },
    { day: 'Sun', value: 14 },
  ],
  Monthly: [
    { day: 'Week 1', value: 100 },
    { day: 'Week 2', value: 120 },
    { day: 'Week 3', value: 90 },
    { day: 'Week 4', value: 110 },
  ],
};

export const progressData: Record<ViewType, ProgressDataItem[]> = {
  Daily: [
    { name: 'Cardio', value: 2, color: '#14b8a6' },
    { name: 'Stretching', value: 3, color: '#f97316' },
    { name: 'Treadmill', value: 2, color: '#ec4899' },
    { name: 'Strength', value: 1, color: '#8b5cf6' },
  ],
  Weekly: [
    { name: 'Cardio', value: 30, color: '#14b8a6' },
    { name: 'Stretching', value: 40, color: '#f97316' },
    { name: 'Treadmill', value: 30, color: '#ec4899' },
    { name: 'Strength', value: 20, color: '#8b5cf6' },
  ],
  Monthly: [
    { name: 'Cardio', value: 100, color: '#14b8a6' },
    { name: 'Stretching', value: 120, color: '#f97316' },
    { name: 'Treadmill', value: 110, color: '#ec4899' },
    { name: 'Strength', value: 80, color: '#8b5cf6' },
  ],
};

export const heartRateData = [
  { time: '6 AM', bpm: 60 },
  { time: '9 AM', bpm: 72 },
  { time: '12 PM', bpm: 85 },
  { time: '3 PM', bpm: 78 },
  { time: '6 PM', bpm: 90 },
  { time: '9 PM', bpm: 70 },
];

export const calorieData = [
  { day: 'Mon', calories: 450 },
  { day: 'Tue', calories: 700 },
  { day: 'Wed', calories: 600 },
  { day: 'Thu', calories: 800 },
  { day: 'Fri', calories: 750 },
  { day: 'Sat', calories: 670 },
  { day: 'Sun', calories: 550 },
];

export const hydrationData = [
  { name: 'Drank', value: 75 },
  { name: 'Remaining', value: 25 },
];

export const intensityData = [
  { name: 'Mon', uv: 80, fill: '#14b8a6' },
  { name: 'Tue', uv: 90, fill: '#f97316' },
  { name: 'Wed', uv: 60, fill: '#ec4899' },
  { name: 'Thu', uv: 70, fill: '#8b5cf6' },
  { name: 'Fri', uv: 100, fill: '#fb923c' },
  { name: 'Sat', uv: 40, fill: '#60a5fa' },
  { name: 'Sun', uv: 50, fill: '#facc15' },
];

export const stepsData = [
  { time: '6 AM', steps: 200 },
  { time: '9 AM', steps: 300 },
  { time: '12 PM', steps: 500 },
  { time: '3 PM', steps: 700 },
  { time: '6 PM', steps: 800 },
  { time: '9 PM', steps: 650 },
];

export const macroData = [
  { name: 'Protein', value: 40 },
  { name: 'Carbs', value: 35 },
  { name: 'Fat', value: 25 },
];

export const skillData = [
  { subject: 'Strength', A: 120 },
  { subject: 'Endurance', A: 98 },
  { subject: 'Flexibility', A: 86 },
  { subject: 'Speed', A: 99 },
  { subject: 'Agility', A: 85 },
  { subject: 'Power', A: 90 },
];

export const runData = [
  { day: 'Mon', distance: 2.4 },
  { day: 'Tue', distance: 3.5 },
  { day: 'Wed', distance: 5.0 },
  { day: 'Thu', distance: 4.2 },
  { day: 'Fri', distance: 6.0 },
  { day: 'Sat', distance: 3.8 },
  { day: 'Sun', distance: 5.4 },
];

export const scatterData = [
  { weight: 70, sleep: 7 },
  { weight: 72, sleep: 6.5 },
  { weight: 68, sleep: 8 },
  { weight: 71, sleep: 6 },
  { weight: 69, sleep: 7.5 },
];

export const workoutData = [
  { day: 'Mon', cardio: 30, strength: 20 },
  { day: 'Tue', cardio: 45, strength: 15 },
  { day: 'Wed', cardio: 25, strength: 25 },
  { day: 'Thu', cardio: 40, strength: 10 },
  { day: 'Fri', cardio: 35, strength: 30 },
];
