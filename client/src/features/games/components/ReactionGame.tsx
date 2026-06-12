import { useEffect, useRef, useState } from 'react';

type ReactionState = 'idle' | 'waiting' | 'ready' | 'done' | 'tooSoon';

export default function ReactionGame() {
  const [state, setState] = useState<ReactionState>('idle');
  const [result, setResult] = useState<number | null>(null);
  const timerRef = useRef<number | null>(null);
  const startRef = useRef(0);

  const start = () => {
    setResult(null);
    setState('waiting');

    const delay = 1200 + Math.floor(Math.random() * 2200);
    timerRef.current = window.setTimeout(() => {
      startRef.current = performance.now();
      setState('ready');
    }, delay);
  };

  const handleClick = () => {
    if (state === 'idle' || state === 'done' || state === 'tooSoon') {
      start();
      return;
    }

    if (state === 'waiting') {
      if (timerRef.current) window.clearTimeout(timerRef.current);
      setState('tooSoon');
      return;
    }

    if (state === 'ready') {
      setResult(Math.round(performance.now() - startRef.current));
      setState('done');
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, []);

  const label = {
    idle: 'Старт',
    waiting: 'Жди зелёный сигнал...',
    ready: 'Жми!',
    done: `${result} мс · сыграть ещё`,
    tooSoon: 'Рано! Попробовать ещё',
  }[state];

  return (
    <div className={`mini-game-panel reaction-${state}`}>
      <button className="reaction-zone" onClick={handleClick} type="button">
        <span>{label}</span>
      </button>
      <p className="game-hint">Цель: попасть ближе к 200 мс или быстрее.</p>
    </div>
  );
}
