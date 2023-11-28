import type { MetaFunction } from "@remix-run/node";
import { Cta } from "~/components/landing/cta";
import { Features } from "~/components/landing/features";
import { Hero } from "~/components/landing/hero";
import { Pricing } from "~/components/landing/pricing";
import { ModeToggle } from "~/components/mode-toggle";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen max-w-screen overflow-x-hidden">
      <header className="w-full">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex items-center justify-between h-16">
            <a href="/">Billam</a>
            <nav>
              <ul className="flex gap-2 items-center">
                <li>Sign in</li>
                <li>
                  <ModeToggle />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Hero />
      <Features />
      {/* <Pricing /> */}
      <Cta />
    </div>
  );
}
