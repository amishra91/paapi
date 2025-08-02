const StatTile = ({
  icon,
  label,
  value,
  bgColor = 'bg-blue-500',
  goalMetIcon,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  bgColor?: string;
  image?: string;
  goalMetIcon?: React.ReactNode;
}) => {
  const bgImage = 'url(/images/bg.svg)';
  return (
    <div
      className={`rounded-2xl p-4 text-white shadow-md flex flex-col justify-between h-32`}
      style={{
        background: bgImage,
        backgroundColor: bgColor,
      }}
    >
      <div className="flex justify-between">
        <div className="text-2xl">{icon}</div>
        <div className="text-2xl">{goalMetIcon && goalMetIcon}</div>
      </div>
      <div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-sm opacity-90">{label}</div>
      </div>
    </div>
  );
};

export default StatTile;
