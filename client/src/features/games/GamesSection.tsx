import { useState } from 'react';
import type { ReactElement } from 'react';
import { games, type GameId } from './data/games';
import ReactionGame from './components/ReactionGame';
import GuessNumberGame from './components/GuessNumberGame';
import MemoryCardsGame from './components/MemoryCardsGame';
import SpeedClickerGame from './components/SpeedClickerGame';

const gameComponents: Record<GameId, ReactElement> = {
  reaction: <ReactionGame />,
  guess: <GuessNumberGame />,
  memory: <MemoryCardsGame />,
  clicker: <SpeedClickerGame />,
};

export default function GamesSection() {
  const [activeGame, setActiveGame] = useState<GameId>('reaction');
  const currentGame = games.find((game) => game.id === activeGame) ?? games[0];

  return (
    <section id="games">
      <div className="games-heading">
        <div>
          <h2>Лёгкие мини-игры</h2>
          <p>
            Небольшие интерактивные проекты на React: состояние, таймеры, события,
            условный рендеринг и адаптивный UI.
          </p>
        </div>
        <span className="games-badge">4 мини-проекта</span>
      </div>

      <div className="games-layout">
        <div className="games-list">
          {games.map((game) => (
            <button
              key={game.id}
              className={`game-select-card glass-card${activeGame === game.id ? ' active' : ''}`}
              onClick={() => setActiveGame(game.id)}
              type="button"
            >
              <i className={game.icon} />
              <span>
                <strong>{game.title}</strong>
                <small>{game.description}</small>
              </span>
            </button>
          ))}
        </div>

        <div className="game-stage glass-card">
          <div className="game-stage-header">
            <i className={currentGame.icon} />
            <div>
              <h3>{currentGame.title}</h3>
              <p>{currentGame.description}</p>
            </div>
          </div>
          {gameComponents[activeGame]}
        </div>
      </div>
    </section>
  );
}
