import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSubmit = (newItem) => {
    setItems([...items, newItem])

  }

  function onSearchChange(id) {
    const newItems = items.filter(item => item.id !== id)
    setItems(newItems)

  }

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} onSearchChange={onSearchChange} onItemFormSubmit={handleSubmit} />
    </div>
  );
}

export default App;
