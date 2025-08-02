const ChartCard = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ChartCard;
