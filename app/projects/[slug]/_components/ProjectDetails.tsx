'use client';
import parse from 'html-react-parser';
import ArrowAnimation from '@/components/ArrowAnimation';
import TransitionLink from '@/components/TransitionLink';
import { useLanguage } from '@/context/LanguageContext';
import { IProject } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowLeft, ExternalLink, Expand, Github } from 'lucide-react';
import { useRef } from 'react';

interface Props {
  slug: string;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectDetails = ({ slug }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { data } = useLanguage();

  // Find project from current language data
  const project = data.projects.find((p) => p.slug === slug);

  // If no project found (should not happen if slug is valid), we could return null or some placeholder
  // But since the Page checked for existence of slug (in default lang), we assume it exists.
  // If slugs match between languages, it's fine.

  if (!project) return null;

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.set('.fade-in-later', {
        autoAlpha: 0,
        y: 30,
      });
      const tl = gsap.timeline({
        delay: 0.5,
      });

      tl.to('.fade-in-later', {
        autoAlpha: 1,
        y: 0,
        stagger: 0.1,
      });
    },
    { scope: containerRef },
  );

  // blur info div and make it smaller on scroll
  useGSAP(
    () => {
      if (window.innerWidth < 992) return;

      gsap.to('#info', {
        filter: 'blur(3px)',
        autoAlpha: 0,
        scale: 0.9,
        // position: 'sticky',
        scrollTrigger: {
          trigger: '#info',
          start: 'bottom bottom',
          end: 'bottom top',
          pin: true,
          pinSpacing: false,
          scrub: 0.5,
        },
      });
    },
    { scope: containerRef },
  );

  // parallax effect on images
  useGSAP(
    () => {
      gsap.utils
        .toArray<HTMLDivElement>('#images > div')
        .forEach((imageDiv, i) => {
          gsap.to(imageDiv, {
            backgroundPosition: `center 0%`,
            ease: 'none',
            scrollTrigger: {
              trigger: imageDiv,
              start: () => (i ? 'top bottom' : 'top 50%'),
              end: 'bottom top',
              scrub: true,
              // invalidateOnRefresh: true, // to make it responsive
            },
          });
        });
    },
    { scope: containerRef },
  );

  return (
    <section className="pt-5 pb-14">
      <div className="container" ref={containerRef}>
        <TransitionLink
          back
          href="/"
          className="mb-16 inline-flex gap-2 items-center group h-12"
        >
          <ArrowLeft className="group-hover:-translate-x-1 group-hover:text-primary transition-all duration-300" />
          {data.ui.generic.back}
        </TransitionLink>

        <div className="top-0 min-h-[calc(100svh-100px)] flex" id="info">
          <div className="relative w-full">
            <div className="flex items-start gap-6 mx-auto mb-10 max-w-[635px]">
              <h1 className="fade-in-later opacity-0 text-4xl md:text-[60px] leading-none font-anton overflow-hidden">
                <span className="inline-block">{project.title}</span>
              </h1>

              <div className="fade-in-later opacity-0 flex gap-2">
                {project.sourceCode && (
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-primary"
                  >
                    <Github size={30} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-primary"
                  >
                    <ExternalLink size={30} />
                  </a>
                )}
              </div>
            </div>

            <div className="max-w-[635px] space-y-7 pb-20 mx-auto">
              <div className="fade-in-later">
                <p className="text-muted-foreground font-anton mb-3">Year</p>

                <div className="text-lg">{project.year}</div>
              </div>
              <div className="fade-in-later">
                <p className="text-muted-foreground font-anton mb-3">
                  {data.ui.generic.techs}
                </p>

                <div className="text-lg">{project.techStack.join(', ')}</div>
              </div>
              <div className="fade-in-later">
                <p className="text-muted-foreground font-anton mb-3">
                  {data.ui.generic.description}
                </p>

                <div className="text-lg prose-xl markdown-text">
                  {parse(project.description)}
                </div>
              </div>
              <div className="fade-in-later">
                <p className="text-muted-foreground font-anton mb-3">
                  {data.ui.generic.features}
                </p>

                <div className="text-lg prose-xl markdown-text">
                  {parse(project.features)}
                </div>
              </div>
              <div className="fade-in-later">
                <p className="text-muted-foreground font-anton mb-3">
                  {data.ui.generic.technicalAspects}
                </p>

                <div className="text-lg prose-xl markdown-text">
                  {parse(project.technicalAspects)}
                </div>
              </div>
              {project.role && (
                <div className="fade-in-later">
                  <p className="text-muted-foreground font-anton mb-3">
                    {data.ui.generic.myRole}
                  </p>

                  <div className="text-lg">{parse(project.role)}</div>
                </div>
              )}
            </div>

            <ArrowAnimation />
          </div>
        </div>

        <div
          className="fade-in-later relative flex flex-col gap-2 max-w-[800px] mx-auto"
          id="images"
        >
          {project.examples.map((item) => (
            <div
              key={item.image}
              className="group relative w-full aspect-[750/400] bg-background-light"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center 50%',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="absolute top-4 right-4 flex flex-col gap-4">
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    className="bg-background/70 text-foreground size-12 inline-flex justify-center items-center transition-all opacity-0 border border-primary hover:bg-primary hover:text-primary-foreground group-hover:opacity-100"
                  >
                    <ExternalLink />
                  </a>
                )}
                <a
                  href={item.image}
                  target="_blank"
                  className="bg-background/70 text-foreground size-12 inline-flex justify-center items-center transition-all opacity-0 border border-primary hover:bg-primary hover:text-primary-foreground group-hover:opacity-100"
                >
                  <Expand />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
