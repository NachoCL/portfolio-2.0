import { Dispatch, SetStateAction, useLayoutEffect, useRef } from 'react';
import clsx from 'clsx';
import '@/app/styles/TechModal.css';
import { ITech } from '@/types/index';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

type Props = {
  activeTech: ITech;
  setShowCarousel: Dispatch<SetStateAction<boolean>>;
  setTechModalWidth: Dispatch<SetStateAction<number>>;
  windowWidth?: number;
};

const TechModal: React.FC<Props> = ({
  activeTech,
  setShowCarousel,
  setTechModalWidth,
  windowWidth,
}) => {
  const elementRef = useRef(null);
  const { data } = useLanguage();

  useLayoutEffect(() => {
    if (!elementRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newWidth = entry.contentRect.width;

        setTechModalWidth(newWidth);
      }
    });

    resizeObserver.observe(elementRef.current);

    return () => resizeObserver.disconnect();
  }, [setTechModalWidth]);

  return (
    <div className="grid">
      {Array.from({ length: 15 }).map((_, index) => (
        <div key={index} className="area"></div>
      ))}
      <div className="wrap">
        <div
          ref={elementRef}
          className={clsx('modal', {
            react: activeTech.key === 'react',
            vue: activeTech.key === 'vue',
            nuxt: activeTech.key === 'nuxt',
            html: activeTech.key === 'html',
            css: activeTech.key === 'css',
            js: activeTech.key === 'js',
            ts: activeTech.key === 'ts',
            tailwind: activeTech.key === 'tailwind',
            next: activeTech.key === 'next',
            node: activeTech.key === 'node',
            redux: activeTech.key === 'redux',
            bootstrap: activeTech.key === 'bootstrap',
            pinia: activeTech.key === 'pinia',
            nitro: activeTech.key === 'nitro',
            java: activeTech.key === 'java',
            sass: activeTech.key === 'sass',
            jest: activeTech.key === 'jest',
            graphql: activeTech.key === 'graphql',
            cypress: activeTech.key === 'cypress',
            mysql: activeTech.key === 'mysql',
            git: activeTech.key === 'git',
            aws: activeTech.key === 'aws',
            jquery: activeTech.key === 'jquery',
          })}
        >
          <div className="glow--out1"></div>
          <div className="glow--out2"></div>
          <div className="glow">{/* light effect on borders */}</div>
          <div className="modal__bg"></div>
          <div className="modal__container">
            <div className="glare">{/* light effect on modal */}</div>
            <div className="glow--in1"></div>
            <div className="glow--in2"></div>
            <div className="modal__content">
              <div className="modal__info">
                <div className="modal__info__left">
                  <div className="icon">
                    <Image
                      src={activeTech.icon}
                      alt={activeTech.name}
                      width={windowWidth && windowWidth >= 786 ? 80 : 30}
                      height={windowWidth && windowWidth >= 786 ? 80 : 30}
                    />
                  </div>
                  <p className="tech-name">{activeTech.name}</p>
                </div>
                <div className="modal__info__right">
                  <span className="tech-name">{activeTech.name}</span>
                  <p>{activeTech.description.text}</p>
                  <p>
                    {data.ui.techModal.experience}
                    {activeTech.description.years}
                  </p>
                  <p>
                    {data.ui.techModal.projects}
                    {activeTech.description.project}
                  </p>
                </div>
              </div>
              <div className="modal__close">
                <button
                  className="btn-back"
                  onClick={() => setShowCarousel(false)}
                >
                  <svg
                    className="cross"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0,0,256,256"
                  >
                    <g transform="">
                      <g
                        fillOpacity="0"
                        fill="currentColor"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth="1"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        strokeDasharray=""
                        strokeDashoffset="0"
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor={undefined}
                        style={{
                          mixBlendMode: 'normal',
                        }}
                      >
                        <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
                      </g>
                      <g
                        fill="currentColor"
                        fillRule="nonzero"
                        stroke="none"
                        strokeWidth="1"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        strokeDasharray=""
                        strokeDashoffset="0"
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor={undefined}
                        style={{
                          mixBlendMode: 'normal',
                        }}
                      >
                        <g transform="scale(4,4)">
                          <path d="M16,14c-0.512,0 -1.02306,0.19494 -1.41406,0.58594c-0.781,0.781 -0.781,2.04712 0,2.82812l14.58594,14.58594l-14.58594,14.58594c-0.781,0.781 -0.781,2.04713 0,2.82812c0.391,0.391 0.90206,0.58594 1.41406,0.58594c0.512,0 1.02306,-0.19494 1.41406,-0.58594l14.58594,-14.58594l14.58594,14.58594c0.781,0.781 2.04713,0.781 2.82812,0c0.781,-0.781 0.781,-2.04713 0,-2.82812l-14.58594,-14.58594l14.58594,-14.58594c0.781,-0.781 0.781,-2.04712 0,-2.82812c-0.781,-0.781 -2.04713,-0.781 -2.82812,0l-14.58594,14.58594l-14.58594,-14.58594c-0.391,-0.391 -0.90206,-0.58594 -1.41406,-0.58594z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>

                  <span className="text">{data.ui.techModal.button}</span>
                  <span className="circle"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechModal;
