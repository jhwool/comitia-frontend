// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

// Load Poppins for headings/buttons
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "700"] });

export default function LandingPage() {
  return (
    <main className={`${poppins.className} px-4 py-6`}>
      {/* Rounded gradient hero */}
      <section className="relative mx-auto max-w-[1400px] rounded-[36px] overflow-hidden bg-gradient-to-b from-orange-600 to-[#7E1910]">
        {/* top-right login */}
        <div className="absolute right-6 top-5 z-10">
          <Link href="/auth/sign-in" className="text-white/90 text-lg hover:underline">
            log in
          </Link>
        </div>

        {/* 12-col responsive grid: left 5, right 7 -> matches target proportions */}
        <div className="grid grid-cols-12 gap-8 items-center px-8 sm:px-12 md:px-16 lg:px-20 py-10 md:py-14">
          {/* LEFT: logo + headline + CTA */}
          <div className="col-span-12 lg:col-span-5 text-white">
            {/* brand logo (replaces yellow tag) */}
            <div className="mb-6">
              <Image
                src="/comitia-logo.png"   // <- save your logo as /public/comitia-logo.png
                alt="Comitia logo"
                width={300}
                height={120}
                priority
                className="w-[220px] sm:w-[260px] lg:w-[300px] h-auto"
              />
            </div>

            {/* Headline (two stacked lines with different weights) */}
            <h2 className="text-[42px] sm:text-[56px] lg:text-[66px] leading-[1.1] font-medium">
              Your story
            </h2>
            <h3 className="mt-2 text-[42px] sm:text-[56px] lg:text-[66px] leading-[1.1] font-extrabold">
              Is waiting <br className="hidden sm:block" />
              to be told
            </h3>

            {/* Primary CTA ONLY (Settings button removed) */}
            <div className="mt-10">
              <Link
                href="/create"
                className="inline-flex items-center justify-center rounded-full bg-[#FFF800] text-[#7E1910] text-lg sm:text-xl font-semibold px-8 sm:px-10 py-4 hover:brightness-95 transition"
                aria-label="Go to Main Page"
              >
                Go to Main Page
              </Link>
            </div>
          </div>

          {/* RIGHT: hero mosaic image (slightly larger column span for balance) */}
          <div className="col-span-12 lg:col-span-7">
            {/* outer rounded container for subtle inner edge (like reference) */}
            <div className="relative rounded-[28px] bg-black/10/0 overflow-hidden shadow-2xl ring-1 ring-black/10">
              {/* aspect tuned to mimic reference crop */}
              <div className="relative aspect-[16/10] md:aspect-[16/9]">
                <Image
                  src="/hero-mosaic.png"   // <- save your image as /public/hero-mosaic.png
                  alt="Comic frames collage"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}




