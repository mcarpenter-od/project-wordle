import React from 'react';

function GuessInput({onNewGuess, enabled}) {
  const [guess, setGuess] = React.useState('');
  function handleGuess(e) {
    e.preventDefault();
    if (guess.length !== 5) {
      return
    }
    
    onNewGuess(guess);
    setGuess('');
  }
  return (
    <form onSubmit={handleGuess} className='guess-input-wrapper'>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id='guess-input'
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.replace(/[^a-zA-Z]+/g,"").toUpperCase())}
        required
        autoComplete='off'
        maxLength={5}
        minLength={5}
        disabled={!enabled}
      />
    </form>
  );
}

export default GuessInput;
