import React from "react";
import { profileData } from "@/data/profile";
import { ArrowDownRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Top Meta Identifier */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 font-mono-ny text-[11px] text-zinc-500">
        <div className="flex items-center gap-3">
          <span className="text-yellow-400 font-bold">[001]</span>
          <span className="uppercase tracking-widest text-zinc-300">
            PORTFOLIO 2026
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span>{profileData.role}</span>
          <span className="hidden sm:inline text-zinc-700">|</span>
          <span className="hidden sm:inline">{profileData.location}</span>
        </div>
      </div>

      {/* Main Massive Editorial Typography */}
      <div className="my-auto py-12 sm:py-20">
        <div className="space-y-2 sm:space-y-4">
          <p className="font-mono-ny text-xs sm:text-sm tracking-[0.25em] uppercase text-yellow-400">
            FULL-STACK & CLOUD / GENERATIVE AI
          </p>
          <h1 className="font-serif-ny text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal text-white tracking-tight leading-[0.95]">
            ENGINEERING
            <br />
            <span className="italic font-light text-zinc-400">MEETS</span> FORM.
          </h1>
        </div>

        {/* Statement and CTA Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t border-white/10 pt-8">
          <div className="md:col-span-7">
            <p className="text-zinc-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
              {profileData.statement}
            </p>
          </div>
          <div className="md:col-span-5 flex flex-col sm:flex-row md:justify-end items-start sm:items-center gap-4 font-mono-ny text-xs">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-6 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold uppercase tracking-wider transition-all duration-200 group"
            >
              <span>プロジェクトを見る</span>
              <ArrowDownRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-6 py-4 border border-white/15 hover:border-white text-zinc-300 hover:text-white uppercase tracking-wider transition-colors"
            >
              プロフィール
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Industrial Strip */}
      <div className="flex items-center justify-between pt-6 border-t border-white/10 font-mono-ny text-[10px] text-zinc-500 uppercase tracking-widest">
        <span>THREE.JS CANVAS BACKGROUND</span>
        <span className="flex items-center gap-2">
          <span>SCROLL DOWN</span>
          <span className="animate-bounce">↓</span>
        </span>
      </div>
    </section>
  );
}

