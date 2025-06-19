import React from 'react';
import { cn } from '@/lib/utils';
import TopHeader from '../Dashboard/TopHeader'; // Correct relative path to src/components/Dashboard/TopHeader.tsx

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  // This Header component wraps TopHeader and applies fixed positioning as per layoutStructure.header.position.
  // TopHeader component (from context) defines its own height (h-16 as per layoutStructure.header.height),
  // background, border, and shadow.
  // The 'left-64' class assumes the sidebar is 'w-64' (16rem) wide and fixed/static to its left.
  // The main content area in AdminLayout will need top padding (e.g., pt-16) to offset this fixed header.
  return (
    <header
      className={cn(
        'fixed top-0 left-64 right-0 z-40',
        // Tailwind's 'w-64' class corresponds to 16rem, so 'left-64' applies `left: 16rem;`.
        // z-index is set to 40, typically below modals (z-50) but above most page content.
        className
      )}
      role="banner" // For accessibility, identifying this as a main banner/header landmark
    >
      <TopHeader />
    </header>
  );
};

export default Header;
