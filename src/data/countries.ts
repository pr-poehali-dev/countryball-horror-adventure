import { Country } from '@/types/game';

export const countries: Country[] = [
  // Original countries
  { id: 'netherlands', name: 'Нидерланды', flag: '🇳🇱', colors: ['#FF0000', '#FFFFFF', '#0000FF'] },
  { id: 'luxembourg', name: 'Люксембург', flag: '🇱🇺', colors: ['#FF0000', '#FFFFFF', '#00A3E0'] },
  { id: 'germany', name: 'Германия', flag: '🇩🇪', colors: ['#000000', '#DD0000', '#FFCE00'] },
  { id: 'hungary', name: 'Венгрия', flag: '🇭🇺', colors: ['#CE2939', '#FFFFFF', '#477050'] },
  { id: 'bulgaria', name: 'Болгария', flag: '🇧🇬', colors: ['#FFFFFF', '#00966E', '#D62612'] },
  { id: 'lithuania', name: 'Литва', flag: '🇱🇹', colors: ['#FDB913', '#006A44', '#C1272D'] },
  { id: 'estonia', name: 'Эстония', flag: '🇪🇪', colors: ['#0072CE', '#000000', '#FFFFFF'] },
  { id: 'gabon', name: 'Габон', flag: '🇬🇦', colors: ['#009E60', '#FCD116', '#3A75C4'] },
  { id: 'sierra-leone', name: 'Сьерра-Леоне', flag: '🇸🇱', colors: ['#1EB53A', '#FFFFFF', '#0072C6'] },
  { id: 'india', name: 'Индия', flag: '🇮🇳', colors: ['#FF9933', '#FFFFFF', '#138808'] },
  { id: 'croatia', name: 'Хорватия', flag: '🇭🇷', colors: ['#FF0000', '#FFFFFF', '#0000FF'] },
  { id: 'austria', name: 'Австрия', flag: '🇦🇹', colors: ['#ED2939', '#FFFFFF', '#ED2939'] },
  { id: 'uae', name: 'ОАЭ', flag: '🇦🇪', colors: ['#00732F', '#FFFFFF', '#000000', '#FF0000'] },
  { id: 'oman', name: 'Оман', flag: '🇴🇲', colors: ['#FFFFFF', '#FF0000', '#008000'] },
  { id: 'kuwait', name: 'Кувейт', flag: '🇰🇼', colors: ['#007A3D', '#FFFFFF', '#CE1126', '#000000'] },
  { id: 'iraq', name: 'Ирак', flag: '🇮🇶', colors: ['#CE1126', '#FFFFFF', '#000000'] },
  { id: 'egypt', name: 'Египет', flag: '🇪🇬', colors: ['#CE1126', '#FFFFFF', '#000000'] },
  { id: 'syria', name: 'Сирия', flag: '🇸🇾', colors: ['#CE1126', '#FFFFFF', '#000000'] },
  { id: 'bolivia', name: 'Боливия', flag: '🇧🇴', colors: ['#D52B1E', '#F9E300', '#007934'] },
  { id: 'paraguay', name: 'Парагвай', flag: '🇵🇾', colors: ['#D52B1E', '#FFFFFF', '#0038A8'] },
  { id: 'venezuela', name: 'Венесуэла', flag: '🇻🇪', colors: ['#FFCC00', '#00247D', '#CF142B'] },
  
  // Horror variants
  { id: 'horror-1', name: '???', flag: '⚫', colors: ['#000000', '#FF0000'], isHorror: true },
  { id: 'horror-2', name: 'Безымянный', flag: '👁️', colors: ['#FFFFFF', '#000000'], isHorror: true },
  { id: 'horror-3', name: 'Забытый', flag: '🌑', colors: ['#1a1a1a', '#666666'], isHorror: true },
  
  // Special characters
  { id: 'police', name: 'Полицейский', flag: '👮', colors: ['#0047AB', '#000000', '#FFFFFF'] },
  { id: 'custom-1', name: 'Герой в красной рубашке', flag: '👤', colors: ['#DC143C', '#000000'] },
  { id: 'custom-2', name: 'Герой в синей рубашке', flag: '👤', colors: ['#4169E1', '#000000'] },
  { id: 'custom-3', name: 'Герой в зелёной рубашке', flag: '👤', colors: ['#228B22', '#000000'] },
  { id: 'custom-4', name: 'Герой в жёлтой рубашке', flag: '👤', colors: ['#FFD700', '#000000'] },
  { id: 'custom-5', name: 'Герой в фиолетовой рубашке', flag: '👤', colors: ['#8B008B', '#000000'] },
  { id: 'custom-6', name: 'Герой в оранжевой рубашке', flag: '👤', colors: ['#FF8C00', '#000000'] },
  { id: 'custom-7', name: 'Герой в белой рубашке', flag: '👤', colors: ['#F5F5F5', '#808080'] },
];