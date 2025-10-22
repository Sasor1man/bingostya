import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game from './components/game/game';
import Header from './components/header/header';
import { useState, useEffect } from 'react';
import { deleteTitle, getTitles } from './service/requests';

function App() {
  const [items, setItems] = useState([])
  const [isDeleting, setIsDeleting] = useState(false)

  const getItems = async() => {
    const result = await getTitles()
    setItems(result)
  }

  const deleteItem = async(id) => {

    setItems(prev => prev.filter(e => e.id !== id))

    await deleteTitle(id)
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <>
    <Header request={getItems} setIsDeleting={setIsDeleting} isDeleting={isDeleting} />
     <Game items={items} isDeleting={isDeleting} deleteItem={deleteItem}/>
    </>
  );
}

export default App;
