import React, { useState } from 'react';

function AddTransactionForm({ addTransaction }) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newTransaction = {
      amount,
      description,
      category,
      date: new Date().toISOString(),
    };

    try {
      const response = await fetch('http://localhost:8000/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTransaction),
      });

      if (response.ok) {
        addTransaction(newTransaction);
        setAmount('');
        setDescription('');
        setCategory('');
      } else {
        console.error('Failed to add transaction');
      }
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder='Amount'
      />
      <input
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Description'
      />
      <input
        type='text'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder='Category'
      />
      <button type='submit'>Add Transaction</button>
    </form>
  );
}

export default AddTransactionForm;
