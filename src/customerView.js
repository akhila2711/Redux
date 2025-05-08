import React from 'react';

export default function CustomerView({ customers }) {
  return (
    <>
      <h3>Customer List</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {customers.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </>
  );
}