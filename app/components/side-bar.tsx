import { NavLink } from "@remix-run/react";
import { cn } from "~/lib/utils";
import type { SideNavItem } from "~/types";


interface SidebarProps {
  items: SideNavItem[];
}

export default function Sidebar({ items }: SidebarProps) {
  return (
    <aside className={cn("hidden md:fixed md:block md:h-full overflow-auto md:w-[200px] border border-r-muted",)}>
      <nav className="grid items-start gap-2 px-8 py-4">
        {items.length
          ? items.map((item, i) => (
              <NavLink
                key={i}
                className={({ isActive, isPending }) =>
                  cn(
                    isActive
                      ? "font-medium bg-muted"
                      : isPending
                      ? "pending"
                      : "",
                    "px-3 py-2 rounded-lg hover:bg-muted"
                  )
                }
                to={item.href}
                end
              >
                {item.title}
              </NavLink>
            ))
          : null}
      </nav>
    </aside>
  );
}
