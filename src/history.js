import React from 'react';

const History = ({ calculations }) => {
  return (
    <div>
      <h2 className='tille-history'> Calculation History </h2>
      <ul className='list-history'>
        {calculations.map((calculation, index) => (
          <li key={index}>{calculation}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;
