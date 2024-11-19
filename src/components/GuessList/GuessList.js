import React from 'react';
import Guess from '../Guess/Guess';

function GuessList({ guesses }) {
  return (
    <div className='guess-results'>
      {guesses.map((guess, index) => (
        <Guess key={index} value={guess.value} feedback={guess.feedback} />
      ))}
    </div>
  );
}

export default GuessList;
