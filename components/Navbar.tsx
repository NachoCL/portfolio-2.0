'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { MoveUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import SwitchTheme from './SwitchTheme';

const COLORS = [
  'bg-yellow-500 text-black',
  'bg-blue-500 text-white',
  'bg-teal-500 text-black',
  'bg-indigo-500 text-white',
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { language, setLanguage, data } = useLanguage();

  // const { theme, toggleTheme } = useTheme(); // Removed usage as it is handled in SwitchTheme

  const menuLinks = data.ui.navbar.links;

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <>
      <div className="sticky top-0 z-[4]">
        <div className="absolute top-5 right-5 md:right-10 z-[2] flex items-center gap-4">
          <button
            className={cn('group size-12 relative z-[2]')}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={cn(
                'inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 -translate-y-[5px] ',
                {
                  'rotate-45 -translate-y-1/2': isMenuOpen,
                  'md:group-hover:rotate-12': !isMenuOpen,
                },
              )}
            ></span>
            <span
              className={cn(
                'inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 translate-y-[5px] ',
                {
                  '-rotate-45 -translate-y-1/2': isMenuOpen,
                  'md:group-hover:-rotate-12': !isMenuOpen,
                },
              )}
            ></span>
          </button>
        </div>
      </div>

      <div
        className={cn(
          'overlay fixed inset-0 z-[2] bg-black/70 transition-all duration-150',
          {
            'opacity-0 invisible pointer-events-none': !isMenuOpen,
          },
        )}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <div
        className={cn(
          'fixed top-0 right-0 h-[100dvh] w-[500px] max-w-[calc(100vw-3rem)] transform translate-x-full transition-transform duration-700 z-[3] overflow-hidden gap-y-14',
          'flex flex-col lg:justify-center py-10',
          { 'translate-x-0': isMenuOpen },
        )}
      >
        <div
          className={cn(
            'fixed inset-0 scale-150 translate-x-1/2 rounded-[50%] bg-background-light duration-700 delay-150 z-[-1]',
            {
              'translate-x-0': isMenuOpen,
            },
          )}
        ></div>

        <div className="absolute top-6 left-8 md:left-24 z-[2] flex gap-4">
          <button
            onClick={toggleLanguage}
            className={cn(
              'text-lg font-bold hover:text-primary transition-colors uppercase text-white w-10 h-10 rounded-full bg-[#424242]',
              'shadow-[inset_-9px_-9px_17px_#272727,inset_9px_9px_17px_#5d5d5d]',
              'hover:shadow-[inset_9px_9px_17px_#1a1a1a,inset_-9px_-9px_17px_#6a6a6a]',
              '[.light_&]:text-black [.light_&]:bg-[#e0e0e0]',
              '[.light_&]:shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]',
              '[.light_&]:hover:bg-[#424242] [.light_&]:hover:text-white',
              '[.light_&]:hover:shadow-[inset_-9px_-9px_17px_#272727,inset_9px_9px_17px_#5d5d5d]',
            )}
          >
            {language === 'en' ? 'ES' : 'EN'}
          </button>

          <SwitchTheme />
        </div>

        <div className="grow flex md:items-center w-full max-w-[300px] mx-8 sm:mx-auto mt-12 md:mt-0">
          <div className="flex gap-10 lg:justify-between max-lg:flex-col w-full">
            <div className="max-lg:order-2">
              <p className="text-muted-foreground mb-5 md:mb-8">
                {data.ui.navbar.socialTitle}
              </p>
              <ul className="space-y-3">
                {data.socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg capitalize hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <p className="text-muted-foreground mb-5 md:mb-8">
                {data.ui.navbar.menuTitle}
              </p>
              <ul className="space-y-3">
                {menuLinks.map((link, idx) => (
                  <li key={link.name}>
                    <button
                      onClick={() => {
                        router.push(link.url);
                        setIsMenuOpen(false);
                      }}
                      className="group text-xl flex items-center gap-3"
                    >
                      <span
                        className={cn(
                          'size-3.5 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-[200%] transition-all',
                          COLORS[idx],
                        )}
                      >
                        <MoveUpRight
                          size={8}
                          className="scale-0 group-hover:scale-100 transition-all"
                        />
                      </span>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[300px] mx-8 sm:mx-auto">
          <p className="text-muted-foreground mb-4">
            {data.ui.navbar.contactTitle}
          </p>
          <a href={`mailto:${data.generalInfo.email}`}>
            {data.generalInfo.email}
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
