import React from 'react';

import { sample } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(Array.from({ length: NUM_OF_GUESSES_ALLOWED }).map(() => ({ value: '', feedback: [] })));
  const [guessCount, setGuessCount] = React.useState(0);
  const [gameStatus, setGameStatus] = React.useState('active');

  function onNewGuess(newGuess) {
    const newGuesses = [...guesses];
    const newGuessCount = guessCount + 1;
    const feedback = checkGuess(newGuess, answer);
    newGuesses[guessCount] = { value: newGuess, feedback };
    setGuesses(newGuesses);
    setGuessCount(newGuessCount);

    if (feedback.every((fb) => fb.status === 'correct')) {
      setGameStatus('win');
    } else if (newGuessCount === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lose');
    }
  }

  return (
    <div>
      <GuessList guesses={guesses} />
      <GuessInput onNewGuess={onNewGuess} enabled={gameStatus === 'active'} />
      {gameStatus === 'win' && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{guessCount} {guessCount === 1 ? 'guess' : 'guesses'}</strong>!
          </p>
        </div>
      )}
      {gameStatus === 'lose' &&
        (
          <div className="sad banner">
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
          </div>
        )}
    </div>
  );
}

export default Game;
