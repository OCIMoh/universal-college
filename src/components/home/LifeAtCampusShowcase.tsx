"use client";

import Image from "next/image";
import Link from "next/link";

interface LifeFeature {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  linkLabel: string;
}

const HIGHLIGHTS: LifeFeature[] = [
  {
    title: "Air-Conditioned Computer & Technology Labs",
    category: "LABS & IT INFRASTRUCTURE",
    description: "4 specialized labs equipped with 100+ systems, high-speed fiber internet, and programming software suites for BCA, PGDCA & ITI trades.",
    image: "/assets/campus/computer-lab.jpg",
    link: "/campus",
    linkLabel: "Explore Labs & Facilities",
  },
  {
    title: "Multi-Acre Sports Ground & Stadium",
    category: "ATHLETICS & FITNESS",
    description: "Spacious athletic arena supporting cricket, volleyball, badminton, athletics, and annual collegiate championship meets.",
    image: "/assets/campus/stadium.jpg",
    link: "/campus",
    linkLabel: "View Sports & Athletics",
  },
  {
    title: "NCC Battalion & Discipline Training",
    category: "CADET CORPS & NATIONAL SERVICE",
    description: "Rigorous drills, parade training, national integration camps, and personality grooming under dedicated officer mentorship.",
    image: "/assets/campus/ncc.jpg",
    link: "/campus",
    linkLabel: "Discover NCC Activities",
  },
  {
    title: "NSS & Community Impact Drives",
    category: "SOCIAL RESPONSIBILITY",
    description: "Active community welfare through voluntary blood donation camps, tree plantations, literacy drives, and rural health clinics.",
    image: "/assets/campus/nss.jpg",
    link: "/campus",
    linkLabel: "See Community Initiatives",
  },
];

export default function LifeAtCampusShowcase() {
  return (
    <section className="relative w-full py-28 px-6 md:px-12 bg-white text-[#1a1a1a] border-b border-black/10">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
              <span className="text-[10px] md:text-[11px] font-mono tracking-[0.25em] uppercase text-emerald-800 font-semibold">
                Campus & Student Life
              </span>
            </div>
            <h2 className="text-editorial text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
              Vibrant Campus. Unlimited Horizons.
            </h2>
          </div>
          <p className="text-sm text-neutral-600 max-w-md font-light leading-relaxed">
            Experience an environment designed to foster intellectual discovery, athletic rigor, civic responsibility, and lifelong camaraderie.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl overflow-hidden border border-black/10 bg-[#f9f9f7] hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black/10">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase font-semibold text-emerald-300 border border-white/10">
                  {item.category}
                </span>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-editorial text-2xl font-bold text-neutral-900 mb-3 group-hover:text-emerald-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/5">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-emerald-800 hover:text-emerald-950 transition-colors cursor-pointer"
                  >
                    <span>{item.linkLabel}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
