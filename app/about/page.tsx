"use client";

import { useEffect } from "react";

const experience = [
  {
    period: "2024 — 2025",
    role: "Tech Lead & Senior Mobile Developer",
    company: "Essent & Energie Direct",
    companyUrl: "https://essent.nl",
    parent: "E.on",
    location: "Den Bosch, The Netherlands",
    type: "Perm",
    highlight: "Promoted to Tech Lead (June 2025)",
    summary:
      "Led the mobile platform team at the Netherlands\u2019 largest energy provider, overseeing apps used by millions of households. Transitioned the team from a single delivery squad into a platform supporting multiple Agile Release Trains. Drove the apps to WCAG AA accessibility certification and shipped dynamic energy pricing features that increased user engagement.",
  },
  {
    period: "2022 — 2023",
    role: "Fullstack Engineer",
    company: "Weaver",
    companyUrl: "https://weaver.build",
    location: "Remote (Spain/UK)",
    type: "Contract",
    summary:
      "Built a dual-sided marketplace connecting homeowners with vetted tradespeople at an early-stage startup. Owned features end-to-end across web (React) and mobile (Ionic), designed serverless infrastructure with AWS CDK, and built GraphQL APIs serving data across both platforms.",
  },
  {
    period: "2021 — 2022",
    role: "Frontend Engineer",
    company: "adidas",
    companyUrl: "https://adidas.com",
    location: "Zaragoza, Spain",
    type: "Perm",
    summary:
      "Developed Origo, a bespoke sourcing platform enabling adidas designers to price and procure materials from global suppliers. Built data-rich interfaces handling large datasets with AG Grid and managed complex state with Redux Toolkit across a feature-dense enterprise application.",
  },
  {
    period: "2020 — 2021",
    role: "Lead Mobile Engineer",
    company: "Ximdex",
    companyUrl: "https://fundacionucjc.org/en/teacher-training/",
    location: "Remote (Spain)",
    type: "Perm",
    summary:
      "Led mobile development for an edtech product built for Universidad Camilo Jos\u00e9 Cela. Recruited and led a small engineering team, shipping both mobile and web applications from initial MVP through to deployment.",
  },
  {
    period: "2019 — 2020",
    role: "Software Developer",
    company: "Arbor Fintech",
    companyUrl: "https://www.linkedin.com/company/arbor-fintech/",
    location: "Madrid, Spain",
    type: "Perm",
    summary:
      "Built a financial wellness app at a seed-stage startup. Developed the mobile application with Ionic and Angular alongside Node.js backend services on AWS, working closely with founders on rapid iteration cycles.",
  },
];

const skills = [
  "Technical Leadership",
  "React Native",
  "TypeScript",
  "React",
  "Next.js",
  "Swift",
  "AWS",
  "Serverless",
  "Design Systems",
  "Accessibility",
  "GraphQL",
  "Testing",
];

const AboutPage = () => {
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
            The Story
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-charcoal tracking-tight">
            About
          </h1>
          <div className="w-14 h-0.5 bg-terracotta mt-6 mb-8" />
          <p className="text-lg md:text-xl text-stone leading-relaxed max-w-2xl">
            I started my career in a music classroom. A bachelor&apos;s in music
            led to teaching, but curiosity pulled me toward code. Over the past
            six years, I&apos;ve built products at early-stage startups, led
            engineering at adidas, and now oversee mobile development at
            Essent — shipping apps to millions of households across the
            Netherlands.
          </p>
          <p className="text-lg md:text-xl text-stone leading-relaxed max-w-2xl mt-4">
            I live in Málaga, Spain, where I split my time between engineering
            work and studying flamenco guitar.
          </p>
        </div>

        {/* Experience */}
        <section className="mb-20 reveal-on-scroll">
          <p className="text-xs tracking-[0.25em] uppercase text-stone mb-4">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal tracking-tight mb-2">
            Where I&apos;ve Worked
          </h2>
          <div className="w-14 h-0.5 bg-terracotta mt-4 mb-8" />

          <div>
            {experience.map((role, i) => (
              <div key={i} className="reveal-on-scroll">
                <div className="h-px bg-charcoal/10" />
                <div className="py-8 md:py-10 grid md:grid-cols-[12rem_1fr] gap-4 md:gap-10">
                  {/* Date column */}
                  <div>
                    <p className="text-sm text-stone whitespace-nowrap">
                      {role.period}
                    </p>
                    <p className="text-xs text-terracotta font-medium mt-1">
                      {role.type}
                    </p>
                  </div>

                  {/* Content column */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-1">
                      {role.role}
                    </h3>
                    <p className="mb-1">
                      <a
                        href={role.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-terracotta font-medium hover:underline underline-offset-4"
                      >
                        {role.company}
                      </a>
                      {role.parent && (
                        <span className="text-stone"> ({role.parent})</span>
                      )}
                    </p>
                    <p className="text-sm text-stone mb-3">{role.location}</p>
                    {role.highlight && (
                      <p className="text-sm text-terracotta font-medium mb-3">
                        {role.highlight}
                      </p>
                    )}
                    <p className="text-sm text-charcoal-soft leading-relaxed">
                      {role.summary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="h-px bg-charcoal/10" />
          </div>
        </section>

        {/* Skills */}
        <section className="reveal-on-scroll">
          <p className="text-xs tracking-[0.25em] uppercase text-stone mb-4">
            Toolkit
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal tracking-tight mb-2">
            What I Work With
          </h2>
          <div className="w-14 h-0.5 bg-terracotta mt-4 mb-8" />
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="text-sm text-charcoal-soft border border-charcoal/10 px-4 py-2 rounded-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
