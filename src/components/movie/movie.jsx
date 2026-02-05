import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MoviesContext } from "../../context/context";

export default function Movie() {
  const { id } = useParams();
  const movies = useContext(MoviesContext);

  const movie = movies.find((m) => m.id === Number(id));

 

  return (
    <div className="min-h-screen bg-black text-white p-10 flex justify-center">
      
      <div className="w-[1200px] h-[700px] bg-[#111] flex rounded-xl overflow-hidden shadow-xl">
        
        <div className="w-[700px]">
         <img
  src={movie.image}
  alt={movie.title}
  className="w-full h-full object-cover"
/>

        </div>

        <div className="flex-1 p-10 space-y-6">
          
          <h1 className="text-4xl font-extrabold">
            {movie.title}
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            {movie.description}
          </p>

          <div className="flex gap-6 text-sm text-gray-400">
            <span>⭐ {movie.rating}</span>
            <span>👥 {movie.followers}</span>
          
        
          </div>
            <p>{movie.resume}</p>

        </div>

      </div>

    </div>
  );
}
