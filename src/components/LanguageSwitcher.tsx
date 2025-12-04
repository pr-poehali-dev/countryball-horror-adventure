import { Button } from '@/components/ui/button';

interface LanguageSwitcherProps {
  language: 'ru' | 'en';
  onLanguageChange: (lang: 'ru' | 'en') => void;
}

export default function LanguageSwitcher({ language, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <div className="flex gap-2">
      <Button
        onClick={() => onLanguageChange('ru')}
        variant={language === 'ru' ? 'default' : 'outline'}
        className={`
          pixel-text text-lg px-4 py-2 border-2 transition-all
          ${language === 'ru' 
            ? 'bg-[#00ff41] text-black border-[#008822]' 
            : 'bg-transparent text-[#00ff41] border-[#00ff41] hover:bg-[#00ff41]/10'
          }
        `}
      >
        RU
      </Button>
      <Button
        onClick={() => onLanguageChange('en')}
        variant={language === 'en' ? 'default' : 'outline'}
        className={`
          pixel-text text-lg px-4 py-2 border-2 transition-all
          ${language === 'en' 
            ? 'bg-[#00ff41] text-black border-[#008822]' 
            : 'bg-transparent text-[#00ff41] border-[#00ff41] hover:bg-[#00ff41]/10'
          }
        `}
      >
        EN
      </Button>
    </div>
  );
}
