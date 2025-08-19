import React from 'react';
import { NavLinkProps } from '@/shared/types/dashboardTypes';

const NavLink: React.FC<NavLinkProps> = ({ href = "#", children }) => {
  return (
    <a href={href} className="hover:text-yellow-400 transition-colors text-sm font-semibold">
      {children}
    </a>
  );
};

export default NavLink;