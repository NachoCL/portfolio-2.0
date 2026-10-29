import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const HeroImage = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const loaderProp = ({ src }: { src: string }) => {
    return src;
  };

  // useGSAP(
  //   () => {
  //     const elements = gsap.utils.toArray(['.square']);

  //     elements.forEach((el: any) => {
  //       gsap.to(el, {
  //         x: 'random(-10, 10)',
  //         y: 'random(-10, 10)',
  //         duration: 'random(1, 2)',
  //         ease: 'sine.inOut',
  //         repeat: -1,
  //         yoyo: true,
  //         delay: 'random(0, 2)',
  //       });
  //     });
  //   },
  //   { scope: containerRef },
  // );

  return (
    <div
      className={`hero-image-container relative hidden max-md:my-10 max-md:w-full md:flex max-md:justify-center ${className}`}
    >
      <div className="hero-image-wrapper md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] border-[10px] shadow-2xl border-primary/60 rounded-full z-[-2]">
        <Image
          src="/author.png"
          alt="Hero Image"
          className="hero-image md:w-[350px] md:h-[350px] lg:w-[550px] lg:h-[550px] object-cover rounded-full z-[-1] absolute top-[-150px] right-0"
          width={400}
          height={400}
          loader={loaderProp}
        />
      </div>
      {/* <div
        ref={containerRef}
        className="stripes-container w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] flex absolute top-0 left-0 pointer-events-none justify-center items-center"
      >
        <div className="stripe stripe1 w-[350px] h-[25px] bg-primary rotate-[120deg] absolute top-10 right-[-80px] opacity-80 z-[-10]"></div>
        <div className="stripe stripe2 w-[250px] h-[15px] bg-[hsl(var(--stripe-color))] rotate-[120deg] absolute top-40 right-[-40px] opacity-60"></div>
        <div className="stripe stripe3 w-[150px] h-[45px] bg-primary/40 rotate-[120deg] absolute bottom-20 left-[-20px] backdrop-blur-sm"></div>
        <div className="stripe stripe4 w-[100px] h-[10px] bg-[hsl(var(--stripe-color)/0.3)] rotate-[120deg] absolute top-[30px] left-[30px] z-[-3]"></div>
        <div className="stripe stripe5 w-[400px] h-[60px] bg-primary/10 rotate-[120deg] absolute bottom-10 right-0 -z-10"></div>
        <div className="stripe stripe6 w-[300px] h-[25px] bg-primary rotate-[120deg] absolute bottom-20 right-[-100px] opacity-80"></div>
        <div className="square square1 w-[40px] h-[40px] bg-primary absolute top-[60px] left-[10px] opacity-80 -z-10"></div>
        <div className="square square2 w-[20px] h-[20px] bg-[hsl(var(--stripe-color))] absolute bottom-[80px] right-[40px] opacity-60"></div>
        <div className="square square3 w-[60px] h-[60px] bg-primary/10 absolute top-[220px] right-[-30px] -z-10"></div>
        <div className="square square4 w-[15px] h-[15px] bg-[hsl(var(--stripe-color)/0.8)] absolute bottom-[60px] left-[40px]"></div>
        <div className="square square5 w-[35px] h-[35px] bg-[hsl(var(--stripe-color))] absolute bottom-[20px] right-[120px] opacity-60"></div>
      </div> */}
    </div>
  );
};

export default HeroImage;
