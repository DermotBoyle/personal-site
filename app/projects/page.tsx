"use client";

import Link from "next/link";
import { useEffect } from "react";
import getProjectBriefs from "../dataLayer/projectBrief";

const ProjectsPage = () => {
  const projects = getProjectBriefs();

  useEffect(() => {
    const targets = document.querySelectorAll(".reveal-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-reveal");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    targets.forEach((target) => {
      target.classList.add("opacity-0");
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      <div className="w-full max-w-5xl mx-auto px-6 md:px-16 pt-24 pb-16">
        {/* Page header */}
        <div className="mb-16 reveal-on-scroll">
          <p className="text-xs tracking-[0.25em] uppercase text-stone mb-4">
            Portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-charcoal tracking-tight">
            Selected Work
          </h1>
          <div className="w-14 h-0.5 bg-terracotta mt-6 mb-6" />
          <p className="text-lg text-stone max-w-xl leading-relaxed">
            Side projects, experiments, and things I&apos;ve built outside of work.
          </p>
        </div>

        {/* Project list */}
        <div>
          {projects.map((project, i) => {
            const isExternal = project.link?.startsWith("http");
            const linkProps = isExternal
              ? { target: "_blank" as const, rel: "noreferrer noopener" }
              : {};

            return (
              <Link
                key={i}
                href={project.link ?? "/"}
                className="group block reveal-on-scroll"
                {...linkProps}
              >
                {/* Top divider */}
                <div className="h-px bg-charcoal/10" />

                <div className="py-10 md:py-12 grid md:grid-cols-[5rem_1fr_auto] gap-4 md:gap-10 items-start">
                  {/* Oversized number */}
                  <span className="font-display text-5xl md:text-6xl font-bold text-stone/25 group-hover:text-terracotta transition-colors duration-300 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Content */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-charcoal group-hover:text-terracotta transition-colors duration-300 mb-2">
                      {project.title}
                    </h2>
                    <p className="text-stone mb-4">{project.information}</p>
                    <div className="flex flex-wrap gap-x-1.5 gap-y-1">
                      {project.techUsed.map((tech, j) => (
                        <span
                          key={j}
                          className="text-xs text-stone/70 tracking-wide uppercase"
                        >
                          {tech}
                          {j < project.techUsed.length - 1 ? " ·" : ""}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center self-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 text-stone group-hover:text-terracotta group-hover:translate-x-1 transition-all duration-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
          {/* Bottom divider */}
          <div className="h-px bg-charcoal/10" />
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
