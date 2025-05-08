import React from 'react';

export default function CustomerView({ customers }) {
  return (
    <>
      <h3>Customer List</h3>
      <ul style={{ listStyleType: 'none'}}>
        {customers.map((member) => (
          <li>{member}</li>
        ))}
      </ul>
    </>
  );
}