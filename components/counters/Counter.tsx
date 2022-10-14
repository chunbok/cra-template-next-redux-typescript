import React, { useState } from 'react';

import { useAppSelector, useAppDispatch,  } from '../../redux/app';
import {
  decrement,
  increment,
  incrementByAmount,
  state,
  stateSpec
} from '../../redux/stores/counter';
import styles from '../../public/css/Counter.module.css';

export const Counter = () => {
  const counter = useAppSelector(state);
  const selectCount = useAppSelector(stateSpec.selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span>
          <div>
            <span className={styles.label}>Object : </span>
            <span className={styles.value}>{counter.value}</span>
          </div>
          <div>
            <span className={styles.label}>Selector : </span>
            <span className={styles.value}>{selectCount}</span>
          </div>
        </span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}
