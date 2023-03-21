import * as React from 'react';
import './style.css';
import Item from './Item';

export default function List(props) {
  const { items } = props;
  console.log(items);
  return (
    <div>
      {items.map(({ value, done, id }) => {
        // return <div>{value}</div>;
        return <Item value={value} key={id} />;
      })}
    </div>
  );
}
