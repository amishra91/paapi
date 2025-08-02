interface GoalRingProps {
  label: string;
  icon: string;
  value: string;
  total: string;
  percentage?: number;
  color?: string;
}

const GoalRing = ({ label, icon, value, total, percentage, color = '#f97316' }: GoalRingProps) => {
  const percent = percentage ?? (Number(value) / Number(total)) * 100;
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="text-xl">{icon}</div>
        <div>
          <p className="text-sm font-semibold text-gray-700">{label}</p>
          <p className="text-xs text-gray-400">
            {value}
            {label === 'Running' ? 'km' : 'hrs'}/{total}
            {label === 'Running' ? 'km' : 'hrs'}
          </p>
        </div>
      </div>

      <div className="w-10 h-10 relative">
        <svg className="transform -rotate-90" width="40" height="40">
          <circle cx="20" cy="20" r={radius} fill="none" stroke="#f3f4f6" strokeWidth="4" />
          <circle
            cx="20"
            cy="20"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="4"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-gray-700">
          {Math.round(percent)}%
        </div>
      </div>
    </div>
  );
};

export default GoalRing;
