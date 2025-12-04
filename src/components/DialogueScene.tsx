import { useState, useEffect } from 'react';
import { DialogueLine } from '@/types/game';
import { countries } from '@/data/countries';
import PixelBall from './PixelBall';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface DialogueSceneProps {
  dialogue: DialogueLine[];
  onComplete: () => void;
}

export default function DialogueScene({ dialogue, onComplete }: DialogueSceneProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const currentDialogue = dialogue[currentLine];
  const currentCountry = countries.find(c => c.id === currentDialogue.countryId);

  useEffect(() => {
    if (!currentDialogue) return;

    setDisplayedText('');
    setIsTyping(true);

    const text = currentDialogue.text;
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentLine, currentDialogue]);

  const handleNext = () => {
    if (isTyping) {
      setDisplayedText(currentDialogue.text);
      setIsTyping(false);
    } else if (currentLine < dialogue.length - 1) {
      setCurrentLine(currentLine + 1);
    } else {
      onComplete();
    }
  };

  if (!currentCountry) return null;

  return (
    <div className="min-h-screen bg-black text-white crt-effect relative overflow-hidden">
      <div className="scanlines" />
      <div className="glitch-overlay" />
      
      <div 
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: currentCountry.isHorror 
            ? 'radial-gradient(ellipse at center, #1a0000 0%, #000000 100%)'
            : 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)',
        }}
      />

      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="animate-scale-in">
            <PixelBall 
              country={currentCountry} 
              size="large" 
              emotion={currentDialogue.emotion}
            />
          </div>
        </div>

        <div className="bg-black/80 border-t-4 border-[#00ff41] p-8 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 flex items-center gap-4">
              <div className="text-2xl">
                {currentCountry.flag}
              </div>
              <div 
                className={`text-2xl pixel-text font-bold ${
                  currentCountry.isHorror ? 'text-red-600 glitch-text-red' : 'text-[#00ff41]'
                }`}
              >
                {currentCountry.name}
              </div>
            </div>

            <div 
              className={`text-xl md:text-2xl pixel-text leading-relaxed min-h-[100px] ${
                currentCountry.isHorror ? 'text-red-500' : 'text-white'
              }`}
            >
              {displayedText}
              {isTyping && (
                <span className="animate-pulse ml-1">█</span>
              )}
            </div>

            <div className="flex items-center justify-between mt-6">
              <div className="text-sm pixel-text text-[#00ff41]/50">
                {currentLine + 1} / {dialogue.length}
              </div>

              <Button
                onClick={handleNext}
                className="bg-[#00ff41] hover:bg-[#00dd35] text-black font-bold text-xl px-8 py-4 pixel-text border-4 border-[#008822] shadow-[4px_4px_0px_#008822] hover:shadow-[2px_2px_0px_#008822] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                {currentLine < dialogue.length - 1 ? (
                  <>
                    ДАЛЕЕ <Icon name="ArrowRight" className="ml-2" size={24} />
                  </>
                ) : (
                  <>
                    ПРОДОЛЖИТЬ <Icon name="Play" className="ml-2" size={24} />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
        
        .pixel-text {
          font-family: 'VT323', monospace;
          letter-spacing: 2px;
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
          animation: glitch-anim 5s infinite;
        }
        
        @keyframes glitch-anim {
          0%, 90%, 100% { opacity: 0; }
          91%, 93% { 
            opacity: 0.5;
            background: rgba(255, 0, 0, 0.05);
          }
        }
        
        .glitch-text-red {
          text-shadow: 
            2px 2px 0px #ff0000,
            -2px -2px 0px #ff0000,
            0 0 20px #ff0000;
          animation: glitch-text-red 0.5s infinite;
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
