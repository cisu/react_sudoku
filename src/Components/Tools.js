import React from 'react';

const Tools = props => {
  const {solve, stop, newGame, deleteGame, getThisAsStr, goBackT} = props;

  return (
    <div className='any'>
      <div className='container'>
        <div className='field is-grouped'>
          <p className='control'>
            <a
              href='#'
              className='button is-small is-link is-rounded is-outlined'
              onClick={solve}
            >
              Solve{' '}
            </a>
          </p>

          <p className='control'>
            <a
              href='#'
              className='button is-small is-warning is-rounded is-outlined'
              onClick={stop}
            >
              Stop{' '}
            </a>
          </p>

          <p className='control'>
            <a
              className='button is-small is-success is-rounded is-outlined'
              onClick={newGame}
            >
              New Game
            </a>
          </p>

          <p className='control'>
            <a
              className='button is-small is-danger is-rounded is-outlined'
              onClick={deleteGame}
            >
              Delete{' '}
            </a>
          </p>

          <p className='control'>
            <a
              className='button is-small is-info is-rounded is-rounded is-outlined'
              onClick={getThisAsStr}
            >
              Get this
            </a>
          </p>

          <p className='control'>
            <a
              className='button is-small is-outlined is-rounded'
              onClick={goBackT}
            >
              Go Back
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tools;
