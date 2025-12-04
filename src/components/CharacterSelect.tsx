import { Country } from '@/types/game';
import { countries } from '@/data/countries';
import PixelBall from './PixelBall';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

interface CharacterSelectProps {
  onSelect: (country: Country) => void;
  onBack: () => void;
}

export default function CharacterSelect({ onSelect, onBack }: CharacterSelectProps) {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const normalCountries = countries.filter(c => !c.isHorror && !c.id.includes('custom') && c.id !== 'police');
  const horrorCountries = countries.filter(c => c.isHorror);
  const specialCharacters = countries.filter(c => c.id.includes('custom') || c.id === 'police');

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
            НАЗАД
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold pixel-text glitch-text">
            ВЫБОР ПЕРСОНАЖА
          </h1>
          
          <div className="w-32" />
        </div>

        <div className="mb-12">
          <h2 className="text-2xl pixel-text mb-6 text-[#00ff41] opacity-70">
            █ ОБЫЧНЫЕ СТРАНЫ █
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {normalCountries.map((country) => (
              <div
                key={country.id}
                onClick={() => setSelectedCountry(country)}
                className={`
                  cursor-pointer p-4 border-4 transition-all hover:scale-105
                  ${selectedCountry?.id === country.id 
                    ? 'border-[#00ff41] bg-[#00ff41]/10 shadow-[0_0_20px_#00ff41]' 
                    : 'border-[#00ff41]/30 hover:border-[#00ff41]/60'
                  }
                `}
              >
                <div className="flex flex-col items-center gap-3">
                  <PixelBall country={country} size="medium" />
                  <div className="text-center pixel-text text-sm">
                    {country.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl pixel-text mb-6 text-[#00ff41]">
            █ ОСОБЫЕ ПЕРСОНАЖИ █
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {specialCharacters.map((country) => (
              <div
                key={country.id}
                onClick={() => setSelectedCountry(country)}
                className={`
                  cursor-pointer p-4 border-4 transition-all hover:scale-105
                  ${selectedCountry?.id === country.id 
                    ? 'border-[#FFD700] bg-[#FFD700]/10 shadow-[0_0_20px_#FFD700]' 
                    : 'border-[#FFD700]/30 hover:border-[#FFD700]/60'
                  }
                `}
              >
                <div className="flex flex-col items-center gap-3">
                  <PixelBall country={country} size="medium" />
                  <div className="text-center pixel-text text-sm text-[#FFD700]">
                    {country.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl pixel-text mb-6 text-red-600 animate-pulse">
            █ ТАИНСТВЕННЫЕ СУЩНОСТИ █
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {horrorCountries.map((country) => (
              <div
                key={country.id}
                onClick={() => setSelectedCountry(country)}
                className={`
                  cursor-pointer p-4 border-4 transition-all hover:scale-105
                  ${selectedCountry?.id === country.id 
                    ? 'border-red-600 bg-red-600/10 shadow-[0_0_20px_#ff0000]' 
                    : 'border-red-600/30 hover:border-red-600/60'
                  }
                `}
              >
                <div className="flex flex-col items-center gap-3">
                  <PixelBall country={country} size="medium" />
                  <div className="text-center pixel-text text-sm text-red-600">
                    {country.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedCountry && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 animate-scale-in z-20">
            <Button
              onClick={() => onSelect(selectedCountry)}
              className="bg-[#00ff41] hover:bg-[#00dd35] text-black font-bold text-2xl px-12 py-8 pixel-text border-4 border-[#008822] shadow-[6px_6px_0px_#008822] hover:shadow-[3px_3px_0px_#008822] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
            >
              <Icon name="Check" className="mr-2" size={32} />
              ВЫБРАТЬ {selectedCountry.name.toUpperCase()}
            </Button>
          </div>
        )}
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