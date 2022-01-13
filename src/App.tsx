import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Login } from './features/login/Login';

function App() {
  return (
    <div className="app">

      {
        // token ? (
        //   <Player spotify={spotify} />
        // ) : (

          <Login />
        // )
      }

    </div>
  );
}

export default App;
