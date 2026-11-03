"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { ArrowUpRight } from "lucide-react";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono-ny text-xs text-yellow-400 mb-2">
              <span>[01]</span>
              <span>WORKS</span>
            </div>
            <h2 className="font-serif-ny text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
              制作実績
            </h2>
          </div>
          <p className="font-mono-ny text-xs text-zinc-400 max-w-sm">
            プロダクト開発、ランディングページ、Webアプリケーションの実績。
          </p>
        </div>

        {/* Project Layout (Editorial Featured Format) */}
        {projectsData.length === 1 ? (
          /* Single Project Feature - Magazine Editorial Spread Layout */
          <div className="max-w-5xl mx-auto">
            {projectsData.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer border border-white/15 bg-zinc-950/50 hover:bg-zinc-900/60 hover:border-yellow-400/60 transition-all duration-300"
              >
                {/* Top Industrial Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 font-mono-ny text-xs text-zinc-400 bg-zinc-950/80">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                    <span className="text-yellow-400 font-bold">[FEATURED // 01]</span>
                    <span className="uppercase text-[11px] tracking-widest text-zinc-300">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-zinc-400 font-light font-mono-ny">YEAR: {project.year}</span>
                </div>

                {/* Main Spread: Big Visual + Details */}
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left: Big Preview Image */}
                  <div
                    className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[320px] bg-zinc-900 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10"
                    style={{ position: "relative" }}
                  >
                    <Image
                      src={project.thumbnailUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                  </div>

                  {/* Right: Editorial Info Block */}
                  <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between space-y-8 bg-zinc-950/40">
                    <div className="space-y-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-mono-ny text-[11px] text-yellow-400 tracking-widest uppercase mb-1">
                            Featured Project
                          </p>
                          <h3 className="font-serif-ny text-2xl sm:text-3xl text-white group-hover:text-yellow-400 transition-colors leading-snug">
                            {project.title}
                          </h3>
                        </div>
                        <div className="p-2 border border-white/15 group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all shrink-0">
                          <ArrowUpRight size={18} />
                        </div>
                      </div>

                      <p className="text-sm text-zinc-300 leading-relaxed font-light border-l-2 border-yellow-400/80 pl-4 py-0.5">
                        {project.description}
                      </p>
                    </div>

                    {/* Bottom Meta & Actions */}
                    <div className="pt-6 border-t border-white/10 space-y-5">
                      {/* Tags (Top 4 only on card for clean magazine look) */}
                      <div className="flex flex-wrap items-center gap-1.5">
                        {project.tags.slice(0, 4).map((tag) => (
                          <Badge key={tag} variant="default">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="font-mono-ny text-[11px] text-zinc-500 pl-1">
                            +{project.tags.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center justify-between pt-2">
                        <span className="font-mono-ny text-xs text-zinc-400 group-hover:text-yellow-400 transition-colors flex items-center gap-1.5">
                          <span>詳細仕様を見る</span>
                          <span>→</span>
                        </span>

                        {project.demoUrl && project.demoUrl !== "#" && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-mono-ny font-medium uppercase tracking-wider transition-all shadow-sm"
                          >
                            <span>Live Site</span>
                            <ArrowUpRight size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Multi-Project Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projectsData.map((project, index) => {
              const projectNumber = String(index + 1).padStart(2, "0");
              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer border border-white/10 bg-zinc-950/40 hover:bg-zinc-900/60 hover:border-yellow-400/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 font-mono-ny text-xs text-zinc-400">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400 font-bold">[{projectNumber}]</span>
                      <span className="uppercase text-[11px] tracking-wider text-zinc-300">
                        {project.category}
                      </span>
                    </div>
                    <span className="text-zinc-500 font-light">'{project.year}</span>
                  </div>

                  <div
                    className="relative w-full h-52 sm:h-64 bg-zinc-900 overflow-hidden"
                    style={{ position: "relative" }}
                  >
                    <Image
                      src={project.thumbnailUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-serif-ny text-xl sm:text-2xl text-white group-hover:text-yellow-400 transition-colors">
                          {project.title}
                        </h3>
                        <div className="p-2 border border-white/10 group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                          <ArrowUpRight size={16} />
                        </div>
                      </div>
                      <p className="mt-3 text-xs sm:text-sm text-zinc-400 line-clamp-2 font-light">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="default">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
