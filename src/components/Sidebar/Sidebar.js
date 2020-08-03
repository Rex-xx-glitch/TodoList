import React from "react";
import "./Sidebar.css";
import Input from "../Input/Input";
import Item from "../SidebarItem/SidebarItem";

function Sidebar({ items, addTodo, deleteItem, selectedItem, toggleFavorite }) {
  return (
    <div className="sidebar-container">
      <Input btnValue="+" pHolder="Title" getText={addTodo} />
      {items.map(item => (
        <Item
          title={item.title}
          id={item.id}
          key={item.id}
          selectedItem={selectedItem}
          deleteItem={deleteItem}
          favorite={item.favorite}
          toggleFavorite={toggleFavorite}
        />
      ))}

      <footer>
        <p className="footer-text">
          Copyright © {new Date().getFullYear()} <br /> Created by Raymac Antony
          Gumbo
        </p>
      </footer>
    </div>
  );
}
export default Sidebar;
