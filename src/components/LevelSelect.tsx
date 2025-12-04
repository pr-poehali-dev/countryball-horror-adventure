import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Level, levels as initialLevels } from '@/types/levels';

interface LevelSelectProps {
  onBack: () => void;
  onLevelStart: (level: Level) => void;
  language: 'ru' | 'en';
}

export default function LevelSelect({ onBack, onLevelStart, language }: LevelSelectProps) {
  const [levels] = useState<Level[]>(initialLevels);

  const text = {
    title: language === 'ru' ? 'ВЫБОР УРОВНЯ' : 'LEVEL SELECT',
    back: language === 'ru' ? 'НАЗАД' : 'BACK',
    locked: language === 'ru' ? 'ЗАБЛОКИРОВАНО' : 'LOCKED',
    completed: language === 'ru' ? 'ПРОЙДЕН' : 'COMPLETED',
    start: language === 'ru' ? 'НАЧАТЬ' : 'START',
    difficulty: {
      easy: language === 'ru' ? 'ЛЕГКО' : 'EASY',
      medium: language === 'ru' ? 'СРЕДНЕ' : 'MEDIUM',
      hard: language === 'ru' ? 'СЛОЖНО' : 'HARD',
      extreme: language === 'ru' ? 'ЭКСТРИМ' : 'EXTREME',
    },
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
    <div className="min-h-screen bg-black text-[#00ff41] p-8 crt-effect">
      <div className="scanlines" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-8 flex items-center justify-between">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-[#00ff41] hover:text-[#00dd35] pixel-text text-xl"
          >
            <Icon name="ArrowLeft" className="mr-2" />
            {text.back}
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold pixel-text glitch-text">
            {text.title}
          </h1>
          
          <div className="w-32" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {levels.map((level) => (
            <div
              key={level.id}
              className={`
                relative border-4 p-6 transition-all
                ${level.unlocked 
                  ? 'border-[#00ff41] hover:bg-[#00ff41]/5 hover:scale-105' 
                  : 'border-gray-700 opacity-50'
                }
                ${level.completed ? 'bg-[#00ff41]/10' : 'bg-black/50'}
              `}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-6xl pixel-text font-bold opacity-20">
                  {level.id < 10 ? `0${level.id}` : level.id}
                </div>
                
                {level.completed && (
                  <Icon name="CheckCircle" className="text-[#00ff41]" size={32} />
                )}
                {!level.unlocked && (
                  <Icon name="Lock" className="text-gray-700" size={32} />
                )}
              </div>

              <h3 className="text-2xl pixel-text font-bold mb-2">
                {language === 'en' ? level.nameEn : level.name}
              </h3>

              <p className="text-sm pixel-text opacity-70 mb-4">
                {language === 'en' ? level.descriptionEn : level.description}
              </p>

              <div 
                className="text-sm pixel-text font-bold mb-4 inline-block px-3 py-1 border-2"
                style={{ 
                  color: getDifficultyColor(level.difficulty),
                  borderColor: getDifficultyColor(level.difficulty),
                }}
              >
                {text.difficulty[level.difficulty]}
              </div>

              {level.unlocked ? (
                <Button
                  onClick={() => onLevelStart(level)}
                  className="w-full bg-[#00ff41] hover:bg-[#00dd35] text-black font-bold text-xl py-4 pixel-text border-4 border-[#008822] shadow-[4px_4px_0px_#008822] hover:shadow-[2px_2px_0px_#008822] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                >
                  <Icon name="Play" className="mr-2" size={20} />
                  {text.start}
                </Button>
              ) : (
                <div className="w-full bg-gray-800 text-gray-500 font-bold text-xl py-4 pixel-text border-4 border-gray-700 text-center">
                  <Icon name="Lock" className="inline mr-2" size={20} />
                  {text.locked}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
        
        .pixel-text {
          font-family: 'VT323', monospace;
          letter-spacing: 2px;
        }
        
        .crt-effect {
          background: radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%);
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
          z-index: 1;
          animation: scanline 8s linear infinite;
        }
        
        @keyframes scanline {
          0% { transform: translateY(0); }
          100% { transform: translateY(10px); }
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
