import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useLenis } from 'lenis/react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import TechModal from '@/components/TechModal';
import { ITech } from '@/types/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFlip, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-flip';

type Props = {
  fullStack: ITech[];
  activeTech: number;
  showCarousel: boolean;
  setShowCarousel: Dispatch<SetStateAction<boolean>>;
};

const CarouselTechModal: React.FC<Props> = ({
  fullStack,
  activeTech,
  showCarousel,
  setShowCarousel,
}) => {
  const [techModalWidth, setTechModalWidth] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const lenis = useLenis();
  const containerRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (showCarousel) {
        gsap.from(containerRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
          ease: 'back.out(1.7)',
        });
      }
    },
    { scope: containerRef, dependencies: [showCarousel] },
  );

  const handleClose: Dispatch<SetStateAction<boolean>> = (value) => {
    // If value is a function, resolve it effectively (though here we expect boolean usually from the modal close button)
    // But for strict correctness with SetStateAction:
    const resolvedValue =
      value instanceof Function ? value(showCarousel) : value;

    if (resolvedValue === false) {
      gsap.to(containerRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.3,
        onComplete: () => setShowCarousel(false),
      });
    } else {
      setShowCarousel(resolvedValue);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (showCarousel) {
      lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenis?.start();
      document.body.style.overflow = 'auto';
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = 'auto';
    };
  }, [showCarousel, lenis]);

  const arrowOffset =
    techModalWidth && windowWidth
      ? (windowWidth - techModalWidth) / 4
      : undefined;

  return (
    <div ref={containerRef} className="w-full h-full">
      <Swiper
        modules={[Navigation, EffectFlip, A11y]}
        slidesPerView={1}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        loop
        initialSlide={activeTech}
        effect={'flip'}
        flipEffect={{ slideShadows: false }}
        className="w-full h-full"
      >
        {fullStack.map((tech: ITech) => (
          <SwiperSlide key={tech.key}>
            <TechModal
              activeTech={tech}
              windowWidth={windowWidth}
              setShowCarousel={handleClose}
              setTechModalWidth={setTechModalWidth}
            />
          </SwiperSlide>
        ))}
        <div
          className="swiper-button-prev !text-white [.light_&]:!text-black opacity-0 md:opacity-100"
          style={arrowOffset ? { left: `${arrowOffset}px` } : {}}
        ></div>
        <div
          className="swiper-button-next !text-white [.light_&]:!text-black opacity-0 md:opacity-100"
          style={arrowOffset ? { right: `${arrowOffset}px` } : {}}
        ></div>
      </Swiper>
    </div>
  );
};

export default CarouselTechModal;
