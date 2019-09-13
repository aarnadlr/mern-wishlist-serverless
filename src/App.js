import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState(null);
  const [items, setItems] = useState(null);

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
      const res = await fetch('/api/items/get');
      const theItemsObj = await res.json();
      setItems(theItemsObj);
    }
    getItems();
  }, []);

  return (
    <main>
      <h1>Create React App + Now Serverless functions</h1>
      <h1>The name: {name ? name.name : 'Loading name...'}</h1>

      <h1>The item name: <span style={{color:'hotpink'}}>{items ? items.itemsArr[0].name : 'Loading items...'}</span></h1>
      <h1>The item color: <span style={{color:'purple'}}>{items ? items.itemsArr[0].color : 'Loading items...'}</span></h1>

    </main>
  );
}

export default App;
