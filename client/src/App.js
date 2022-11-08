import logo from './logo.svg';
import './App.css';

function App() {

  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  return (
    <div className="App">
      
      <div>
          <h1>Register</h1>
          <input placeholder="UserName" />
          <input placeholder="Password" />
          <button>submit</button>

      </div>
      
      <div>
          <h1>login</h1>
          <input placeholder="UserName" />
          <input placeholder="Password" />
          <button>submit</button>

      </div>
      
      <div>
          <h1>get User</h1>
          <button>submit</button>

      </div>


    </div>
  );
}

export default App;
