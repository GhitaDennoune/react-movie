
import { useParams } from 'react-router-dom';
import couress from '../../constant/data';

function Podcast() {
  const { id } = useParams();
  const podcast = couress.find(p => p.id === parseInt(id));

  return (
    <div className="min-h-screen bg-black text-white p-10  ">
      {podcast ? (
        <div className="max-w-3xl mx-auto bg-white/10 rounded-2xl p-8 shadow flex gap-52  bg-[url(/images/téléchargement(22).jpg)]   ">
          
           <div> {podcast.image && (
            <img src={podcast.image} alt={podcast.title} className="w-full max-w-md rounded-lg" />
          )}</div>
          <div><h1 className="text-3xl font-semibold mb-4">{podcast.title}</h1>
          <p className="text-gray-300 mb-6">{podcast.description}</p>
          <h2 className="text-2xl font-semibold mb-2">: السبب</h2>
          <p className="text-gray-300 mb-6">{podcast.reason}</p></div>
        
        </div>
      ) : (
        <p className="text-center text-gray-300">Podcast not found.</p>
      )}
    </div>
  );
}

export default Podcast;



























