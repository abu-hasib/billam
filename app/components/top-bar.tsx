import { SignedOut, SignedIn, UserButton } from "@clerk/remix";
import { ModeToggle } from "./mode-toggle";
import { Link } from "@remix-run/react";

export default function Navbar() {
  return (
    <header className="w-full border border-b-muted">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link className="font-bold text-4xl" to="/">
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
                <div>
                  <UserButton />
                </div>
              </SignedIn>
              <li>
                <ModeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
