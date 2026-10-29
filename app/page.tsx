'use client';
import React, { useState } from 'react';

import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Experiences from './_components/Experiences';
import Skills from './_components/Skills';
import ProjectList from './_components/ProjectList';
import CarouselTechModal from '@/components/CarouselTechModal';
import { ITech } from '@/types/index';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const [showCarousel, setShowCarousel] = useState(false);
  const [activeTech, setActiveTech] = useState<number>(0);
  const { data } = useLanguage();

  const fullStack: Array<ITech> = Object.values(data.myStack)
    .flat()
    .map((tech, index) => ({ ...tech, order: index }));

  return (
    <div className="page-">
      <Banner />
      <AboutMe />
      <Skills
        setShowCarousel={setShowCarousel}
        setActiveTech={setActiveTech}
        fullStack={fullStack}
      />
      <Experiences />
      <ProjectList />

      {showCarousel && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50">
          <CarouselTechModal
            showCarousel={showCarousel}
            fullStack={fullStack}
            activeTech={activeTech}
            setShowCarousel={setShowCarousel}
          />
        </div>
      )}
    </div>
  );
}
