import { useEffect, useRef, useState } from 'react';

const roundSeconds = 10;

export default function SpeedClickerGame() {
  const [active, setActive] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(roundSeconds);
  const [best, setBest] = useState(0);
  const scoreRef = useRef(0);

  const start = () => {
    scoreRef.current = 0;
    setScore(0);
    setTimeLeft(roundSeconds);
    setActive(true);
  };

  const click = () => {
    if (!active) {
      start();
      return;
    }

    scoreRef.current += 1;
    setScore(scoreRef.current);
  };

  useEffect(() => {
    if (!active) return;

    const timer = window.setInterval(() => {
      setTimeLeft((current) => {
        if (current <= 1) {
          window.clearInterval(timer);
          setActive(false);
          setBest((bestScore) => Math.max(bestScore, scoreRef.current));
          return 0;
        }

        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [active]);

  return (
    <div className="mini-game-panel">
      <button className="clicker-button" onClick={click} type="button">
        <span>{active ? 'Клик!' : 'Старт'}</span>
        <strong>{score}</strong>
      </button>
      <div className="game-footer">
        <span>Время: {timeLeft}с</span>
        <span>Рекорд: {best}</span>
      </div>
    </div>
  );
}
