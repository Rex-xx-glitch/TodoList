import React from "react";
import "./MainItem.css";

export default function MainItem({
  title,
  id,
  checked,
  checkItem,
  deleteItem
}) {
  return (
    <div className="main-item-container">
      <div
        className={checked ? "main-item-title checked" : "main-item-title"}
        onClick={() => checkItem(id)}
      >
        {title}
      </div>
      <div className="main-item-icon">
        <i
          title="delete"
          className="material-icons"
          onClick={() => deleteItem(id)}
        >
          delete
        </i>
        <i
          title={checked ? "Unstrike off todo" : "Strike off todo"}
          className="material-icons"
          onClick={() => checkItem(id)}
        >
          check
        </i>
      </div>
    </div>
  );
}
