import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Rainbow from './Rainbow';

function App() {
  const array = Array(2001).fill(0);
  const [start, setStart] = useState(false);

  const onStart = useCallback(() => {
    setStart(true);
  }, [setStart]);

  return (
    <div className="App">
      <div className={'header'}>
        <button className={'btn'} onClick={onStart}>Start</button>
      </div>
      {array.map((value, index) => (
        <Rainbow key={index} start={start} index={index} />
      ))}
    </div>
  );
}

export default App;
