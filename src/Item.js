import * as React from 'react';
import './style.css';

export default function Item(props) {
  const { value, done } = props;
  console.log('item', value);
  return (
    <div>
      <p>{value}</p>
    </div>
  );
}
