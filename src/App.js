import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import React, {useEffect} from "react";
import Auth from './Services/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilmDetails from "./Pages/FilmDetails";
import FilmDetailsWithParams from "./Pages/FilmDetailsWithParams";
import Categories from "./Pages/Categories";
import FilmsCategorie from "./Pages/FilmsCategorie";
import FilmsCategorieWithState from "./Pages/FilmsCategorieWithState";
import NavBarPerso from "./Components/NavBar";
function App() {

  useEffect(() => {
    Auth.setup();
  }, []);

  return <>
    <BrowserRouter>
      <NavBarPerso />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/film/details" element={<FilmDetails />} />
        <Route path="/film/details/:id" element={<FilmDetailsWithParams />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:genre/films" element={<FilmsCategorie />} />
        <Route path="/categories/films" element={<FilmsCategorieWithState />} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
