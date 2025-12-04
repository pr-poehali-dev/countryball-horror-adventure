import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { CustomCountryball } from '@/types/game';
import { Input } from '@/components/ui/input';

interface CustomGalleryProps {
  onBack: () => void;
  language: 'ru' | 'en';
}

export default function CustomGallery({ onBack, language }: CustomGalleryProps) {
  const [customBalls, setCustomBalls] = useState<CustomCountryball[]>([]);
  const [name, setName] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleAddBall = () => {
    if (name && previewUrl) {
      const newBall: CustomCountryball = {
        id: `custom-${Date.now()}`,
        name,
        imageUrl: previewUrl,
        colors: ['#FF0000', '#000000'],
      };
      setCustomBalls([...customBalls, newBall]);
      setName('');
      setSelectedFile(null);
      setPreviewUrl('');
    }
  };

  const text = {
    title: language === 'ru' ? 'ГАЛЕРЕЯ КАСТОМНЫХ КАНТРИБОЛОВ' : 'CUSTOM COUNTRYBALL GALLERY',
    back: language === 'ru' ? 'НАЗАД' : 'BACK',
    uploadTitle: language === 'ru' ? 'Загрузить свой кантрибол' : 'Upload Your Countryball',
    namePlaceholder: language === 'ru' ? 'Название кантрибола' : 'Countryball Name',
    chooseFile: language === 'ru' ? 'Выбрать файл' : 'Choose File',
    add: language === 'ru' ? 'ДОБАВИТЬ' : 'ADD',
    yourBalls: language === 'ru' ? 'Ваши кантриболы' : 'Your Countryballs',
    empty: language === 'ru' ? 'Пока пусто. Загрузите свой первый кантрибол!' : 'Empty. Upload your first countryball!',
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
          
          <h1 className="text-3xl md:text-4xl font-bold pixel-text glitch-text">
            {text.title}
          </h1>
          
          <div className="w-32" />
        </div>

        <div className="mb-12 bg-black/50 border-4 border-[#00ff41] p-8">
          <h2 className="text-2xl pixel-text mb-6">{text.uploadTitle}</h2>
          
          <div className="space-y-4">
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={text.namePlaceholder}
              className="bg-black border-[#00ff41] text-[#00ff41] pixel-text text-xl"
            />
            
            <div className="flex gap-4 items-center">
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <div className="bg-transparent border-4 border-[#00ff41] text-[#00ff41] pixel-text text-xl px-6 py-3 hover:bg-[#00ff41]/10 transition-all">
                  {text.chooseFile}
                </div>
              </label>
              
              {previewUrl && (
                <img src={previewUrl} alt="Preview" className="w-24 h-24 rounded-full border-4 border-[#00ff41]" />
              )}
            </div>

            <Button
              onClick={handleAddBall}
              disabled={!name || !previewUrl}
              className="bg-[#00ff41] hover:bg-[#00dd35] text-black font-bold text-xl px-8 py-4 pixel-text border-4 border-[#008822] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Icon name="Plus" className="mr-2" />
              {text.add}
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-2xl pixel-text mb-6">{text.yourBalls}</h2>
          
          {customBalls.length === 0 ? (
            <div className="text-center text-[#00ff41]/50 pixel-text text-xl py-12">
              {text.empty}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {customBalls.map((ball) => (
                <div
                  key={ball.id}
                  className="p-4 border-4 border-[#00ff41] bg-[#00ff41]/5 hover:bg-[#00ff41]/10 transition-all"
                >
                  <div className="flex flex-col items-center gap-3">
                    <img src={ball.imageUrl} alt={ball.name} className="w-24 h-24 rounded-full border-2 border-[#00ff41]" />
                    <div className="text-center pixel-text text-sm">{ball.name}</div>
                  </div>
                </div>
              ))}
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
