import { Particles } from "./particles";
import { ArrowRight } from "lucide-react";
import { Link } from "@remix-run/react";

export const Hero: React.FC = () => {
  return (
    <section>
      <div className="relative max-w-6xl min-h-screen px-4 mx-auto sm:px-6">
        {/* Particles animation */}
        <Particles className="absolute inset-0 -z-10 dark:" />

        <div className="pt-32 pb-16 md:pt-48 md:pb-32">
          {/* Hero content */}
          <div className="container mx-auto text-center">
            <div className="mb-6" data-aos="fade-down">
              <div className="relative inline-flex before:absolute before:inset-0 ">
                <Link
                  className="px-3 py-1 text-sm font-medium inline-flex items-center justify-center border bg-muted dark:bg-transparent rounded-full  dark:text-zinc-300 dark:hover:text-white transition duration-150 ease-in-out w-full"
                  to="https://github.com/chronark/highstorm"
                  target="_blank"
                >
                  <span className="relative inline-flex items-center">
                    Star on Github
                    <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
                  </span>
                </Link>
              </div>
            </div>
            <h1
              className="pb-4 font-extrabold tracking-tight dark:text-transparent text-7xl lg:text-8xl text-neutral-950 bg-clip-text dark:bg-gradient-to-r dark:from-zinc-200/60 dark:via-zinc-200 dark:to-zinc-200/60"
              data-aos="fade-down"
            >
              Invoicing for SMBs
            </h1>
            <p className="mb-8 text-lg text-muted-foreground dark:text-zinc-300" data-aos="fade-down" data-aos-delay="200">
              Let's support you on your journey to greatness
            </p>
            <div
              className="flex flex-col items-center max-w-xs mx-auto gap-4 sm:max-w-none  sm:justify-center sm:flex-row sm:inline-flex"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <Link
                className="w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-muted dark:bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                to="/overview"
              >
                Get Started
                <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
              </Link>

              <Link
                className="w-full transition duration-150 ease-in-out bg-opacity-25 dark:text-zinc-200 dark:hover:text-white hover:bg-opacity-30"
                to="https://github.com/chronark/highstorm"
                target="_blank"
              >
                Star on GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
