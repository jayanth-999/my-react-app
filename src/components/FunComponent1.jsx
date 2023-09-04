import React, { useReducer } from 'react';

// Reducer function
const counterReducer = (state, action) => {
  switch (action) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

const Counter1 = () => {
  // Initialize state using useReducer
  const [state, updatecall] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => updatecall('INCREMENT')}>Increment</button>
      <button onClick={() => updatecall('DECREMENT' )}>Decrement</button>
      <button onClick={() => updatecall('RESET')}>Reset</button>
    </div>
  );
};

export default Counter1;
