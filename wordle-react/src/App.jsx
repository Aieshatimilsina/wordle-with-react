// Layer 5 - the conductor: picks the answer, uses the hook,
// listens to the physical keyboard and renders the screen.
//AieshaTimilsina
import { useState, useEffect } from 'react';
import { getRandomWord } from './data/words';
import useWordle from './hooks/useWordle';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import './App.css';

export default function App() {
  const [answer] = useState(() => getRandomWord());
  const { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup } =
    useWordle(answer);

  const isGameOver = isCorrect || turn >= 6;

  // Side effect: attach a browser keydown listener (with cleanup).
  useEffect(() => {
    if (isGameOver) return; // stop input once finished
    const onKeyDown = (e) => handleKeyup(e.key);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleKeyup, isGameOver]);

  return (
    <div className="app">
      <h1>Wordle</h1>
      <Board guesses={guesses} currentGuess={currentGuess} turn={turn} />

      {isGameOver && (
        <div className="message">
          <p>
            {isCorrect
              ? 'You won!'
              : `Game over. The word was "${answer.toUpperCase()}".`}
          </p>
          <button className="play-again" onClick={() => window.location.reload()}>
            Play Again
          </button>
        </div>
      )}

      <Keyboard usedKeys={usedKeys} onKeyPress={handleKeyup} />
    </div>
  );
}
