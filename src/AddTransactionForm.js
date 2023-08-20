import React, { useState } from 'react';

function AddTransactionForm({ addTransaction }) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      amount,
      description,
      category,
    };
    addTransaction(newTransaction);
    setAmount('');
    setDescription('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Amount' />
      <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description' />
      <input type='text' value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Category' />
      <button type='submit'>Add Transaction</button>
    </form>
  );
}

export default AddTransactionForm;
