import { Routes, Route } from "react-router-dom"

import Nav from "./components/Nav/Nav"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Main from "./components/Main/Main"
import Liste from "./components/Liste/Liste"
import Podcast from "./components/Podca/podca"
import Movie from "./components/movie/movie"
import Tv from "./components/Tv/Tv"
import Product from "./components/Product/product"

// import Todo from "./components/Todo/Todo"
import { MoviesProvider } from "./context/context"
export default function App() {
  return (
    <>
      <MoviesProvider>
        <Nav /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
    <Route path="/information/:id"  element={<Main />} />

    <Route path="/liste" element={<Liste />} />
<Route path="/podcast/:id" element={<Podcast />} />
<Route path="/movie/:id" element={<Movie />} />
<Route path="/product/:id" element={<Product />} />
<Route path="/tv" element={<Tv />} />
        {/* <Route path="/todo" element={<Todo />} /> */}
      </Routes>
    </MoviesProvider>
    </>
  )
}

















































