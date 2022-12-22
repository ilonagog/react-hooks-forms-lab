import React, { useState } from "react";

import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {


  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")

  const handleNewItem = (e) => {
    e.preventDefault();
    let newItem = { category: category, name: name, id: uuid() }
    onItemFormSubmit(newItem)
  }


  return (
    <form className="NewItem" onSubmit={handleNewItem}>
      <label>
        Name:
        <input type="text" name="name" onChange={e => setName(e.target.value)} value={name} />
      </label>

      <label>
        Category:
        <select name="category" onChange={e => setCategory(e.target.value)} value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
