// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

// Load Poppins for headings/buttons
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "700"] });

export default function LandingPage() {
  return (
    <main className={`${poppins.className} px-4 py-6`}>
      {/* Outer container: rounded, overflow-hidden, warm gradient */}
      <section className="relative mx-auto max-w-[1920px] rounded-[48px] overflow-hidden bg-gradient-to-b from-orange-600 to-[#7E1910]">
        {/* Top-right login link */}
        <div className="absolute right-6 top-5 z-10">
          <Link href="/auth/sign-in" className="text-white/90 text-lg hover:underline">
            log in
          </Link>
        </div>

        {/* 2-column responsive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-8 sm:px-12 md:px-16 lg:px-20 py-12">
          {/* Left: logo tag, headline, CTA buttons */}
          <div className="text-white">
            {/* Brand tag (replace with real logo later) */}
            <div className="inline-flex items-center gap-3 bg-[#FFF800] text-[#7E1910] rounded-2xl px-4 py-2 mb-6 font-semibold">
              Comitia
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl leading-tight font-medium">
              Your story
            </h2>
            <h3 className="mt-2 text-4xl sm:text-6xl md:text-7xl leading-tight font-bold">
              Is waiting <br className="hidden sm:block" />
              to be told
            </h3>

            {/* Primary actions */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/create"
                className="inline-flex items-center justify-center rounded-full bg-[#FFF800] text-[#7E1910] text-xl font-medium px-8 py-4 hover:brightness-95 transition"
                aria-label="Go to Main Page"
              >
                Go to Main Page
              </Link>

              {/* Optional quick links from landing */}
              <Link href="/settings" className="button-secondary text-center">
                Settings
              </Link>
            </div>
          </div>

          {/* Right: provided mosaic image (local, no external domain config needed) */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/10">
              {/* 
                Save your image as /public/hero-mosaic.png
                You can adjust sizes via aspect ratio and max widths.
              */}
              <div className="relative aspect-[4/3] md:aspect-[5/4] lg:aspect-[16/11] w-full">
                <Image
                  src="/hero-mosaic.png"
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




