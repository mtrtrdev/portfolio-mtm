import React from "react";
import { skillsData, profileData } from "@/data/profile";
import { Badge } from "@/components/ui/Badge";
import { Code2, Cpu, Layers, Sparkles } from "lucide-react";

export function SkillsSection() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code2 size={16} className="text-yellow-400" />;
      case 1:
        return <Layers size={16} className="text-yellow-400" />;
      case 2:
        return <Cpu size={16} className="text-yellow-400" />;
      default:
        return <Sparkles size={16} className="text-yellow-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono-ny text-xs text-yellow-400 mb-2">
              <span>[INDEX // 03]</span>
              <span>CAPABILITIES & ARSENAL</span>
            </div>
            <h2 className="font-serif-ny text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
              Skills & Stack
            </h2>
          </div>
          <p className="font-mono-ny text-xs text-zinc-400 max-w-sm">
            高い信頼性と洗練された表現力を両立するための技術スタックと設計哲学。
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((categoryGroup, index) => (
            <div
              key={categoryGroup.category}
              className="border border-white/10 bg-zinc-950/40 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <h3 className="font-mono-ny text-[11px] text-zinc-300 uppercase tracking-wider">
                    {categoryGroup.category}
                  </h3>
                  {getCategoryIcon(index)}
                </div>

                <ul className="space-y-3">
                  {categoryGroup.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between text-xs text-zinc-300 py-1 border-b border-white/5"
                    >
                      <span className="font-light">{skill.name}</span>
                      {skill.level && (
                        <span className="font-mono-ny text-[10px] text-zinc-500 uppercase">
                          {skill.level}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between font-mono-ny text-[9px] text-zinc-600">
                <span>SEC.0{index + 1}</span>
                <span>VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Principles Box */}
        <div
          id="about"
          className="mt-16 border border-white/15 bg-gradient-to-r from-zinc-950/80 via-zinc-900/40 to-zinc-950/80 p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-3">
              <div className="font-mono-ny text-xs text-yellow-400 uppercase tracking-widest">
                [ABOUT // ETHOS]
              </div>
              <h3 className="font-serif-ny text-2xl sm:text-3xl text-white">
                Engineering Integrity & Aesthetic Rigor
              </h3>
            </div>
            <div className="lg:col-span-8 space-y-4 text-zinc-300 text-sm leading-relaxed font-light">
              <p>{profileData.bio}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="accent">TYPE-SAFE FIRST</Badge>
                <Badge variant="outline">ZERO RUNTIME BLOAT</Badge>
                <Badge variant="outline">60 FPS CREATIVE MOTION</Badge>
                <Badge variant="outline">VERCEL NATIVE</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

