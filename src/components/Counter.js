// useSelector allows to select a part of the state managed by the store
// useSelector hook is used to get data out of the store
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);
  const dispatch = useDispatch();
 
  const incrementHandler = () => {
    dispatch({
      type: 'increment'
    });
  };

  const increaseHandler = () => {
    dispatch({
      type: 'increase',
      amount: 5  
    });
  }
  const decrementHandler = () => {
    dispatch({
      type: 'decrement'
    });
  };
  const toggleCounterHandler = () => {
    dispatch({
      type: 'toggle'
    });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{ counter }</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
