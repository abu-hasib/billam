import type { MetaFunction } from "@remix-run/node";
import { Cta } from "~/components/landing/cta";
import { Features } from "~/components/landing/features";
import { Hero } from "~/components/landing/hero";
import Navbar from "~/components/top-bar";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen max-w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      {/* <Pricing /> */}
      <Cta />
    </div>
  );
}
