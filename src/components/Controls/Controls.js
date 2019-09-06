import React from 'react';
import PropTypes from 'prop-types';
import style from './Controls.module.css';

const Controls = ({ amount, onClick, onChange }) => (
  <>
    <section className={style.controls}>
      <input
        className={style.imput}
        placeholder="Amount of money you want to..."
        type="number"
        name="amount"
        onClick={onClick}
        onChange={onChange}
        value={amount}
      />
      <button
        className={style.button}
        type="button"
        name="deposit"
        onClick={onClick}
      >
        DEPOSIT
      </button>
      <button
        className={style.button}
        type="button"
        name="withdraw"
        onClick={onClick}
      >
        WITHDRAW
      </button>
    </section>
  </>
);

export default Controls;

Controls.propTypes = {
  amount: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
