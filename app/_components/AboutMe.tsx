'use client';
import { useLanguage } from '@/context/LanguageContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);
    const { data } = useLanguage();

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    {data.ui.aboutMe.title}
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    {data.ui.aboutMe.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-9">
                    <div className="md:flex-[5_5_0%]">
                        <p className="text-5xl slide-up-and-fade">
                            {data.ui.aboutMe.introTitle}
                        </p>
                    </div>
                    <div className="md:flex-[7_7_0%]">
                        <div className="text-lg text-muted-foreground max-w-[450px]">
                            <p className="slide-up-and-fade">
                                {data.ui.aboutMe.introDescription1}
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                {data.ui.aboutMe.introDescription2}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
