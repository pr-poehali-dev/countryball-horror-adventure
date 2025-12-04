import { Country } from '@/types/game';

export const countries: Country[] = [
  // Original countries
  { id: 'netherlands', name: 'Нидерланды', nameEn: 'Netherlands', flag: '🇳🇱', colors: ['#FF0000', '#FFFFFF', '#0000FF'] },
  { id: 'luxembourg', name: 'Люксембург', nameEn: 'Luxembourg', flag: '🇱🇺', colors: ['#FF0000', '#FFFFFF', '#00A3E0'] },
  { id: 'germany', name: 'Германия', nameEn: 'Germany', flag: '🇩🇪', colors: ['#000000', '#DD0000', '#FFCE00'] },
  { id: 'hungary', name: 'Венгрия', nameEn: 'Hungary', flag: '🇭🇺', colors: ['#CE2939', '#FFFFFF', '#477050'] },
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
  
  // Arabia
  { id: 'saudi-arabia', name: 'Саудовская Аравия', nameEn: 'Saudi Arabia', flag: '🇸🇦', colors: ['#165C31', '#FFFFFF'] },
  { id: 'yemen', name: 'Йемен', nameEn: 'Yemen', flag: '🇾🇪', colors: ['#CE1126', '#FFFFFF', '#000000'] },
  { id: 'jordan', name: 'Иордания', nameEn: 'Jordan', flag: '🇯🇴', colors: ['#000000', '#FFFFFF', '#007A3D', '#CE1126'] },
  
  // Special characters
  { id: 'police', name: 'Полицейский', nameEn: 'Police Man', flag: '👮', colors: ['#0047AB', '#000000', '#FFFFFF'], isHuman: true },
  { id: 'human-red', name: 'Герой в красной рубашке', nameEn: 'Red Shirt Human', flag: '👤', colors: ['#DC143C', '#000000'], isHuman: true },
  { id: 'human-blue', name: 'Герой в синей рубашке', nameEn: 'Blue Shirt Human', flag: '👤', colors: ['#4169E1', '#000000'], isHuman: true },
  { id: 'human-green', name: 'Герой в зелёной рубашке', nameEn: 'Green Shirt Human', flag: '👤', colors: ['#228B22', '#000000'], isHuman: true },
  { id: 'human-yellow', name: 'Герой в жёлтой рубашке', nameEn: 'Yellow Shirt Human', flag: '👤', colors: ['#FFD700', '#000000'], isHuman: true },
  { id: 'human-purple', name: 'Герой в фиолетовой рубашке', nameEn: 'Purple Shirt Human', flag: '👤', colors: ['#8B008B', '#000000'], isHuman: true },
  { id: 'human-orange', name: 'Герой в оранжевой рубашке', nameEn: 'Orange Shirt Human', flag: '👤', colors: ['#FF8C00', '#000000'], isHuman: true },
  { id: 'human-white', name: 'Герой в белой рубашке', nameEn: 'White Shirt Human', flag: '👤', colors: ['#F5F5F5', '#808080'], isHuman: true },
];