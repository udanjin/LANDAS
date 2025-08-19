import React from 'react';
import { NavIconProps } from '@/shared/types/dashboardTypes';

const NavIcon: React.FC<NavIconProps> = ({ href = "#", children }) => {
  return (
    <a href={href} className="hover:text-yellow-400 transition-colors">
      {children}
    </a>
  );
};

export default NavIcon;