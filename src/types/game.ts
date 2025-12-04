export interface Country {
  id: string;
  name: string;
  nameEn?: string;
  flag: string;
  colors: string[];
  isHorror?: boolean;
  isHuman?: boolean;
  isCustom?: boolean;
}

export interface DialogueLine {
  countryId: string;
  text: string;
  textEn?: string;
  emotion?: 'neutral' | 'scared' | 'angry' | 'sad';
}

export interface GameState {
  currentScene: 'menu' | 'characters' | 'dialogue' | 'gameplay' | 'gallery' | 'creator';
  selectedCountry?: Country;
  dialogueProgress: number;
  language: 'ru' | 'en';
}

export interface CustomCountryball {
  id: string;
  name: string;
  imageUrl: string;
  colors: string[];
}