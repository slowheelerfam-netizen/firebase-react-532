// import logo from './logo.svg';
import './App.css';
import { auth } from './firebase/init';
import { createUserWithEmailAndPassword } from "firebase/auth";

function App() {
  function register() {
      createUserWithEmailAndPassword(auth, 'email@example.com', 'password123')
        .then((user) => {
          console.log(user)
        })
        .catch((error) => {
          console.log('error')
        })
  }

  function login() {
    createUserWithEmailAndPassword(auth, 'email@example.com', 'password123')
        .then((user) => {
          console.log(user)
        })
        .catch((error) => {
          console.log('error')
        })
  }
  
  return (
    <div className="App">
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default App;
