import React from 'react';

import styles from './Score.module.css';

interface IScoreProps {
  playerScore: number;
  computerScore: number;
}

const Score = ({ playerScore, computerScore }: IScoreProps) => (
  <div className={styles.score}>
    <p>You: {playerScore}</p>
    <p>AI: {computerScore}</p>
  </div>
);

export default Score;
