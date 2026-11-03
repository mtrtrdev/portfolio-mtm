"use client";

import React from "react";
import { profileData } from "@/data/profile";
import { GithubIcon, QiitaIcon } from "@/components/ui/Icons";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#09090b]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Monogram */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="flex items-center gap-2 group text-white font-mono-ny text-sm tracking-widest uppercase"
          >
            <span className="w-2.5 h-2.5 bg-yellow-400 inline-block transition-transform group-hover:scale-125" />
            <span className="font-bold">{profileData.initials}</span>
            <span className="text-zinc-600">//</span>
            <span className="text-zinc-400 text-xs hidden sm:inline">PORTFOLIO</span>
          </a>
        </div>

        {/* Location & Availability Status */}
        <div className="hidden md:flex items-center gap-3 font-mono-ny text-[11px] text-zinc-400">
          <span className="text-zinc-400">TOKYO [UTC+9]</span>
          <span className="text-zinc-700">|</span>
          <div className="flex items-center gap-2 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>AVAILABLE</span>
          </div>
        </div>

        {/* Navigation & Links */}
        <nav className="flex items-center gap-6 font-mono-ny text-xs tracking-wider">
          <a
            href="#projects"
            className="text-zinc-400 hover:text-yellow-400 transition-colors uppercase"
          >
            Works
          </a>
          <a
            href="#skills"
            className="text-zinc-400 hover:text-yellow-400 transition-colors uppercase"
          >
            Skills
          </a>
          <a
            href="#about"
            className="text-zinc-400 hover:text-yellow-400 transition-colors uppercase"
          >
            About
          </a>
          <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={profileData.socials.qiita}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Qiita"
            className="text-zinc-400 hover:text-yellow-400 transition-colors"
          >
            <span className="font-bold text-[10px] px-1 py-0.5 bg-zinc-800 text-yellow-400 rounded">
              Q
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}

