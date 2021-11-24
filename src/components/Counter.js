import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatchCounter = useDispatch()

  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatchCounter({type:'increment'})
  }

  const decrementHandler = () => {
    dispatchCounter({type:'decrement'})
  }

  const increaseBy5 = () => {
    dispatchCounter({type:'increase', amount:5})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseBy5}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


// class Counter extends Component {

//   toggleCounterHandler () {}
//   incrementHandler () {
//     this.props.increment()
//   }
//   decrementHandler () {
//     this.props.decrement()
//   }

  

//   render () {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//     return {
//       counter: state.counter
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'})
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
