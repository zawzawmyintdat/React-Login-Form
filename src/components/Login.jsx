import './login.css'
import { useState } from 'react';

const Login = (props) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeName = (e) =>{
        setUser(e.target.value)
    }
    const handleChangePass = (e) =>{
        setPassword(e.target.value)
    }

    const addUser = (event) =>{
        event.preventDefault()
        props.addUser(user, password)
        setUser('')
        setPassword('')
    }

    return ( 
        <div className="login">
            <form >
                <input type="text" value={user} onChange={handleChangeName} name="username" placeholder="enter username"/>
                <input type="password" value={password} onChange={handleChangePass} name="password" placeholder="enter password"/>
                <button onClick={addUser}>Login</button>
            </form>
        </div>
     );
}
 
export default Login;