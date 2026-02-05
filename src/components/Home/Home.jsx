import { Link } from "react-router-dom";
import { useContext } from "react";
import { MoviesContext } from "../../context/context";
import Nav from "../Nav/Nav";



export default function Home() {
const movies = useContext(MoviesContext);








movies.forEach(m => {
  console.log(m.title, m.image);
});


  return (
<section className="min-h-screen bg-gradient-to-b from-[#0F0F1A] to-[#16162A] px-10 py-20">
  
  



 <div className="p-10 grid grid-cols-4 gap-6 bg ">
      {movies.map((movie) => (
        <div key={movie.id} className="text-white bg-gray-800/30 p-4 rounded-lg flex flex-col items-center hover:scale-105 transform transition duration-300">
          
         <img
  src={movie.image}
  alt={movie.title}
  className="w-full h-[250px] object-cover rounded-lg"
/>



          <h3 className="mt-4 text-center font-semibold">
            {movie.title}
          </h3>

          <p className="text-sm text-gray-400 text-center">
            ⭐ {movie.rating} | 👥 {movie.followers}
          </p>
          <Link to={`/movie/${movie.id}`}>
                <button className="text-[#7C7CFF] border-b-2 border-[#7C7CFF] hover:text-[#A0A0FF] hover:border-[#A0A0FF] transition duration-300">
  Movie details
  </button>
          
          </Link> 
   

        </div>
      ))}
    </div>














</section>
//     <div className="min-h-screen bg-gradient-to-br from-[#0f2e2b] via-[#123c36] to-black text-white relative overflow-hidden">

      
//       <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-green-700/30 rounded-full blur-3xl" />
//       <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-emerald-600/20 rounded-full blur-3xl" />

//       <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">

        
//         <div className="space-y-8 animate-fade-in">
//           <span className="text-sm tracking-widest text-emerald-400 uppercase ">
//             منصة صوتية دينية
//           </span>

//           <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
//             استمع…  
//             <span className="block text-emerald-400">ودع قلبك يفهم</span>
//           </h1>

//           <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
//             حلقات بودكاست قصيرة، كل واحدة تناقش موضوعًا واحدًا،
//             تهدف إلى تهدئة القلب وتقوية الإيمان.
//           </p>

//           <div className="flex items-center gap-6">
// <Link to={'/liste'}>   
//             <button className="flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-black px-8 py-4 rounded-full font-semibold transition">
            
//   <FaHeadphones />
//               +150 حلقة
  
//             </button>

//             </Link>
//           </div>
//         </div>

    
//         <div className="relative flex justify-center">
//           <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-emerald-400 to-green-700 flex items-center justify-center shadow-2xl float-slow">
//             <div className="w-44 h-44 rounded-full bg-black flex items-center justify-center">
//               <FaPlay className="text-4xl text-emerald-400" />
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>

  );
}
