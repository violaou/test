import React from 'react';
import './style.css';
import List from './List';
// import './shoppingItems';

export default function App() {
  let shoppingItems = require('./shoppingItems.json');
  // console.log(shoppingItems);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <List items={shoppingItems} />
    </div>
  );
}
