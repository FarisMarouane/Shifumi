import React, { useState } from 'react';

import ComputerChoice from './components/ComputerChoice/ComputerChoice';
import styles from './App.module.css';
import Score from './components/Score/Score';
import Options from './components/Options/Options';

const options = ['rock', 'paper', 'scissors'] as const;

export type ChoiceType = typeof options[number];
type resultType = 'tie' | 'win' | 'lose';

const App = () => {
  const [round, setRound] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState<ChoiceType | null>(null);
  const [computerChoice, setComputerChoice] = useState<ChoiceType | null>(null);
  const [result, setResult] = useState<resultType | null>(null);

  const handleChoice = (choice: ChoiceType) => {
    setRound((r) => r + 1);
    setPlayerChoice(choice);

    const computerChoice = options[Math.floor(Math.random() * options.length)];
    setComputerChoice(computerChoice);

    if (choice === computerChoice) {
      setResult('tie');
    } else if (
      (choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')
    ) {
      setResult('win');
      setPlayerScore((score) => score + 1);
    } else {
      setResult('lose');
      setComputerScore((score) => score + 1);
    }
  };

  return (
    <div className={styles.container}>
      <Score playerScore={playerScore} computerScore={computerScore} />
      <h1 className={styles.title}>Shifumi</h1>
      <p>Choose your weapon:</p>
      <Options handleChoice={handleChoice} />
      <div className={styles.resultContainer}>
        {playerChoice && computerChoice && (
          <>
            <ComputerChoice round={round} choice={computerChoice} />
            <p key={round} className={styles.result}>
              {result === 'tie' ? "It's a tie!" : `You ${result}!`}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
