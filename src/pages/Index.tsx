import { useState } from 'react';
import { Country, GameState } from '@/types/game';
import { Level, levels } from '@/types/levels';
import MainMenu from '@/components/MainMenu';
import CharacterSelect from '@/components/CharacterSelect';
import DialogueScene from '@/components/DialogueScene';
import LevelSelect from '@/components/LevelSelect';
import LevelGameplay from '@/components/LevelGameplay';
import CustomGallery from '@/components/CustomGallery';
import CountryballCreator from '@/components/CountryballCreator';
import { introDialogue } from '@/data/dialogues';

export default function Index() {
  const [gameState, setGameState] = useState<GameState>({
    currentScene: 'menu',
    dialogueProgress: 0,
    language: 'ru',
  });

  const handleStartGame = () => {
    setGameState({ ...gameState, currentScene: 'characters' });
  };

  const handleCharacterSelect = (country: Country) => {
    setGameState({ 
      ...gameState, 
      currentScene: 'dialogue',
      selectedCountry: country,
    });
  };

  const handleDialogueComplete = () => {
    setGameState({ ...gameState, currentScene: 'levels' });
  };

  const handleLevelStart = (level: Level) => {
    setGameState({ 
      ...gameState, 
      currentScene: 'gameplay',
      selectedLevel: level.id,
    });
  };

  const handleLevelComplete = () => {
    setGameState({ ...gameState, currentScene: 'levels' });
  };

  const handleBackToMenu = () => {
    setGameState({ 
      currentScene: 'menu',
      dialogueProgress: 0,
      language: gameState.language,
    });
  };

  const handleGallery = () => {
    setGameState({ ...gameState, currentScene: 'gallery' });
  };

  const handleCreator = () => {
    setGameState({ ...gameState, currentScene: 'creator' });
  };

  const handleLanguageChange = (lang: 'ru' | 'en') => {
    setGameState({ ...gameState, language: lang });
  };

  return (
    <div className="min-h-screen bg-black">
      {gameState.currentScene === 'menu' && (
        <MainMenu 
          onStart={handleStartGame} 
          onGallery={handleGallery}
          onCreator={handleCreator}
          language={gameState.language}
          onLanguageChange={handleLanguageChange}
        />
      )}

      {gameState.currentScene === 'characters' && (
        <CharacterSelect 
          onSelect={handleCharacterSelect}
          onBack={handleBackToMenu}
          language={gameState.language}
        />
      )}

      {gameState.currentScene === 'gallery' && (
        <CustomGallery 
          onBack={handleBackToMenu}
          language={gameState.language}
        />
      )}

      {gameState.currentScene === 'creator' && (
        <CountryballCreator 
          onBack={handleBackToMenu}
          language={gameState.language}
        />
      )}

      {gameState.currentScene === 'dialogue' && (
        <DialogueScene 
          dialogue={introDialogue}
          onComplete={handleDialogueComplete}
        />
      )}

      {gameState.currentScene === 'levels' && (
        <LevelSelect 
          onBack={handleBackToMenu}
          onLevelStart={handleLevelStart}
          language={gameState.language}
        />
      )}

      {gameState.currentScene === 'gameplay' && gameState.selectedLevel && gameState.selectedCountry && (
        <LevelGameplay 
          level={levels.find(l => l.id === gameState.selectedLevel)!}
          character={gameState.selectedCountry}
          onComplete={handleLevelComplete}
          onBack={() => setGameState({ ...gameState, currentScene: 'levels' })}
          language={gameState.language}
        />
      )}

      {gameState.currentScene === 'gameplay' && !gameState.selectedLevel && (
        <div className="min-h-screen flex items-center justify-center bg-black crt-effect">
          <div className="text-center space-y-8 z-10 relative">
            <div className="text-6xl pixel-text text-[#00ff41] glitch-text">
              [УРОВЕНЬ 1]
            </div>
            <div className="text-3xl pixel-text text-white">
              Игровой процесс в разработке...
            </div>
            <button
              onClick={handleBackToMenu}
              className="mt-8 bg-[#00ff41] hover:bg-[#00dd35] text-black font-bold text-xl px-8 py-4 pixel-text border-4 border-[#008822] shadow-[4px_4px_0px_#008822] transition-all"
            >
              ВЕРНУТЬСЯ В МЕНЮ
            </button>
          </div>
          <div className="scanlines" />
          
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
      )}
    </div>
  );
}