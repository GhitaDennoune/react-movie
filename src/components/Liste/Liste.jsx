import { Link } from "react-router-dom";
// import images from "../../constant/images";
import couress from "../../constant/data";


export default function Liste() {
  // const podcasts = [
  //   {
  //     id: 1,
  //     title: "الصبر عند الابتلاء",
  //     description: "كيفاش يكون الصبر مفتاح الفرج",
  //   //   image: images.khamiss,
  //     reason: "الحديث على الصبر مهم لأنه من أهم الأخلاق الإسلامية.",
  //   },
  //   {
  //     id: 2,
  //     title: "فضل الصلاة",
  //     description: "علاش الصلاة هي عمود الدين",
  //   //   image: images.othmane,
  //     reason: "الصلاة هي عمود الدين وأساس العلاقة مع الله.",
  //   },
  //   {
  //     id: 3,
  //     title: "تزكية النفس",
  //     description: "كيف تطهّر قلبك من الذنوب",
  //   //   image: images.haifaa,
  //     reason: "تزكية النفس تساعد في تقوية الإيمان وتنقية القلب.",
  //   },
  // ];

  return (
  //   <div className="min-h-screen bg-black text-white p-10">
  //     <h1 className="text-3xl mb-10 text-center">Liste des podcasts</h1>
  //     <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
  //       {podcasts.map((p) => (
  //         <div key={p.id} className="bg-white/10 rounded-2xl overflow-hidden shadow hover:scale-105 transition">
  //           <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
  //           <div className="p-5 space-y-3">
  //             <h2 className="text-xl font-semibold">{p.title}</h2>
  //             <p className="text-gray-300">{p.description}</p>


  //             <Link to={`/podcast/${p.id}`}>
  //               <button className="block w-full bg-emerald-500 hover:bg-emerald-600 text-black py-2 rounded-lg font-medium mt-3 transition">
  //                 Description
  //               </button>
  //             </Link>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl mb-10 text-center">Liste des podcasts</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {couress.map((p) => (
          <div
            key={p.id}
            className="bg-white/10 rounded-2xl overflow-hidden shadow hover:scale-105 transition"
          >
            <img  className="  w-full h-80 object-fill" src={p.image} alt={p.title} />

            <div className="p-5 space-y-3">
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="text-gray-300">{p.description}</p>

              <Link to={`/podcast/${p.id}`}>
                <button className="block w-full bg-emerald-500 hover:bg-emerald-600 text-black py-2 rounded-lg font-medium mt-3 transition">
                  Description
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


