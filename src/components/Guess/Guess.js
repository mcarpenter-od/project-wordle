import React from 'react';

function Guess({ value, feedback }) {
  function getCellClass(index) {
    if (feedback.length === 0) {
      return 'cell';
    }
    
    if (feedback[index].status === 'correct') {
      return 'cell correct';
    }
    if (feedback[index].status === 'incorrect') {
      return 'cell incorrect';
    }
    return 'cell misplaced';
  }
  
  return (<div className='guess'>
    {(value || '     ').split('').map((letter, index) => (
      <span key={index} className={getCellClass(index)}>
        {letter}
      </span>
    ))}
  </div>);
}

export default Guess;
