import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import { useState } from "react";
import UserContext from "./UserContext";
import SigninScreen from "./components/1.Signin/SigninScreen";
import SignupScreen from "./components/2.Signup/SignupScreen";
import Home from "./components/3.Home/Home";
import AdFilmScreen from "./components/4.AddFilm/AdFilmScreen";

const App: React.FC = () => {

  const [token, setToken] = useState<string | null>("");
  const [nome, setNome] = useState<string | null>("");

  return (
    <UserContext.Provider value={{ token, setToken, nome, setNome }}>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SigninScreen />} />
            <Route path="/sign-up" element={<SignupScreen />} />
            <Route path="/home" element={<Home />} />
            <Route path="/deposits" element={<AdFilmScreen />} />
        </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
