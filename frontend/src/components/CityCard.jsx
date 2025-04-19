import { Link } from 'react-router-dom';

export default function CityCard({  name, photo }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300">
      <Link to={`/cities/${name}`} className="block">
        <img src={photo} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl text-center font-bold">{name}</h2>
        </div>
      </Link>
      
      
    </div>
  );
}