import React, { useEffect } from "react";
import "./App.css";
import { Login } from "./features/login/Login";
import { Player } from "./features/player/Player";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from "./spotify";
import { useAppDispatch } from "./app/hooks";
import { setToken } from "./features/auth/authSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const spotify = new SpotifyWebApi();

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token && _token !== "") {
      dispatch(setToken(_token));
    }
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Player spotify={spotify} />}/>
          <Route path="/login" element={< Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
