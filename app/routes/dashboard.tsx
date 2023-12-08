import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/remix";
import { Outlet } from "@remix-run/react";
import Sidebar from "~/components/side-bar";
import Navbar from "~/components/top-bar";
import { dashboardConfig } from "~/config/dashboard";

export default function SignInPage() {
  return (
    <>
      <SignedIn>
        <div className="max-h-screen max-w-screen overflow-x-hidden">
        <Navbar items={dashboardConfig.sidebarNav}/>
          <div className="relative">
            <Sidebar items={dashboardConfig.sidebarNav}/>
            <main className="pt-20 flex justify-center md:ml-[200px] h-full">
              <Outlet />
            </main>
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn redirectUrl="/sign-in" />
      </SignedOut>
    </>
  );
}
