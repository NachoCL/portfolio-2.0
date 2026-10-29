'use client';
import React, { useRef, Dispatch, SetStateAction } from 'react';
import SectionTitle from '@/components/SectionTitle';
import { useLanguage } from '@/context/LanguageContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { ITech } from '@/types/index';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  fullStack: Array<ITech>;
  setShowCarousel: Dispatch<SetStateAction<boolean>>;
  setActiveTech: Dispatch<SetStateAction<number>>;
};

const Skills: React.FC<Props> = ({
  setShowCarousel,
  setActiveTech,
  fullStack,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { data } = useLanguage();

  useGSAP(
    () => {
      const slideUpEl = containerRef.current?.querySelectorAll('.slide-up');

      if (!slideUpEl?.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 80%',
          scrub: 0.5,
        },
      });

      tl.from('.slide-up', {
        opacity: 0,
        y: 40,
        ease: 'none',
        stagger: 0.4,
      });
    },
    { scope: containerRef },
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'bottom 50%',
          end: 'bottom 10%',
          scrub: 1,
        },
      });

      tl.to(containerRef.current, {
        y: -150,
        opacity: 0,
      });
    },
    { scope: containerRef },
  );

  return (
    <section id="my-stack" ref={containerRef}>
      <div className="container relative">
        <div>
          <SectionTitle title={data.ui.titles.myStack} />

          <div className="space-y-20">
            {Object.entries(data.myStack).map(([key, value]) => (
              <div
                className="flex flex-col sm:flex-row gap-9 sm:gap-0"
                key={key}
              >
                <div className="flex-[5_5_0%]">
                  <p className="slide-up text-5xl font-anton leading-none text-muted-foreground uppercase">
                    {key}
                  </p>
                </div>

                <div className="flex-[7_7_0%] flex gap-x-11 gap-y-9 flex-wrap">
                  {value.map((item) => (
                    <div key={item.name} className="slide-up">
                      <button
                        className="flex gap-3.5 items-center leading-none transition-transform hover:scale-125"
                        key={item.name}
                        onClick={() => {
                          setActiveTech(
                            fullStack.findIndex(
                              (tech) => tech.key === item.key,
                            ),
                          );
                          setShowCarousel(true);
                        }}
                      >
                        <div>
                          <Image
                            src={item.icon}
                            alt={item.name}
                            width="40"
                            height="40"
                            className="max-h-10 w-auto"
                          />
                        </div>
                        <span className="text-2xl capitalize">{item.name}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
