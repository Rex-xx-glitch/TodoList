import React from "react";
import "./SidebarItem.css";

function SidebarItem({
  title,
  id,
  selectedItem,
  deleteItem,
  favorite,
  toggleFavorite
}) {
  return (
    <div className="item-container">
      <div className="item-title" onClick={() => selectedItem(id)}>
        {title}
      </div>
      <div className="item-icon">
        <i
          title="Delete"
          className="material-icons"
          onClick={() => deleteItem(id)}
        >
          delete
        </i>
        <i
          title={favorite ? "Remove from favorites" : "Add to favorites"}
          className={favorite ? "material-icons fav" : "material-icons"}
          onClick={() => toggleFavorite(id)}
        >
          star
        </i>
      </div>
    </div>
  );
}

export default SidebarItem;
