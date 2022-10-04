

import { useState } from 'react';
import './App.css';

function App() {

  const [reciver, setReciver] = useState(0);

  const increasement = () =>{
    setReciver(reciver+1)
  }

  const descreasement = () =>{
    setReciver(reciver-1)
  }

  return (
    <div className="App">
      <h3>Counter </h3>
      <p>{reciver}</p>
      <button onClick={increasement}>Increasement</button>
      <button onClick={descreasement}>Decreament</button>
    </div>
  );
}

export default App;
