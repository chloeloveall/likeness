import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import useAuth from './Auth/useAuth';
import Routes from './Routes/Routes';
import firebase, { FirebaseContext } from '../firebase';

function App() {
  const user = useAuth();
    
  return (
    <Router>
      <FirebaseContext.Provider value={{ user, firebase }}>
        <Routes />
      </FirebaseContext.Provider>
    </Router>
  );
}

export default App;
