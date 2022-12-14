import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);

  const register = () => {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => console.log(res));
  };
  const login = () => {
    axios({
      method: "POST",
      date: {
        username: loginUsername,
        password: loginPassword
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => console.log(res));
   };
  const getUser = () => { 
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };

  return (
    <div className="App">

      <div>
        <h1>Register</h1>
        <input placeholder="UserName" onChange={e => setRegisterUsername(e.target.value)} />
        <input placeholder="Password" onChange={e => setRegisterPassword(e.target.value)} />
        <button onClick={register}>submit</button>

      </div>

      <div>
        <h1>login</h1>
        <input placeholder="UserName" onChange={e => setLoginUsername(e.target.value)} />
        <input placeholder="Password" onChange={e => setLoginPassword(e.target.value)} />
        <button onClick={login}>submit</button>

      </div>

      <div>
        <h1>get User</h1>
        <button onClick={getUser}>submit</button>
        {data ? <h1>Welcome Back {data.username}</h1> : null}

      </div>


    </div>
  );
}

export default App;
