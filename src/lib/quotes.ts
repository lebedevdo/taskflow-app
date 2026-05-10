// Theme-bound quote pool. Picked once per session.
// v0.8.1: refreshed with universal motivational productivity quotes for all themes.
import type { ThemeName } from '../store/useStore';

export const quotes = {
  light: {
    ru: [
      'Маленькие шаги каждый день побеждают грандиозные планы раз в год.',
      'Сделай сегодня то, за что завтра скажешь спасибо.',
      'Глубокая работа важнее срочной.',
      'Не управляй временем — управляй вниманием.',
      'Внимание — единственная валюта, которой стоит дорожить.',
      'Большое складывается из малого, повторённого ежедневно.',
      'Сложные задачи распадаются на простые шаги — нужно лишь начать.',
      'Состояние потока возникает там, где заканчивается прокрастинация.',
      'Лучшая система — та, которая работает без напоминаний.',
      'Свобода — это дисциплина, превращённая в привычку.',
    ],
    en: [
      'Small daily steps beat grand annual plans.',
      'Do today what your future self will thank you for.',
      'Done is better than perfect.',
      'Don\'t manage time — manage attention.',
      'Deep work beats urgent work.',
      'Focus is the new IQ.',
      'Discipline equals freedom.',
      'A goal without a system is a wish.',
      'Slow is smooth, smooth is fast.',
      'You don\'t rise to the level of your goals; you fall to the level of your systems.',
    ],
  },
  dark: {
    ru: [
      'Продуктивность — это не скорость, а ясность цели.',
      'Один важный звонок весит больше десяти второстепенных.',
      'Расставленные приоритеты — половина результата.',
      'Часовая концентрация стоит дня хаоса.',
      'Простота — высшая форма проектирования.',
      'Не ищи мотивацию, ищи дисциплину.',
      'Сначала тяжёлое, потом лёгкое — никогда наоборот.',
      'Прогресс важнее совершенства.',
      'Каждая выполненная задача — кирпич в фундаменте большего.',
      'Делай меньше, но лучше.',
    ],
    en: [
      'Productivity is not speed — it is clarity of purpose.',
      'The most important things are rarely urgent.',
      'Inputs you control beat outcomes you don\'t.',
      'Clarity is the first deliverable.',
      'Eat the frog before noon.',
      'Cut the noise; ship the signal.',
      'Progress over perfection.',
      'Focus on the process, the results will follow.',
      'Every completed task is a brick in a larger foundation.',
      'Do less, but better.',
    ],
  },
  konoha: {
    ru: [
      'Маленькие шаги каждый день побеждают грандиозные планы раз в год.',
      'Сделай сегодня то, за что завтра скажешь спасибо.',
      'Терпение и настойчивость превращают мечту в реальность.',
      'Прогресс важнее совершенства — начни и улучши по пути.',
      'Лучший момент начать — прямо сейчас.',
      'Концентрация на одной задаче мощнее рассеянных усилий на десяти.',
      'Отдых — это часть работы, а не её отсутствие.',
      'Твои привычки сегодня определяют твои результаты завтра.',
      'Сила воли — мышца: тренируй её каждый день.',
      'Каждый завершённый проект — это опыт, который нельзя купить.',
    ],
    en: [
      'Small daily steps beat grand annual plans.',
      'Do today what your future self will thank you for.',
      'Patience and persistence turn dreams into reality.',
      'Progress over perfection — start, then improve along the way.',
      'The best time to start is right now.',
      'Focus on one task beats scattered effort on ten.',
      'Rest is part of the work, not its absence.',
      'Your habits today define your results tomorrow.',
      'Willpower is a muscle — train it daily.',
      'Every completed project is experience that cannot be bought.',
    ],
  },
  akatsuki: {
    ru: [
      'Продуктивность — это не скорость, а ясность цели.',
      'Делай меньше, но лучше — это и есть мастерство.',
      'Прогресс важнее совершенства.',
      'Дисциплина — это форма свободы.',
      'Каждая выполненная задача — шаг к большему.',
      'Фокус — самый дефицитный ресурс эпохи.',
      'Сначала тяжёлое, потом лёгкое — никогда наоборот.',
      'Не ищи мотивацию, ищи систему.',
      'Отвлечение — враг результата.',
      'Простота — признак зрелости мышления.',
    ],
    en: [
      'Productivity is not speed — it is clarity of purpose.',
      'Do less, but better — that is mastery.',
      'Progress over perfection.',
      'Discipline is a form of freedom.',
      'Every completed task is a step toward something greater.',
      'Focus is the scarcest resource of our age.',
      'Hard things first, easy things second — never the other way.',
      'Don\'t seek motivation, seek a system.',
      'Distraction is the enemy of results.',
      'Simplicity is the mark of a mature mind.',
    ],
  },
};

export type QuoteSet = keyof typeof quotes;

export function quoteSetFor(theme: ThemeName): QuoteSet {
  return theme as QuoteSet;
}

// Pick a random quote, preferring `lang` but falling back if pool empty.
export function pickQuote(set: QuoteSet, lang: 'ru' | 'en'): string {
  const themeQuotes = quotes[set] ?? quotes.light;
  const pool = (themeQuotes as any)[lang] || (themeQuotes as any).ru || quotes.light.ru;
  return pool[Math.floor(Math.random() * pool.length)];
}
