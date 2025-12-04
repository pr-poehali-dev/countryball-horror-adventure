import { DialogueLine } from '@/types/game';

export const introDialogue: DialogueLine[] = [
  { countryId: 'germany', text: 'Что происходит? Где все?', emotion: 'scared' },
  { countryId: 'horror-1', text: '...', emotion: 'neutral' },
  { countryId: 'india', text: 'Я не могу найти выход из этого места...', emotion: 'scared' },
  { countryId: 'netherlands', text: 'Кто-то там? Покажись!', emotion: 'angry' },
  { countryId: 'horror-2', text: 'Вы все... останетесь здесь...', emotion: 'neutral' },
  { countryId: 'estonia', text: 'Это невозможно! Это не реально!', emotion: 'scared' },
  { countryId: 'horror-1', text: 'Реально...', emotion: 'neutral' },
  { countryId: 'egypt', text: 'Мы должны держаться вместе!', emotion: 'neutral' },
  { countryId: 'horror-3', text: 'Никто не уйдёт... никогда...', emotion: 'neutral' },
];

export const level1Dialogue: DialogueLine[] = [
  { countryId: 'croatia', text: 'Я слышу странные звуки...', emotion: 'scared' },
  { countryId: 'horror-1', text: 'Звуки твоего страха...', emotion: 'neutral' },
  { countryId: 'austria', text: 'Нужно найти путь назад!', emotion: 'angry' },
  { countryId: 'horror-2', text: 'Пути нет... только тьма...', emotion: 'neutral' },
];
