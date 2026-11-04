"use client";

import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

const logosData = [1, 2, 3, 4, 5, 6, 7, 8].map((id) => ({ id }));

export function LogoSection10() {
  return (
    <section className="bg-secondary border-b pb-16 lg:pb-24">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          <div className="section-title-gap-lg flex max-w-xl flex-col items-center text-center">
            <Tagline variant="ghost">Trusted by 10K+ remote teams</Tagline>
          </div>

          <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent_0%,black_12.5%,black_87.5%,transparent_100%)]">
            <div className="animate-infinite-scroll flex w-max items-center">
              {[...logosData, ...logosData].map((logoItem, index) => {
                const uniqueKey = `logo-wrapper-${logoItem.id}-${index}`;
                return (
                  <div
                    key={uniqueKey}
                    className="flex w-56 flex-shrink-0 items-center justify-center"
                    aria-hidden={index >= logosData.length}
                  >
                    <span className="text-2xl font-extrabold tracking-tight">
                      <span className="text-primary">Crea</span>
                      <span className="text-[#FBB200]">Decor</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50%));
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
