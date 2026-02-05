

// import { useState } from "react";


import { Link } from "react-router-dom";
// import images from "../../constant/images"; 
// import  chat from "../assets/images/img6.jpg";


import { useState } from "react";

function About() {

  const products = [
    { id: 1, name: "Huile d'Argan Pure ", prix: 150,   img: "/images/img1.jpg", stock : 10  },

    { id: 2, name: "Eau de Rose Naturelle", prix: 95, img: "/images/img2.jpg", stock : 10  },


         { id: 3, name: "Rhassoul Argile Volcanique", prix: 100, img: "/images/img3.jpg" , stock : 10  },

     { id: 4, name: "Beurre de Karité Naturel", prix: 90, img: "/images/img4.jpg", stock : 10  },

  ];
const handleBuy = (id) => {
  setProducts((prevProducts) =>
    prevProducts.map((product) => {
      if (product.id === id) {

        if (product.stock === 0) {
          alert("Stock tsala !");
          return product;
        }

        return {
          ...product,
          stock: product.stock - 1,
        };
        
      }

      return product;
    })
  );
};
    const [productsState, setProducts] = useState(products);
    const acheterbtn = (id) => {
      handleBuy(id);
    };




console .log(productsState);


// const images = import.meta.globEager('../../src/assets/images/*.jpg', { eager: true });
// const imageUrls = Object.values(images).map(img => img.default);




  return (

    <section className="card relative z-10 w-full h-[680px] bg-pink-100 p-[30px] rounded-xl flex justify-center items-center shadow-xl">
     
      <div className="flex gap-20">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl h-[480px] w-[280px] flex flex-col items-center justify-center gap-6"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-[230px] h-[180px]"
            />
            {/* <img src={images[product.img]} alt="" /> */}
{/* <img src={images.chat} alt="chat" />
         {imageUrls.map((url, index) => (
  <img key={index} src={url} alt={`Image ${0}`} />
))} */}

{/* <img src={chat} alt="chat" /> */}

            <h1 className="text-lg font-semibold">{product.name}</h1>
            <p>{product.prix} DH</p>
            <p> stock :  {productsState.find(p => p.id === product.id)?.stock}</p>

            <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-indigo-700 transition"   onClick={() => acheterbtn(product.id)}>
              Acheter
            </button>
 

           <Link to={`/information/${product.id}`}>
  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-red-700 transition">
    description
  </button>
</Link>

            



            

           
          </div>
        ))}
      </div>

    </section>
  );
}

export default About;
