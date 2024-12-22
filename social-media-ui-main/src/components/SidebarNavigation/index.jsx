import React from 'react';
import { Home, User, MessageSquare } from 'lucide-react';
import { Card } from '@/components/ui/card';

const SidebarNavigation = () => {
  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: MessageSquare, label: 'Messages', path: '/messages' }
  ];

  return (
    <Card className="w-64 p-4 fixed left-4 top-24 bg-white">
      <nav>
        {navItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 cursor-pointer mb-2"
          >
            <item.icon className="w-6 h-6" />
            <span className="text-gray-700 font-medium">{item.label}</span>
          </div>
        ))}
      </nav>
    </Card>
  );
};

export default SidebarNavigation;