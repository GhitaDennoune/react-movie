
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useContext, useState } from "react";
import { MoviesContext } from "../../context/context";

export default function Nav() {
  const movies = useContext(MoviesContext);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );

    console.log("Searching for:", query);
    console.log("Filtered Movies:", filteredMovies);

    if (filteredMovies.length > 0) {
      navigate(`/movie/${filteredMovies[0].id}`);
      setQuery("");
    } else {
      alert("No movies found");
    }
  };

  return (
    <nav className="w-full bg-black text-white px-10 py-4 flex items-center justify-between">
      
      <div className="text-3xl font-extrabold tracking-widest text-red-600">
        MOVIE
      </div>

      <ul className="flex items-center gap-8 text-sm font-medium">
        <li className="hover:text-red-500">
          <Link to="/">Home</Link>
        </li>

        <li className="hover:text-red-500 cursor-pointer">
          <Link to="/tv">TV Shows</Link>
        </li>
        <li className="hover:text-red-500 cursor-pointer">Movies</li>
        <li className="hover:text-red-500 cursor-pointer">New & Popular</li>
        <li className="hover:text-red-500 cursor-pointer">My List</li>
      </ul>

      <form onSubmit={handleSubmit} className="relative">
        <input
          type="search"
          placeholder="Search movies..."
          className="bg-gray-900 text-sm text-white pl-10 pr-4 py-2 rounded-full
          focus:outline-none focus:ring-2 focus:ring-red-500"
          value={query}
          onChange={handleChange}
        />
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </form>
    </nav>
  );
}
