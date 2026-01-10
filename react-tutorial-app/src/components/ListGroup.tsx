//import { type MouseEvent } from "react";

import { useState } from "react";

//instead of declaring properties like the items array, (let items = ["New York", "San Francisco", "London", "Paris"];)
// we can pass it in as a prop, making this component reusable.
// {items: [], heading: string}

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // each component has its own state. So if we call this ListGroup component multiple times, each instance will have its own state.

  // hook
  // the useState returns an array, which we desctruct
  // the first element is a const variable, so in order to change it, we need to use the
  // setSelectedIndex function.
  // we don't need to write a function to change the state, we can just call the setSelectedIndex function and pass the new value.
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //event handler
  /*const handleClick = (event: MouseEvent) => {
    console.log(event);
  };*/

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
