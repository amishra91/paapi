'use client';

import Image from 'next/image';
import GoalRing from './GoalRing';

const ProfilePanel = () => {
  return (
    <aside className="w-full bg-white h-full p-4 border-l border-gray-100 space-y-6">
      <div className="flex items-center space-x-4">
        <Image
          src="/images/user.png"
          alt="Profile"
          width={150}
          height={150}
          className="w-14 h-14 rounded-full"
        />
        <div>
          <h2 className="text-sm font-semibold text-gray-800">Abhishek Mishra</h2>
          <p className="text-xs text-gray-500">Bangalore, India</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div>
          <p className="text-sm font-semibold text-gray-800">75</p>
          <p className="text-xs text-gray-500">kg</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800">6.5</p>
          <p className="text-xs text-gray-500">Height</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800">25</p>
          <p className="text-xs text-gray-500">Age</p>
        </div>
      </div>

      <div className="space-y-4">
        <GoalRing label="Running" icon="🏃" value="70" total="80" color="#34d399" />
        <GoalRing label="Sleeping" icon="😴" value="50" total="60" color="#f97316" />
        <GoalRing label="Weight Loss" icon="🔥" value="70" total="100" color="#a855f7" />
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-gray-800">Monthly Progress</h3>
        <GoalRing
          label="Monthly"
          icon="📅"
          value="80"
          total="100"
          color="#f97316"
          percentage={80}
        />
      </div>

      {/* <div className="space-y-2">
        <h3 className="text-sm font-semibold text-gray-800">Insights</h3>
        <p className="text-sm text-gray-800">
          💧 You are drinking less water than recommended amount
        </p>
      </div> */}
    </aside>
  );
};

export default ProfilePanel;
