export type GameId = 'reaction' | 'guess' | 'memory' | 'clicker';

export interface GameMeta {
  id: GameId;
  title: string;
  description: string;
  icon: string;
}

export const games: GameMeta[] = [
  {
    id: 'reaction',
    title: 'Тест реакции',
    description: 'Дождись зелёного сигнала и нажми как можно быстрее.',
    icon: 'fas fa-bolt',
  },
  {
    id: 'guess',
    title: 'Угадай число',
    description: 'Найди число от 1 до 50 за минимальное количество попыток.',
    icon: 'fas fa-hashtag',
  },
  {
    id: 'memory',
    title: 'Memory',
    description: 'Открой пары карточек и запомни их позиции.',
    icon: 'fas fa-brain',
  },
  {
    id: 'clicker',
    title: 'Кликер 10 секунд',
    description: 'Проверь скорость кликов за короткий раунд.',
    icon: 'fas fa-computer-mouse',
  },
];
