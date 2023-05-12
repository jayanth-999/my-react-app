import React, { useState,useEffect } from 'react';

function SampleComponent2(){
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count has changed!");
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );

}

export default SampleComponent2;