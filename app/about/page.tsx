import React from "react";

const AboutPage = () => {
  return (
    <main className="flex flex-col items-center px-24 ">
      <section className="md:w-[45vw] w-[80vw] mt-24">
        <h3 className="text-2xl font-medium">Core skills</h3>
        <ul className="marker:text-orange-accent pt-4">
          <li className="list-disc">Team leader & technical lead</li>
          <li className="list-disc">Product development - full lifecycle</li>
          <li className="list-disc">
            Hybrid and native iOS mobile development
          </li>
          <li className="list-disc">Web development</li>
          <li className="list-disc">UX/UI consultancy</li>
          <li className="list-disc">Design system development</li>
          <li className="list-disc">Design tokens</li>
          <li className="list-disc">Serverless architecture design</li>
          <li className="list-disc">AWS certified</li>
          <li className="list-disc">Unit, integration and e2e testing</li>
          <li className="list-disc">
            Storybook testing and component development
          </li>
        </ul>
      </section>

      <section className="relative md:w-[45vw] w-[80vw] mt-12 mb-24">
        <h3 className="text-2xl font-medium">Work history</h3>

        <ul>
          <li className="flex pt-4">
            <div className="mr-6 w-[15%] flex flex-col items-start">
            </div>
          </li>
          <li className="flex pt-4">
            <div className="mr-6 w-[15%] flex flex-col items-start">
              <p className="text-sm">Jan 2024 - Dec 2025</p>
              <p className="text-xs text-orange-accent font-medium text-center">
                (Perm)
              </p>
            </div>
            <div className="w-[70%]">
              <a
                className="hover:underline underline-offset-2 decoration-2 font-medium"
                href="https://essent.nl"
                rel="noopener"
                target="_blank"
              >
                Tech lead & Senior mobile developer{" "}
                <span className="text-orange-accent">@</span> Essent & Energie
                Direct (E.on)
              </a>
              <p className="text-secondary text-sm">
                Den Bosch, The Netherlands
              </p>
              <p className="text-sm text-orange-accent font-medium">
                Promoted to Tech Lead (June 2025)
              </p>
              <p className="text-sm">
                Tech lead of the mobile platform team at Essent, the Netherlands' largest energy provider, overseeing customer-facing apps used by millions of households.
              </p>
              <p className="text-sm">
                Transitioned the mobile team from a single delivery squad into a platform team supporting multiple Agile Release Trains.
              </p>
              <p className="text-sm">
                Drove the apps to WCAG AA accessibility certification, ensuring compliance with European accessibility standards.
              </p>
              <p className="text-sm">
                Led development of dynamic energy pricing charts and personalised marketing banners increasing user engagement and conversion rates.
              </p>
              <p className="text-sm">
                Integrated LaunchDarkly (feature flags) & OneSignal (push notifications & in-app messaging).
              </p>
              <p className="text-sm">
                Unit and E2E testing - RTL, Jest, Maestro.
              </p>
            </div>
          </li>
          <li className="flex pt-4">
            <div className="mr-6 w-[15%] flex flex-col items-start">
              <p className="text-sm">Aug 2022 - Dec 2023</p>
              <p className="text-xs text-orange-accent font-medium text-center">
                (Contract)
              </p>
            </div>
            <div className="w-[70%]">
              <a
                className="hover:underline underline-offset-2 decoration-2 font-medium"
                href="https://weaver.build"
                rel="noopener"
                target="_blank"
              >
                Fullstack engineer <span className="text-orange-accent">@</span>{" "}
                Weaver
              </a>
              <p className="text-secondary text-sm">Remote (Spain/UK)</p>
              <p className="text-sm">
                Built a dual-sided marketplace connecting homeowners with vetted tradespeople at an early-stage startup.
              </p>
              <p className="text-sm">
                Developed web (React) and mobile (Ionic) applications end-to-end, owning features from business requirements through to user-facing delivery.
              </p>
              <p className="text-sm">
                Designed and implemented serverless backend infrastructure using AWS CDK and Node.js.
              </p>
              <p className="text-sm">
                Built GraphQL APIs to serve data efficiently across web and mobile clients.
              </p>
              <p className="text-sm">
                Unit and E2E testing - Storybook, Playwright, Jest
              </p>
            </div>
          </li>

          <li className="flex pt-4">
            <div className="mr-6 w-[15%] flex flex-col items-start">
              <p className="text-sm">Feb 2021 - Aug 2022</p>
              <p className="text-xs text-orange-accent font-medium text-center">
                (Perm)
              </p>
            </div>
            <div className="col-span-2">
              <a
                className="hover:underline underline-offset-2 decoration-2 font-medium"
                href="https://adidas.com"
                rel="noopener"
                target="_blank"
              >
                Frontend engineer <span className="text-orange-accent">@</span>{" "}
                adidas
              </a>
              <p className="text-secondary text-sm">Zaragoza, Spain</p>
              <p className="text-sm">
                Developed Origo, a bespoke sourcing platform enabling adidas designers to price and procure materials from global suppliers.
              </p>
              <p className="text-sm">
                Built complex data-rich interfaces using AG Grid to handle large datasets across materials, pricing, and supplier information.
              </p>
              <p className="text-sm">
                Managed application state with Redux Toolkit, ensuring predictable data flow across a feature-dense enterprise application.
              </p>
              <p className="text-sm">
                Collaborated with cross-functional teams including designers and supply chain stakeholders.
              </p>
              <p className="text-sm">
                Unit and Integration testing - Storybook, Jest, React testing
                library
              </p>
            </div>
          </li>

          <li className="flex pt-4">
            <div className="mr-6 w-[15%] flex flex-col items-start">
              <p className="text-sm">Apr 2020 - Feb 2021</p>
              <p className="text-xs text-orange-accent font-medium text-center">
                (Perm)
              </p>
            </div>
            <div className="col-span-2">
              <a
                className="hover:underline underline-offset-2 decoration-2 font-medium"
                href="https://fundacionucjc.org/en/teacher-training/"
                rel="noopener"
                target="_blank"
              >
                Lead mobile engineer <span className="text-orange-accent">@</span>{" "}
                Ximdex
              </a>
              <p className="text-secondary text-sm">Remote (Spain)</p>
              <p className="text-sm">
                Led mobile development for an edtech product built for Universidad Camilo José Cela in Madrid.
              </p>
              <p className="text-sm">
                Recruited and led a small engineering team, taking the project from initial MVP through to first deployment.
              </p>
              <p className="text-sm">
                Delivered both mobile and web applications, transforming early prototypes into a robust, user-ready solution.
              </p>
              <p className="text-sm">
                Design system development with CSS-in-JS
              </p>
              <p className="text-sm">Unit testing - Jest</p>
            </div>
          </li>

          <li className="flex pt-4">
            <div className="mr-6 w-[15%] flex flex-col items-start">
              <p className="text-sm">Oct 2019 - Apr 2020</p>
              <p className="text-xs text-orange-accent font-medium text-center">
                (Perm)
              </p>
            </div>
            <div className="col-span-2">
              <a
                className="hover:underline underline-offset-2 decoration-2 font-medium"
                href="https://www.linkedin.com/company/arbor-fintech/"
                rel="noopener"
                target="_blank"
              >
                Software developer <span className="text-orange-accent">@</span>{" "}
                Arbor Fintech (defunct)
              </a>
              <p className="text-secondary text-sm">Madrid, Spain</p>
              <p className="text-sm">
                Helped build a financial wellness app at a seed-stage fintech startup.
              </p>
              <p className="text-sm">
                Developed the mobile application using Ionic and Angular, alongside Node.js backend services deployed on AWS.
              </p>
              <p className="text-sm">
                Worked closely with founders on rapid iteration cycles, taking ownership across the full stack.
              </p>
            </div>
          </li>
        </ul>
        <div className="hidden md:block shadow-2xl shadow-black absolute opacity-30 rounded-full top-[-25vh] right-[-20vw] w-[40vw] h-[40vw] bg-center bg-[url('/images/Dermot_Logo.png')] z-[-1]" />
      </section>
    </main>
  );
};

export default AboutPage;