import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Tv() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setPosts(data.products));
  }, []);

  return (
    <section>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">  

      {posts.map((post) => (
        <div className=" text-black bg-red-100 p-4 rounded-lg flex flex-col items-center hover:scale-105 transform transition duration-300   " key={post.id}>
            <img
    src={post.thumbnail}
    alt={post.title}
    className="w-full h-[250px] object-cover rounded-lg"
    />
          <h3  className="text-lg font-semibold">{post.title}</h3>
         <p className="text-sm text-gray-300 mb-2">{post.category}</p>
          {/* <p className="text-sm mb-3">{post.description}</p> */}
  <div className="flex justify-between items-center text-sm mb-2">
        <span className="text-yellow-400">
          ⭐ {post.rating}
        </span>
        <span className="text-green-400">
          {post.stock} in stock
        </span>
      </div>
           <p className="text-xl font-bold">{post.price}$</p>
                   <Link to={`/product/${post.id}`}>
                <button className="text-[red] border-b-2 border-[red] hover:text-[black] hover:border-[black] transition duration-300">
   Details
  </button>
          
          </Link> 
        </div>




        
      ))}
    </div>
    </section>
   
  );
}

export default Tv;
