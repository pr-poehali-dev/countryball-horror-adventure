import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import LanguageSwitcher from './LanguageSwitcher';

interface MainMenuProps {
  onStart: () => void;
  onGallery: () => void;
  language: 'ru' | 'en';
  onLanguageChange: (lang: 'ru' | 'en') => void;
}

export default function MainMenu({ onStart, onGallery, language, onLanguageChange }: MainMenuProps) {
  const text = {
    title: language === 'ru' ? 'COUNTRYBALL' : 'COUNTRYBALL',
    subtitle: language === 'ru' ? 'HORROR GAME' : 'HORROR GAME',
    edition: language === 'ru' ? '[РЕТРО ИЗДАНИЕ]' : '[RETRO EDITION]',
    start: language === 'ru' ? 'НАЧАТЬ ИГРУ' : 'START GAME',
    gallery: language === 'ru' ? 'ГАЛЕРЕЯ' : 'GALLERY',
    settings: language === 'ru' ? 'НАСТРОЙКИ' : 'SETTINGS',
    exit: language === 'ru' ? 'ВЫХОД' : 'EXIT',
    press: language === 'ru' ? '█ PRESS START █' : '█ PRESS START █',
  };
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8 crt-effect relative overflow-hidden">
      <div className="scanlines" />
      <div className="glitch-overlay" />
      
      <div className="absolute top-4 right-4 z-20">
        <LanguageSwitcher language={language} onLanguageChange={onLanguageChange} />
      </div>

      <div className="z-10 text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-[#00ff41] pixel-text glitch-text mb-4">
            {text.title}
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-red-600 pixel-text glitch-text-red">
            {text.subtitle}
          </h2>
          <div className="text-[#00ff41] text-sm pixel-text mt-8 opacity-70">
            {text.edition}
          </div>
        </div>

        <div className="flex flex-col gap-4 max-w-md mx-auto mt-16">
          <Button
            onClick={onStart}
            className="w-full bg-[#00ff41] hover:bg-[#00dd35] text-black font-bold text-2xl py-8 pixel-text border-4 border-[#008822] shadow-[4px_4px_0px_#008822] hover:shadow-[2px_2px_0px_#008822] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            <Icon name="Play" className="mr-2" size={32} />
            {text.start}
          </Button>

          <Button
            onClick={onGallery}
            variant="outline"
            className="w-full bg-transparent hover:bg-[#00ff41]/10 text-[#00ff41] border-[#00ff41] border-4 font-bold text-xl py-6 pixel-text shadow-[4px_4px_0px_#00ff41] hover:shadow-[2px_2px_0px_#00ff41] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            <Icon name="Image" className="mr-2" size={24} />
            {text.gallery}
          </Button>

          <Button
            variant="outline"
            className="w-full bg-transparent hover:bg-[#00ff41]/10 text-[#00ff41] border-[#00ff41] border-4 font-bold text-xl py-6 pixel-text shadow-[4px_4px_0px_#00ff41] hover:shadow-[2px_2px_0px_#00ff41] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            <Icon name="Settings" className="mr-2" size={24} />
            {text.settings}
          </Button>

          <Button
            variant="outline"
            className="w-full bg-transparent hover:bg-red-600/10 text-red-600 border-red-600 border-4 font-bold text-xl py-6 pixel-text shadow-[4px_4px_0px_#ff0000] hover:shadow-[2px_2px_0px_#ff0000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            <Icon name="LogOut" className="mr-2" size={24} />
            {text.exit}
          </Button>
        </div>

        <div className="text-[#00ff41] text-xs pixel-text mt-12 opacity-50 animate-pulse">
          {text.press}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
        
        .pixel-text {
          font-family: 'VT323', monospace;
          letter-spacing: 2px;
        }
        
        .crt-effect {
          background: 
            radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%);
        }
        
        .crt-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            repeating-linear-gradient(
              0deg,
              rgba(0, 255, 65, 0.03) 0px,
              transparent 1px,
              transparent 2px,
              rgba(0, 255, 65, 0.03) 3px
            );
          pointer-events: none;
          z-index: 1;
        }
        
        .scanlines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.15) 1px,
            transparent 1px,
            transparent 2px
          );
          pointer-events: none;
          z-index: 2;
          animation: scanline 8s linear infinite;
        }
        
        @keyframes scanline {
          0% { transform: translateY(0); }
          100% { transform: translateY(10px); }
        }
        
        .glitch-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: transparent;
          pointer-events: none;
          z-index: 3;
          animation: glitch-anim 3s infinite;
        }
        
        @keyframes glitch-anim {
          0%, 90%, 100% { opacity: 0; }
          91%, 93% { 
            opacity: 0.7;
            background: rgba(255, 0, 0, 0.03);
          }
        }
        
        .glitch-text {
          text-shadow: 
            2px 2px 0px #00ff41,
            -2px -2px 0px #00ff41,
            0 0 20px #00ff41,
            0 0 40px #00ff41;
          animation: glitch-text 0.3s infinite;
        }
        
        .glitch-text-red {
          text-shadow: 
            2px 2px 0px #ff0000,
            -2px -2px 0px #ff0000,
            0 0 20px #ff0000,
            0 0 40px #ff0000;
          animation: glitch-text-red 0.5s infinite;
        }
        
        @keyframes glitch-text {
          0%, 90%, 100% { 
            text-shadow: 
              2px 2px 0px #00ff41,
              -2px -2px 0px #00ff41,
              0 0 20px #00ff41;
          }
          25% { 
            text-shadow: 
              -2px 2px 0px #00ff41,
              2px -2px 0px #00ff41,
              0 0 30px #00ff41;
          }
          50% { 
            text-shadow: 
              2px -2px 0px #00ff41,
              -2px 2px 0px #00ff41,
              0 0 40px #00ff41;
          }
        }
        
        @keyframes glitch-text-red {
          0%, 80%, 100% { 
            text-shadow: 
              2px 2px 0px #ff0000,
              -2px -2px 0px #ff0000,
              0 0 20px #ff0000;
          }
          40% { 
            text-shadow: 
              -3px 3px 0px #ff0000,
              3px -3px 0px #ff0000,
              0 0 40px #ff0000;
            transform: skew(-2deg);
          }
        }
      `}</style>
    </div>
  );
}