import React, { useState } from 'react';
import CustomerView from './customerView';

export default function CustomerAdd() {
  const [input, setInput] = useState('');
  const [customers, setCustomers] = useState([]);

  const addCustomer = () => {
    if (input) {
      setCustomers((previousState) => [...previousState, input]);
      setInput('');
    }
  };

  return (
    <>
      <h3>Add New Customer</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addCustomer}>Add New</button>
      <CustomerView customers={customers} />
    </>
  );
}