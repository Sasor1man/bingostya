import styles from './style.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Spinner from 'react-bootstrap/Spinner';


function Game({ items, deleteItem, isDeleting, isLoading, error }) {

  const [picked, setPicked] = useState([])

  const checkPicked = (id) => picked.includes(id)


  const pick = (id) => {
    if (checkPicked(id)) {
      const newArr = picked.filter(e => e !== id)
      setPicked(newArr)
    } else {
      setPicked(prev => [...prev, id])
    }
  }

  const renderButton = (e) =>
    isDeleting ?
      <Button
        key={e.id}
        className={styles.bingoButton}
        onClick={() => deleteItem(e.id)}
        variant='secondary'
      >{e.title}
      </Button> :
      <Button
        key={e.id}
        className={styles.bingoButton}
        onClick={() => pick(e.id)}
        variant={checkPicked(e.id) ? 'danger' : 'primary'}
      >{e.title}
      </Button>


  if (error) {
    return (
      <>
        <div className={styles.centered}>
          <h1>Kto prochital tot loh</h1>
          <p>(smth went wrong, try reload)</p>
        </div>
      </>
    )
  }

  return (
    isLoading ? (
      <Spinner animation="border" role="status" className={styles.centered}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    ) :
      (<div className={`${styles.main} d-flex m-auto justify-content-center align-items-center`}>
        <div className={`${styles.game} d-flex m-auto justify-content-center align-items-center flex-wrap`} direction='horizontal'>
          {items?.map((e) => renderButton(e))}
        </div>
      </div>)
  );
}

export default Game;
