'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { useLanguage } from '@/context/LanguageContext';
import parser from 'html-react-parser';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import HeroImage from '@/components/HeroImage';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { data } = useLanguage();

  // move the content a little up on scroll
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'bottom 70%',
          end: 'bottom 10%',
          scrub: 1,
        },
      });

      tl.fromTo(
        '.slide-up-and-fade',
        { y: 0 },
        { y: -150, opacity: 0, stagger: 0.02 },
      );
    },
    { scope: containerRef },
  );

  const loaderProp = ({ src }: { src: string }) => {
    return src;
  };

  return (
    <section className="relative overflow-hidden" id="banner">
      <ArrowAnimation />
      <div
        className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-start gap-4 lg:justify-between items-center max-md:flex-col"
        ref={containerRef}
      >
        <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
          <div className="flex justify-start gap-8 items-center w-full">
            <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
              {parser(data.ui.banner.role)}
            </h1>
            <div className="flex md:hidden border-[2px] border-primary rounded-full w-[100px] h-[100px] relative">
              <Image
                src="/author.png"
                alt="Hero Image"
                className="hero-image w-[120px] h-[120px] object-cover rounded-full absolute top-[-25px] left-0"
                width={50}
                height={50}
                loader={loaderProp}
              />
            </div>
          </div>
          <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
            {parser(data.ui.banner.description)}
          </p>
          <Button
            as="link"
            target="_blank"
            rel="noopener noreferrer"
            href={data.socialLinks[0].url}
            variant="primary"
            className="mt-9 banner-button slide-up-and-fade"
          >
            {data.ui.banner.contactButton}
          </Button>
        </div>

        <HeroImage className="slide-up-and-fade" />

        <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
          <div className="slide-up-and-fade">
            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
              {data.ui.banner.yearsExperience}
            </h5>
            <p className="text-muted-foreground">{data.ui.banner.yearsText}</p>
          </div>
          {/* <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            7+
                        </h5>
                        <p className="text-muted-foreground">
                            Completed Projects
                        </p>
                    </div> */}
          <div className="slide-up-and-fade">
            <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
              {data.ui.banner.hoursWorked}
            </h5>
            <p className="text-muted-foreground">{data.ui.banner.hoursText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
