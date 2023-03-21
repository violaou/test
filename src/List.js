import * as React from 'react';
import Item from './Item';
import './style.css';

export default function List(props) {
  const { items } = props;
  return items.map(({ value, done }) => {
    // <Item value done key={value} />;
    <div> {value}</div>;
  });
}
