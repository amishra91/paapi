'use client';

import { Activity, Dumbbell, Flame, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { icon: <Home size={20} />, href: '/', label: 'Home' },
  { icon: <Activity size={20} />, href: '/activity', label: 'Activity' },
  { icon: <Flame size={20} />, href: '/calories', label: 'Calories' },
  { icon: <Dumbbell size={20} />, href: '/workout', label: 'Workout' },
];
const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-16 bg-white border-r border-gray-100 flex flex-col items-center py-4 space-y-6">
      <div className="text-orange-500 text-2xl font-bold">🏋️‍♂️</div>

      {menuItems.map((item, idx) => {
        const isActive = item.href === '/' || item.href === '/dashboard';

        return (
          <Link key={idx} href={item.href}>
            <div
              className={`transition ${
                isActive && pathname === item.href
                  ? 'text-orange-500'
                  : 'text-gray-400 hover:text-orange-500'
              }`}
            >
              {item.icon}
            </div>
          </Link>
        );
      })}
    </aside>
  );
};

export default Sidebar;
