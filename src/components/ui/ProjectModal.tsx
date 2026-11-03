"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/types";
import { Badge } from "./Badge";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0d0e12] border border-white/15 text-zinc-100 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Industrial Bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 bg-zinc-950/60 font-mono-ny text-[11px] text-zinc-400">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="uppercase tracking-widest">
              DOC.REF // {project.id.toUpperCase()}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1 hover:text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Hero Visual Area */}
        <div
          className="relative w-full h-56 sm:h-72 bg-zinc-950 border-b border-white/10 overflow-hidden"
          style={{ position: "relative" }}
        >
          <Image
            src={project.thumbnailUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-transparent to-transparent opacity-80" />
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Header Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="accent">{project.category}</Badge>
              <span className="font-mono-ny text-xs text-zinc-500">[{project.year}]</span>
            </div>
            <h2
              id="modal-project-title"
              className="font-serif-ny text-2xl sm:text-3xl text-white tracking-wide"
            >
              {project.title}
            </h2>
          </div>

          {/* Description */}
          <div className="space-y-4 text-zinc-300 text-sm leading-relaxed border-l-2 border-emerald-400/80 pl-4 py-1">
            <p className="font-medium text-zinc-200">{project.description}</p>
            <p className="text-zinc-400 text-xs sm:text-sm font-light">
              {project.detailedDescription}
            </p>
          </div>

          {/* Key Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="font-mono-ny text-xs text-zinc-400 uppercase tracking-widest">
                Key Technical Highlights
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="space-y-3 pt-2">
            <h3 className="font-mono-ny text-xs text-zinc-400 uppercase tracking-widest">
              Technologies & Architecture
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="default">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-400 hover:bg-emerald-300 text-black font-mono-ny font-medium text-xs tracking-wider uppercase transition-colors"
              >
                <span>Live Preview</span>
                <ExternalLink size={14} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-100 font-mono-ny text-xs tracking-wider uppercase transition-colors"
              >
                <GithubIcon size={14} />
                <span>Source Code</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="ml-auto inline-flex items-center px-4 py-2.5 text-xs font-mono-ny text-zinc-400 hover:text-white transition-colors"
            >
              Close [ESC]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

