import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../Dashboard/SidebarNav'; // Correct relative path to src/components/Dashboard/SidebarNav.tsx

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside
      className={cn(
        'w-64 h-full', // As per layoutStructure.overall.sizing.sidebar and typical full-height sidebar
        // SidebarNav component (from context) is responsible for its own background (bg-sidebar),
        // text color (text-sidebar-foreground), padding, and internal layout (h-full flex flex-col).
        className
      )}
      aria-label="Sidebar"
    >
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
