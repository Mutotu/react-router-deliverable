import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import MyBlog from "./components/MyBlog";
import About from "./components/About";
import FavoriteMovie from "./components/FavoriteMovies";
import FavoriteFood from "./components/FavoriteFood";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "./favoriteMovies";

function App() {
  const [movies, setMovies] = useState(data);

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/myBlog' element={<MyBlog />} />
          <Route path='/about' element={<About />} />
          <Route
            path='/favoriteMovie'
            element={<FavoriteMovie movies={movies} setMovies={setMovies} />}
          />
          <Route path='/favoriteFood' element={<FavoriteFood />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
