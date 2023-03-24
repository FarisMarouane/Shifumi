import React from 'react';
import { ChoiceType } from '../../App';
import styles from './ComputerChoice.module.css';

interface IComputerChoiceProps {
  choice: ChoiceType;
  round: number;
}

const ComputerChoice = ({ choice, round }: IComputerChoiceProps) => {
  let ChoiceElement = null;

  if (choice === 'paper') {
    ChoiceElement = <span className="fa fa-hand-paper-o fa-6x" />;
  } else if (choice === 'rock') {
    ChoiceElement = <span className="fa fa-hand-rock-o fa-6x" />;
  } else {
    ChoiceElement = <span className="fa fa-hand-scissors-o fa-6x" />;
  }

  return (
    <div key={round} className={styles.computerChoice}>
      {ChoiceElement}
    </div>
  );
};

export default ComputerChoice;
