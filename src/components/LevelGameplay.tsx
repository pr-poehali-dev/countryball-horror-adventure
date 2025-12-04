import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Level } from '@/types/levels';
import { Country } from '@/types/game';
import PixelBall from './PixelBall';

interface LevelGameplayProps {
  level: Level;
  character: Country;
  onComplete: () => void;
  onBack: () => void;
  language: 'ru' | 'en';
}

export default function LevelGameplay({ level, character, onComplete, onBack, language }: LevelGameplayProps) {
  const [progress, setProgress] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (gameStarted && progress < 100) {
      const timer = setInterval(() => {
        setProgress(prev => Math.min(prev + 1, 100));
      }, 100);
      
      return () => clearInterval(timer);
    } else if (progress === 100) {
      setTimeout(() => {
        onComplete();
      }, 1000);
    }
  }, [gameStarted, progress, onComplete]);

  const text = {
    levelTitle: language === 'ru' ? 'УРОВЕНЬ' : 'LEVEL',
    back: language === 'ru' ? 'НАЗАД' : 'BACK',
    start: language === 'ru' ? 'НАЧАТЬ УРОВЕНЬ' : 'START LEVEL',
    progress: language === 'ru' ? 'ПРОГРЕСС' : 'PROGRESS',
    loading: language === 'ru' ? 'ЗАГРУЗКА...' : 'LOADING...',
    complete: language === 'ru' ? 'УРОВЕНЬ ПРОЙДЕН!' : 'LEVEL COMPLETE!',
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '#00ff41';
      case 'medium': return '#FFD700';
      case 'hard': return '#FF8C00';
      case 'extreme': return '#ff0000';
      default: return '#00ff41';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white crt-effect relative overflow-hidden">
      <div className="scanlines" />
      <div className="glitch-overlay" />
      
      <div 
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: level.difficulty === 'extreme' 
            ? 'radial-gradient(ellipse at center, #1a0000 0%, #000000 100%)'
            : level.difficulty === 'hard'
            ? 'radial-gradient(ellipse at center, #1a0a00 0%, #000000 100%)'
            : 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)',
        }}
      />

      <div className="relative z-10 min-h-screen flex flex-col p-8">
        <div className="flex items-center justify-between mb-8">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-[#00ff41] hover:text-[#00dd35] pixel-text text-xl"
          >
            <Icon name="ArrowLeft" className="mr-2" />
            {text.back}
          </Button>
          
          <div className="text-center">
            <div 
              className="text-2xl pixel-text font-bold mb-2"
              style={{ color: getDifficultyColor(level.difficulty) }}
            >
              {text.levelTitle} {level.id}
            </div>
            <div className="text-xl pixel-text">
              {language === 'en' ? level.nameEn : level.name}
            </div>
          </div>

          <div className="w-32" />
        </div>

        <div className="flex-1 flex items-center justify-center">
          {!gameStarted ? (
            <div className="text-center space-y-8 animate-scale-in">
              <PixelBall country={character} size="large" />
              
              <div className="space-y-4">
                <h2 className="text-3xl pixel-text font-bold text-[#00ff41]">
                  {language === 'en' ? level.nameEn : level.name}
                </h2>
                <p className="text-xl pixel-text opacity-70">
                  {language === 'en' ? level.descriptionEn : level.description}
                </p>
              </div>

              <Button
                onClick={() => setGameStarted(true)}
                className="bg-[#00ff41] hover:bg-[#00dd35] text-black font-bold text-2xl px-12 py-8 pixel-text border-4 border-[#008822] shadow-[6px_6px_0px_#008822] hover:shadow-[3px_3px_0px_#008822] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
              >
                <Icon name="Play" className="mr-2" size={32} />
                {text.start}
              </Button>
            </div>
          ) : (
            <div className="w-full max-w-2xl space-y-8 animate-fade-in">
              <div className="text-center">
                <PixelBall country={character} size="large" />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between pixel-text text-xl">
                  <span>{text.progress}</span>
                  <span style={{ color: getDifficultyColor(level.difficulty) }}>
                    {progress}%
                  </span>
                </div>
                
                <div className="w-full h-8 border-4 border-[#00ff41] bg-black">
                  <div 
                    className="h-full transition-all duration-100"
                    style={{ 
                      width: `${progress}%`,
                      background: getDifficultyColor(level.difficulty),
                    }}
                  />
                </div>

                {progress === 100 ? (
                  <div className="text-center text-3xl pixel-text text-[#00ff41] glitch-text animate-pulse">
                    {text.complete}
                  </div>
                ) : (
                  <div className="text-center text-xl pixel-text opacity-50">
                    {text.loading}
                  </div>
                )}
              </div>
            </div>
          )}
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
        
        .glitch-text {
          text-shadow: 
            2px 2px 0px #00ff41,
            -2px -2px 0px #00ff41,
            0 0 20px #00ff41;
        }
      `}</style>
    </div>
  );
}
