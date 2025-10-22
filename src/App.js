import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game from './components/game/game';
import Header from './components/header/header';
import { useState, useEffect } from 'react';
import { deleteTitle, getTitles } from './service/requests';
import { setTitleRequest } from './service/requests';

function App() {
  const [items, setItems] = useState([])
  const [isDeleting, setIsDeleting] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const getItems = async () => {
    setIsLoading(true)

    const result = await getTitles()
    result ? setItems(result) : setError(true)

    setIsLoading(false)
  }

  const deleteItem = async (id) => {

    try {

      setItems(prev => prev.filter(e => e.id !== id))

      await deleteTitle(id)
      
    } catch {
      setError(true)
    }

  }

  const addItem = async (title) => {
    try {
      setIsLoading(true);
      await setTitleRequest(title);
      await getItems();
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getItems()
  }, [])

  return (
    <>
      {!error && <Header addItem={addItem} setIsDeleting={setIsDeleting} isDeleting={isDeleting} />}
      <Game items={items} isDeleting={isDeleting} deleteItem={deleteItem} isLoading={isLoading} error={error} />
    </>
  );
}

export default App;
