

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Main() {
// return(


// <h1>halaaaaa</h1>






//   );
// }
import { useParams } from 'react-router-dom';
// export default Main;
function  Main (){
    const description = [ 

        { id: 1, name: "Huile d'Argan Pure ", prix: 150, img: "/images/img1.jpg", desc :"creme pour les pieds", stock : 10  },

    { id: 2, name: "Eau de Rose Naturelle", prix: 95, img: "/images/img2.jpg", desc: "creme pour le corps ", stock : 10  },


         { id: 3, name: "Rhassoul Argile Volcanique", prix: 100, img: "/images/img3.jpg" , desc :"creme pour le visage " , stock : 10  },

     { id: 4, name: "Beurre de Karité Naturel", prix: 90, img: "/images/img4.jpg", desc :"creme pour les mains " , stock : 10  },
     ]
     const { id } = useParams();
     const information = description.find ( item  => item.id === Number(id)  ) ;


    return(


<section className="w-full min-h-[680px] bg-gradient-to-br from-pink-100 to-pink-200 p-[40px] flex items-center justify-center">

  <div className="bg-white max-w-4xl w-full p-10 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-10">

    <div className="flex-shrink-0">
      <img
        src={information.img}
        alt={information.name}
        className="w-[320px] h-[260px] object-cover rounded-xl shadow-md"
      />
    </div>

    
    <div className="flex flex-col justify-center gap-4">
      <h1 className="text-3xl font-bold text-gray-800">
        {information.name}
      </h1>

      <p className="bg-pink-100 text-pink-700 px-4 py-2 rounded-lg w-fit">
        {information.desc}
      </p>

      <p className="text-2xl font-semibold text-gray-900">
        {information.prix} DH
      </p>
       <p className="text-2xl font-semibold text-gray-900">
         stock : {information.stock}
      </p>

      <button className="mt-4 px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition w-fit">
        Acheter
      </button>
    </div>

  </div>

</section>


    )
}
export default Main
