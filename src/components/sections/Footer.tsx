"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { ArrowUp } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#070709] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Col 1: Big Branding */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-yellow-400" />
              <span className="font-mono-ny text-sm font-bold tracking-widest text-white uppercase">
                {profileData.name} // PORTFOLIO
              </span>
            </div>
            <p className="text-zinc-400 text-xs sm:text-sm font-light max-w-md">
              Designed with New York architectural precision. Engineered with Next.js, TypeScript, and Three.js for Vercel edge deployment.
            </p>
          </div>

          {/* Col 2: Socials & External Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono-ny text-xs text-yellow-400 uppercase tracking-widest">
              Channels // Socials
            </h4>
            <ul className="space-y-2.5 font-mono-ny text-xs">
              <li>
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
                >
                  <GithubIcon size={14} />
                  <span>GitHub (@mtrtrdev)</span>
                </a>
              </li>
              <li>
                <a
                  href={profileData.socials.qiita}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-zinc-300 hover:text-yellow-400 transition-colors"
                >
                  <span className="font-bold text-[11px] px-1 py-0.2 bg-zinc-800 text-yellow-400 rounded">
                    Q
                  </span>
                  <span>Qiita (@motorola)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: System Specs */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono-ny text-xs text-zinc-500 uppercase tracking-widest">
              System Specifications
            </h4>
            <div className="space-y-1.5 font-mono-ny text-[11px] text-zinc-400">
              <div>STACK: NEXT.JS 16 + REACT 19</div>
              <div>GRAPHICS: THREE.JS WEBGL</div>
              <div>HOST: VERCEL PRODUCTION EDGE</div>
              <div>EDITION: 2026.01 // REVISED</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-ny text-[11px] text-zinc-500">
          <div>
            &copy; 2026 {profileData.name}. ALL RIGHTS RESERVED.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-yellow-400 transition-colors cursor-pointer uppercase tracking-wider"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

