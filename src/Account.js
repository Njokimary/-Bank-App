import React, { useEffect, useState } from 'react';
import TransactionsList from './TransactionsList';
import Search from './Search';
import AddTransactionForm from './AddTransactionForm';
import './App.css';

function AccountContainer() {
  const [searchTerm, setSearchTerm] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/transactions')
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
        setFilteredTransactions(
          data.filter(transaction =>
            transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      })
      .catch(error => console.log(error));
  }, [searchTerm]);

  const handleSearch = term => {
    setSearchTerm(term);
  };

  const addTransaction = newTransaction => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Transaction Tracker</h1>
      </div>
      <Search handleSearch={handleSearch} />
      <TransactionsList transactions={filteredTransactions} />
      <AddTransactionForm addTransaction={addTransaction} />
    </div>
  );
}

export default AccountContainer;
