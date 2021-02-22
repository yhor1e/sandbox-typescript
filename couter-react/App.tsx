import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <label>{count}</label>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}

export { App };
