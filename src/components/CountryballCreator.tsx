import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface CountryballCreatorProps {
  onBack: () => void;
  language: 'ru' | 'en';
}

export default function CountryballCreator({ onBack, language }: CountryballCreatorProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = () => {
    if (name && previewUrl) {
      setSubmitted(true);
      setTimeout(() => {
        setName('');
        setDescription('');
        setSelectedFile(null);
        setPreviewUrl('');
        setSubmitted(false);
      }, 3000);
    }
  };

  const text = {
    title: language === 'ru' ? 'СОЗДАЙ СВОЙ КАНТРИБОЛ' : 'CREATE YOUR COUNTRYBALL',
    back: language === 'ru' ? 'НАЗАД' : 'BACK',
    namePlaceholder: language === 'ru' ? 'Название вашего кантрибола' : 'Your Countryball Name',
    descPlaceholder: language === 'ru' ? 'Описание (необязательно)' : 'Description (optional)',
    uploadImage: language === 'ru' ? 'ЗАГРУЗИТЬ ИЗОБРАЖЕНИЕ' : 'UPLOAD IMAGE',
    preview: language === 'ru' ? 'Предпросмотр:' : 'Preview:',
    submit: language === 'ru' ? 'ОТПРАВИТЬ' : 'SUBMIT',
    success: language === 'ru' ? 'Отправлено успешно!' : 'Submitted Successfully!',
    instructions: language === 'ru' 
      ? 'Создайте своего уникального кантрибола! Загрузите изображение, дайте ему имя и поделитесь с сообществом.' 
      : 'Create your unique countryball! Upload an image, give it a name, and share with the community.',
  };

  return (
    <div className="min-h-screen bg-black text-[#00ff41] p-8 crt-effect">
      <div className="scanlines" />
      
      <div className="max-w-4xl mx-auto relative z-10">
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

        <div className="bg-black/50 border-4 border-[#00ff41] p-8 mb-8">
          <p className="pixel-text text-lg mb-6 text-center opacity-80">
            {text.instructions}
          </p>
        </div>

        {submitted ? (
          <div className="bg-black/50 border-4 border-[#00ff41] p-12 text-center animate-scale-in">
            <Icon name="CheckCircle" size={64} className="mx-auto mb-4 text-[#00ff41]" />
            <h2 className="text-4xl pixel-text text-[#00ff41] glitch-text mb-4">
              {text.success}
            </h2>
            <p className="text-xl pixel-text opacity-70">
              {language === 'ru' ? 'Ваш кантрибол добавлен в галерею!' : 'Your countryball has been added to the gallery!'}
            </p>
          </div>
        ) : (
          <div className="bg-black/50 border-4 border-[#00ff41] p-8">
            <div className="space-y-6">
              <div>
                <label className="pixel-text text-xl mb-2 block">
                  {language === 'ru' ? 'Название:' : 'Name:'}
                </label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={text.namePlaceholder}
                  className="bg-black border-2 border-[#00ff41] text-[#00ff41] pixel-text text-xl py-6 focus:border-[#00dd35] focus:ring-0"
                />
              </div>

              <div>
                <label className="pixel-text text-xl mb-2 block">
                  {language === 'ru' ? 'Описание:' : 'Description:'}
                </label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder={text.descPlaceholder}
                  className="bg-black border-2 border-[#00ff41] text-[#00ff41] pixel-text text-xl min-h-32 focus:border-[#00dd35] focus:ring-0"
                />
              </div>

              <div>
                <label className="pixel-text text-xl mb-4 block">
                  {language === 'ru' ? 'Изображение:' : 'Image:'}
                </label>
                
                <label className="cursor-pointer block">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  <div className="bg-transparent border-4 border-[#00ff41] text-[#00ff41] pixel-text text-xl px-8 py-6 hover:bg-[#00ff41]/10 transition-all text-center">
                    <Icon name="Upload" className="inline mr-3" size={28} />
                    {text.uploadImage}
                  </div>
                </label>

                {previewUrl && (
                  <div className="mt-6 text-center">
                    <p className="pixel-text text-lg mb-4">{text.preview}</p>
                    <div className="inline-block border-4 border-[#00ff41] p-4 bg-black">
                      <img 
                        src={previewUrl} 
                        alt="Preview" 
                        className="w-48 h-48 rounded-full object-cover"
                        style={{ imageRendering: 'pixelated' }}
                      />
                    </div>
                  </div>
                )}
              </div>

              <Button
                onClick={handleSubmit}
                disabled={!name || !previewUrl}
                className="w-full bg-[#00ff41] hover:bg-[#00dd35] text-black font-bold text-2xl px-12 py-8 pixel-text border-4 border-[#008822] shadow-[6px_6px_0px_#008822] hover:shadow-[3px_3px_0px_#008822] hover:translate-x-[3px] hover:translate-y-[3px] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0"
              >
                <Icon name="Send" className="mr-3" size={32} />
                {text.submit}
              </Button>
            </div>
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
