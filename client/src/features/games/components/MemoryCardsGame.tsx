import { useEffect, useMemo, useState } from 'react';

const symbols = ['⚛', 'JS', 'TS', 'UI', 'API', 'DB'];

const shuffle = (items: string[]) =>
  items
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

export default function MemoryCardsGame() {
  const [seed, setSeed] = useState(0);
  const cards = useMemo(() => shuffle([...symbols, ...symbols]), [seed]);
  const [opened, setOpened] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  const reset = () => {
    setSeed((current) => current + 1);
    setOpened([]);
    setMatched([]);
    setMoves(0);
  };

  const openCard = (index: number) => {
    if (opened.includes(index) || matched.includes(index) || opened.length === 2) return;
    setOpened((current) => [...current, index]);
  };

  useEffect(() => {
    if (opened.length !== 2) return;

    setMoves((current) => current + 1);
    const [first, second] = opened;

    if (cards[first] === cards[second]) {
      setMatched((current) => [...current, first, second]);
      setOpened([]);
      return;
    }

    const timer = window.setTimeout(() => setOpened([]), 700);
    return () => window.clearTimeout(timer);
  }, [cards, opened]);

  const isFinished = matched.length === cards.length;

  return (
    <div className="mini-game-panel">
      <div className="memory-grid">
        {cards.map((card, index) => {
          const visible = opened.includes(index) || matched.includes(index);
          return (
            <button
              key={`${card}-${index}-${seed}`}
              className={`memory-card${visible ? ' open' : ''}`}
              onClick={() => openCard(index)}
              type="button"
            >
              {visible ? card : '?'}
            </button>
          );
        })}
      </div>
      <div className="game-footer">
        <span>{isFinished ? `Готово за ${moves} ходов` : `Ходов: ${moves}`}</span>
        <button className="game-action-btn small" onClick={reset} type="button">
          Сброс
        </button>
      </div>
    </div>
  );
}
