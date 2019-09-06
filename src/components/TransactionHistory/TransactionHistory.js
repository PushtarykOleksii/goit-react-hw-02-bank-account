import React from 'react';
import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';

const TransactionHistory = ({ transaction }) => {
  return (
    <>
      <table className={style.history}>
        <thead>
          <tr>
            <th>TRANSACTION</th>
            <th>AMOUNT</th>
            <th>DATA</th>
          </tr>
        </thead>
        <tbody>
          {transaction.map(item => (
            <tr key={item.id}>
              <td className={style.line}>{item.type}</td>
              <td className={style.line}>{item.amount}$</td>
              <td className={style.line}>{item.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.node,
      date: PropTypes.string,
    }).isRequired,
  ).isRequired,
};
