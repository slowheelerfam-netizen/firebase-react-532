import React from 'react';
import './App.css';
import { auth } from './firebase/init';
import Navbar from './components/Navbar';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut, 
  onAuthStateChanged
 } from "firebase/auth";

function App() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [authMessage, setAuthMessage] = React.useState('');

React.useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setLoading(false);
    if (user) {
      setUser(user);
      setAuthMessage('');
    } else {
      setUser({});
    }
  });

  return () => unsubscribe();
}, []);


  function register() {
      createUserWithEmailAndPassword(auth, 'email@example.com', 'password123')
        .then((user) => {
          console.log(user)
        })
        .catch((error) => {
          console.log(error)
        })
  }

  function login() {
    signInWithEmailAndPassword(auth, 'email@example.com', 'password123')
        .then(({ user }) => {
            console.log(user)
          setUser(user)
        })
        .catch((error) => {
          console.log(error)
        })
  }

  function logout() {
    signOut(auth);
}

return (
  <div className="App">
    <Navbar 
      user={user} 
      loading={loading} 
      onLogin={login} 
      onRegister={register} 
      onLogout={logout} 
      authMessage={authMessage}
    />

  </div>
);
}

export default App;
