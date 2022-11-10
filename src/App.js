

import { useState } from 'react';
import './App.css';
import Login from './components/Login'
import UserList from './components/UserList';

function App() {

  const [reciver, setReciver] = useState(0);
const [userList, setUserList] = useState([])
 
  const addUser = (name, password, event) =>{
    //event.preventDefault()
    setUserList({name})
    console.log(userList, name);
  }

  const increasement = () =>{
    setReciver(reciver+1)
  }

  const descreasement = () =>{
    setReciver(reciver-1)
  }

  const defaultFn = () =>{
    setReciver(0)
  }

  return (
    <div className="App">
      <h3>Counter </h3>
      <p>{reciver}</p>
      <button onClick={increasement}>Increasement</button>
       <button onClick={defaultFn}>Default</button>
      <button onClick={descreasement}>Decreament</button>
      <Login addUser={addUser}/>
      <UserList/>
    </div>
  );
}

export default App;
