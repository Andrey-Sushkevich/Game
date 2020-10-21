import React from 'react';

export default GameOver = ({ restartGame, point }) => (
    <div className="justify-center">
        <h1>Game Over!</h1>
        <h3>Your Point: {point}</h3>
        <button className="restart-button" onClick={restartGame}>Restart Game</button>
    </div>
);
