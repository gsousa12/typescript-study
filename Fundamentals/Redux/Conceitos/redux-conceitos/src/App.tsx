import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  increment,
  incrementAmount,
} from "../src/features/counter/counter-slice.ts";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  function handleOnClick() {
    // dispatch({ type: "counter/increment" });
    dispatch(increment());
  }

  function handleOnClickAmount() {
    // dispatch({ type: "counter/incrementAmount", payload: 5 });
    dispatch(incrementAmount(5));
  }

  // function handleOnClick() {
  //   increment();
  // }

  // function handleOnClickAmount() {
  //   incrementAmount(10);
  // }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleOnClick}>count is {count}</button>
        <button onClick={handleOnClickAmount}>Amount</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

// OLDSCHOOL REDUX
// const mapStateToProps = (state) => {
//   return {
//     count: state.counter.value,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "counter/increment" }),
//     incrementAmount: (amount) =>
//       dispatch({ type: "counter/incrementAmount", payload: amount }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
