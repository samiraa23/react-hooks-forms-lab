import React, { useState } from "react";
import itemData from "../data/items";
import Filter from "./Filter";

function ShoppingList() {
  const [items, setItems] = useState(itemData);
  const [searchText, setSearchText] = useState("");

  function handleItemClick(itemId) {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, inCart: !item.inCart } : item
    );
    setItems(updatedItems);
  }

  function handleSearchChange(event) {
    setSearchText(event.target.value);
  }

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <Filter search={searchText} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {filteredItems.map((item) => (
          <li key={item.id} onClick={() => handleItemClick(item.id)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;