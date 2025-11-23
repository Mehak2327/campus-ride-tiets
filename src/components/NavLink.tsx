import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import cn from "classnames";

export function NavLink({
  to,
  children,
  className,
  activeClassName = "",
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "px-5 py-2 rounded-full text-sm font-medium transition",
          isActive
            ? `bg-white text-[#7B0000] font-semibold ${activeClassName}`
            : "text-white hover:bg-white/20",
          className
        )
      }
    >
      {children}
    </RouterNavLink>
  );
}
