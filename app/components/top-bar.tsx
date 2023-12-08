import { SignedOut, SignedIn, UserButton } from "@clerk/remix";
import { ModeToggle } from "./mode-toggle";
import { Link, NavLink } from "@remix-run/react";
import { Icons } from "./icons";
import { useState } from "react";
import type { SideNavItem } from "~/types";
import { cn } from "~/lib/utils";

interface NavBarProps {
  items?: SideNavItem[];
}

export default function Navbar({ items }: NavBarProps) {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <header className="w-full border border-b-muted">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex items-center justify-between h-16 relative">
          <Link className="font-bold text-3xl" to="/">
            Billiam
          </Link>
          <nav>
            <ul className="flex gap-2 items-center">
              <li>
                <SignedOut>
                  <Link to="sign-in">Sign in</Link>
                </SignedOut>
              </li>
              <SignedIn>
                <div className="max-w-[32px] max-h-[32px] rounded-full">
                  <UserButton />
                </div>
              </SignedIn>
              <li>
                <ModeToggle />
              </li>
              <li
                className="md:hidden"
                onClick={() => setShowMobileNav(!showMobileNav)}
              >
                {!showMobileNav ? <Icons.Command /> : <Icons.X />}
              </li>
            </ul>
          </nav>
          {showMobileNav && (
            <div className="fixed md:hidden bg-popover shadow-md text-popover-foreground border border-muted z-10 px-4 w-full left-0 top-[10%] h-40">
              <nav className="grid items-start gap-2 px-8 py-4">
                {items?.length
                  ? items.map((item, i) => (
                      <NavLink
                        key={i}
                        onClick={() => setShowMobileNav(false)}
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
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
