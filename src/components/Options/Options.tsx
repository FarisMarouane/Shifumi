import React from 'react';
import { ChoiceType } from '../../App';

import styles from './Options.module.css';

interface IOptionsProps {
  handleChoice: (choise: ChoiceType) => void;
}

const Options = ({ handleChoice }: IOptionsProps) => (
  <div className={styles.options}>
    <button className={styles.option} onClick={() => handleChoice('rock')}>
      <span className="fa fa-hand-rock-o" />
    </button>
    <button className={styles.option} onClick={() => handleChoice('paper')}>
      <span className="fa fa-hand-paper-o" />
    </button>
    <button className={styles.option} onClick={() => handleChoice('scissors')}>
      <span className="fa fa-hand-scissors-o" />
    </button>
  </div>
);

export default Options;
