import { Country } from '@/types/game';

interface PixelBallProps {
  country: Country;
  size?: 'small' | 'medium' | 'large';
  showEyes?: boolean;
  emotion?: 'neutral' | 'scared' | 'angry' | 'sad';
}

export default function PixelBall({ country, size = 'medium', showEyes = true, emotion = 'neutral' }: PixelBallProps) {
  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32',
  };

  const getEyePosition = () => {
    switch (emotion) {
      case 'scared':
        return 'top-6';
      case 'angry':
        return 'top-8';
      case 'sad':
        return 'top-10';
      default:
        return 'top-7';
    }
  };

  return (
    <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
      <div 
        className="w-full h-full rounded-full relative overflow-hidden pixel-border"
        style={{
          background: country.isHorror 
            ? `linear-gradient(135deg, ${country.colors[0]}, ${country.colors[1]})`
            : `linear-gradient(180deg, ${country.colors.join(', ')})`,
          imageRendering: 'pixelated',
          boxShadow: country.isHorror ? '0 0 20px rgba(255, 0, 0, 0.5)' : '0 4px 8px rgba(0,0,0,0.3)',
        }}
      >
        {showEyes && (
          <div className={`absolute inset-x-0 ${getEyePosition()} flex justify-center gap-3`}>
            <div 
              className="w-3 h-3 bg-white rounded-full pixel-border"
              style={{
                boxShadow: country.isHorror ? '0 0 10px #ff0000' : 'none',
              }}
            >
              <div className="w-1.5 h-1.5 bg-black rounded-full m-auto mt-0.5" />
            </div>
            <div 
              className="w-3 h-3 bg-white rounded-full pixel-border"
              style={{
                boxShadow: country.isHorror ? '0 0 10px #ff0000' : 'none',
              }}
            >
              <div className="w-1.5 h-1.5 bg-black rounded-full m-auto mt-0.5" />
            </div>
          </div>
        )}
        
        {country.isHorror && (
          <div className="absolute inset-0 bg-black opacity-40 animate-pulse" />
        )}
      </div>
      
      <style>{`
        .pixel-border {
          border: 2px solid rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}
