import {useState} from "react";
import styles from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(prevState => prevState + 1);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment} className={styles.countButton}>Increment</button>
    </div>
  )
}