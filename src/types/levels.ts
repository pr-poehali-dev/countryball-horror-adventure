export interface Level {
  id: number;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'extreme';
  unlocked: boolean;
  completed: boolean;
}

export const levels: Level[] = [
  {
    id: 1,
    name: 'Темный коридор',
    nameEn: 'Dark Corridor',
    description: 'Начало кошмара. Найди выход из коридора.',
    descriptionEn: 'The nightmare begins. Find the exit from the corridor.',
    difficulty: 'easy',
    unlocked: true,
    completed: false,
  },
  {
    id: 2,
    name: 'Заброшенная комната',
    nameEn: 'Abandoned Room',
    description: 'Комната полна теней и странных звуков.',
    descriptionEn: 'The room is full of shadows and strange sounds.',
    difficulty: 'easy',
    unlocked: false,
    completed: false,
  },
  {
    id: 3,
    name: 'Лабиринт страха',
    nameEn: 'Maze of Fear',
    description: 'Запутанные проходы. Не заблудись.',
    descriptionEn: 'Tangled passages. Don\'t get lost.',
    difficulty: 'medium',
    unlocked: false,
    completed: false,
  },
  {
    id: 4,
    name: 'Подземелье',
    nameEn: 'The Dungeon',
    description: 'Спустись в глубины тьмы.',
    descriptionEn: 'Descend into the depths of darkness.',
    difficulty: 'medium',
    unlocked: false,
    completed: false,
  },
  {
    id: 5,
    name: 'Зал зеркал',
    nameEn: 'Hall of Mirrors',
    description: 'Отражения лгут. Что реально?',
    descriptionEn: 'Reflections lie. What is real?',
    difficulty: 'medium',
    unlocked: false,
    completed: false,
  },
  {
    id: 6,
    name: 'Библиотека забытых',
    nameEn: 'Library of the Forgotten',
    description: 'Книги хранят страшные тайны.',
    descriptionEn: 'Books hold terrible secrets.',
    difficulty: 'hard',
    unlocked: false,
    completed: false,
  },
  {
    id: 7,
    name: 'Башня теней',
    nameEn: 'Tower of Shadows',
    description: 'Поднимись на вершину башни.',
    descriptionEn: 'Climb to the top of the tower.',
    difficulty: 'hard',
    unlocked: false,
    completed: false,
  },
  {
    id: 8,
    name: 'Портал в бездну',
    nameEn: 'Portal to the Abyss',
    description: 'Врата открыты. Войдёшь ли ты?',
    descriptionEn: 'The gates are open. Will you enter?',
    difficulty: 'hard',
    unlocked: false,
    completed: false,
  },
  {
    id: 9,
    name: 'Логово кошмара',
    nameEn: 'Nightmare\'s Lair',
    description: 'Источник всех ужасов близко.',
    descriptionEn: 'The source of all horrors is near.',
    difficulty: 'extreme',
    unlocked: false,
    completed: false,
  },
  {
    id: 10,
    name: 'Финальное противостояние',
    nameEn: 'Final Confrontation',
    description: 'Последняя битва. Всё или ничего.',
    descriptionEn: 'The final battle. All or nothing.',
    difficulty: 'extreme',
    unlocked: false,
    completed: false,
  },
];
