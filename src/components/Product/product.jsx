

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setPosts(data.products));
  }, []);

  const product = posts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loding...
      </div>
    );
  }

  return (
    <div className="min-h-screen  text-white p-10 flex justify-center">
      <div className="w-[1200px] h-[700px] bg-[#111] flex rounded-xl overflow-hidden shadow-xl">

        
        <div className="w-[700px]">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>

        
        <div className="flex-1 p-10 space-y-6">
          <h1 className="text-4xl font-extrabold">
            {product.title}
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            {product.description}
          </p>

          <div className="flex gap-6 text-sm text-gray-400">
            <span>⭐ {product.rating}</span>
            <span>💲 {product.price}</span>
            <span>{product.stock} in stock</span>
          </div>

          <p className="text-sm">
            Category:{" "}
            <span className="text-blue-400">
              {product.category}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
