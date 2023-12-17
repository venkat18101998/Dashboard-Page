import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from "./components/layout/Sidebar"
import LoginContainer from './components/login/LoginContainer'

function App() {

  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem('formData'));
    if (formData && formData.email && formData.password) {
      setShowLogin(false);
    }
  }, []);

  return (
    <React.Fragment>
      {showLogin ? (
        <LoginContainer />
      ) : (
        <Sidebar />
      )}
    </React.Fragment>
  );
}

export default App;
