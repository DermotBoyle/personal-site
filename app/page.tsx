import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-0">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-20 items-center">

          {/* Typography */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-stone mb-8">
              Software Engineer &amp; Tech Lead
            </p>

            <h1 className="text-7xl md:text-[6.5rem] font-bold text-charcoal leading-[0.85] tracking-tight">
              Dermot
              <br />
              Boyle
            </h1>

            {/* Terracotta rule */}
            <div className="w-14 h-0.5 bg-terracotta mt-8 mb-8" />

            <p className="text-lg md:text-xl text-stone leading-relaxed max-w-lg">
              Once a music teacher. Now a tech lead shipping web
              and mobile products to millions — from Málaga, Spain.
            </p>

            <div className="mt-10 flex items-center gap-8">
              <a
                href="https://essent.nl"
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center gap-3"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-sm">
                  <Image
                    src="/images/essent-logo.png"
                    alt=""
                    width={18}
                    height={18}
                  />
                </span>
                <span>
                  <span className="block text-sm font-medium text-charcoal-soft group-hover:text-terracotta transition-colors">
                    Essent
                  </span>
                  <span className="block text-[0.65rem] tracking-[0.15em] uppercase text-stone">
                    Current
                  </span>
                </span>
              </a>

              <a
                href="https://adidas.com"
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center gap-3"
              >
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-sm">
                  <Image
                    src="/images/adidas-logo.png"
                    alt=""
                    width={18}
                    height={18}
                  />
                </span>
                <span>
                  <span className="block text-sm font-medium text-charcoal-soft group-hover:text-terracotta transition-colors">
                    adidas
                  </span>
                  <span className="block text-[0.65rem] tracking-[0.15em] uppercase text-stone">
                    Previously
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="relative order-first md:order-last">
            <div className="relative aspect-square w-full max-w-lg mx-auto md:ml-auto md:mr-0 overflow-hidden">
              <Image
                src="/images/me.png"
                alt="Dermot Boyle working from a terrace in southern Spain"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 90vw, 40vw"
              />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
