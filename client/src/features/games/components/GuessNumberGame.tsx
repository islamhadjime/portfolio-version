import { useState } from 'react';

const createTarget = () => Math.floor(Math.random() * 50) + 1;

export default function GuessNumberGame() {
  const [target, setTarget] = useState(createTarget);
  const [value, setValue] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState('Введи число от 1 до 50.');
  const [won, setWon] = useState(false);

  const reset = () => {
    setTarget(createTarget());
    setValue('');
    setAttempts(0);
    setMessage('Новая игра: число уже загадано.');
    setWon(false);
  };

  const check = () => {
    const guess = Number(value);

    if (!Number.isInteger(guess) || guess < 1 || guess > 50) {
      setMessage('Нужно целое число от 1 до 50.');
      return;
    }

    const nextAttempts = attempts + 1;
    setAttempts(nextAttempts);

    if (guess === target) {
      setWon(true);
      setMessage(`Верно! Получилось за ${nextAttempts} попыток.`);
      return;
    }

    setMessage(guess < target ? 'Больше.' : 'Меньше.');
  };

  return (
    <div className="mini-game-panel">
      <div className="guess-game-row">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') check();
          }}
          inputMode="numeric"
          placeholder="Например: 24"
          disabled={won}
        />
        <button className="game-action-btn" onClick={won ? reset : check} type="button">
          {won ? 'Заново' : 'Проверить'}
        </button>
      </div>
      <p className="game-result">{message}</p>
      <p className="game-hint">Попыток: {attempts}</p>
    </div>
  );
}
