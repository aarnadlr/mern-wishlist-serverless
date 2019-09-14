import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState(null);
  const [items, setItems] = useState(null);
  const [addedItem, setAddedItem] = useState(null);

  useEffect(() => {
    async function getName() {
      const res = await fetch('/api/name');
      const theName = await res.json();
      setName(theName);
    }
    getName();
  }, []);

  useEffect(() => {
    async function getItems() {
      try {
        const response = await fetch('/api/items/get');
        const items = await response.json();
        setItems(items);
      } catch (e) {
        console.error('CLIENT ERROR: ', e.message);
      }
    }
    getItems();
  }, []);

  const handleAdd = () => {
    async function addItem() {
      const res = await fetch('/api/items/add');
      const theAddedItem = await res.json();
      setAddedItem(theAddedItem);
    }
    addItem();
  };

  return (
    <main>
      <h1>Create React App + Now Serverless functions</h1>
      <h1>The name: {name ? name.name : 'Loading name...'}</h1>

      <h2>
        1. The item name:{' '}
        <span style={{ color: 'hotpink' }}>
          {/*{items ? items.itemsArr[0].name : 'Loading items...'}*/}
          {items ? items[0].name : 'Loading items...'}
        </span>
      </h2>
      <h2>
        2. The item color:{' '}
        <span style={{ color: 'purple' }}>
          {/*{items ? items.itemsArr[0].color : 'Loading items...'}*/}
          {items ? items[0].color : 'Loading items...'}
        </span>
      </h2>

      <h2>
        3. The ADDED ITEM:{' '}
        <span style={{ color: 'purple' }}>
          {addedItem ? JSON.stringify(addedItem) : 'Loading...'}
          {addedItem && console.log('ITEM ADDED!:', JSON.stringify(addedItem))}
        </span>
      </h2>

      <button onClick={handleAdd}>ADD ITEM</button>
    </main>
  );
}

export default App;
