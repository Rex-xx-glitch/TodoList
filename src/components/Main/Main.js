import React from "react";
import "./Main.css";
import Item from "../MainItem/MainItem";
import Input from "../Input/Input";

export default function Main({ selected, checkItem, deleteItem, addItem }) {
  return (
    <div className="main-container">
      {selected && <h1 className="heading">{selected.title}</h1>}
      <div className="items-container">
        {selected &&
          selected.items.map(item => (
            <Item
              title={item.title}
              id={item.id}
              key={item.id}
              checked={item.checked}
              checkItem={checkItem}
              deleteItem={deleteItem}
            />
          ))}
        {selected && (
          <div className="main-text-input">
            <Input
              btnValue="+"
              pHolder="Add item"
              getText={addItem}
              large={true}
            />
          </div>
        )}
      </div>
    </div>
  );
}
