import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { CounterActions } from "./Store";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(CounterActions.toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(CounterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(CounterActions.decrement());
  };
  const increseHandler = () => {
    dispatch(CounterActions.increase(5));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={increseHandler}>incrementby5</button>
      <button onClick={decrementHandler}>decrement</button>
    </main>
  );
};

export default Counter;
