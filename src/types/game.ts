export interface Country {
  id: string;
  name: string;
  flag: string;
  colors: string[];
  isHorror?: boolean;
}

export interface DialogueLine {
  countryId: string;
  text: string;
  emotion?: 'neutral' | 'scared' | 'angry' | 'sad';
}

export interface GameState {
  currentScene: 'menu' | 'characters' | 'dialogue' | 'gameplay';
  selectedCountry?: Country;
  dialogueProgress: number;
}
