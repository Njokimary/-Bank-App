import React from 'react';


function TransactionsList({ transactions }) {
  return (
    <table className='transactions-list'>
      <tbody>
        <tr className='table-header'>
          <th>
            <h3 className='header-cell'>Date</h3>
          </th>
          <th>
            <h3 className='header-cell'>Description</h3>
          </th>
          <th>
            <h3 className='header-cell'>Category</h3>
          </th>
          <th>
            <h3 className='header-cell'>Amount</h3>
          </th>
        </tr>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList;
