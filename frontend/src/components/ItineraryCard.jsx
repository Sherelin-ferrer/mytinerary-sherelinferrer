import { useDispatch, useSelector } from 'react-redux';
import { DollarSign, Heart } from "lucide-react";
import { BiMoney } from 'react-icons/bi';
import { useState } from 'react';
import { toggleLike } from '../Redux/actions/itineraryActions';


export default function ItineraryCard({ itinerary }) {
  const dispatch = useDispatch();
  const likes = useSelector(state => state.itineraries?.likes?.[itinerary._id] || 0);
  const [expanded, setExpanded] = useState(false);

  const handleLike = () => {
    dispatch(toggleLike(itinerary._id));
  };

  const authorPhoto = itinerary.user?.photo || '/default-profile.png';
  const authorName = itinerary.user?.name || 'Unknown';
  const hashtags = itinerary.hashtags || [];
  const price = itinerary.price || 0;
  const duration = itinerary.duration || 0;
  const cityPhoto = itinerary.city?.photo || '/default-city.jpg';
  const cityName = itinerary.city?.name || 'Unknown City';
  const title = itinerary.title || 'Untitled';
  const description = itinerary.description || 'No description available.';

  return (
    <div className="bg-white rounded-xl shadow p-4 mb-6 max-w-md mx-auto">
      {/* 📷 Imagen de la ciudad */}
      <div className="mb-3">
        <img
          src={cityPhoto}
          alt={cityName}
          className="w-full h-48 object-cover rounded"
          onError={(e) => {
            e.target.src = '/default-city.jpg';
          }}
        />
      </div>

      {/* 🏙 Ciudad + título */}
      <h2 className="text-xl font-bold text-gray-800 mb-1">{title}</h2>
      <p className="text-sm text-gray-500 mb-3 italic">{cityName}</p>

      {/* 👤 Autor */}
      <div className="flex items-center space-x-4 mb-3">
        <img
          src={authorPhoto}
          alt={authorName}
          className="w-14 h-14 rounded-full object-cover"
          onError={(e) => {
            e.target.src = '/default-profile.png';
          }}
        />
        <span className="font-semibold">{authorName}</span>
      </div>

      {/* 💵 Precio y ⏱ Duración */}
      <div className="flex items-center mb-2">
        <div className="flex items-center">
          {[...Array(Math.min(price, 5))].map((_, i) => (
            <BiMoney key={i} className="text-green-600" size={20} />
          ))}
          <span className="ml-2 text-sm text-gray-700 font-medium flex items-center gap-1">
            <DollarSign size={16} />{price}
          </span>
        </div>
        <span className="ml-6 text-sm text-gray-600">{duration} hrs</span>
      </div>

      {/* 📖 Descripción */}
      <p className="text-gray-700 text-sm mb-3">{description}</p>

      {/* 🏷 Hashtags y ❤️ Likes */}
      <div className="flex justify-between items-center mb-3">
        <div className="space-x-2">
          {hashtags.slice(0, 4).map((tag, i) => (
            <span key={i} className="text-blue-600 text-sm">#{tag}</span>
          ))}
        </div>
        <button
          onClick={handleLike}
          className="text-red-500 hover:text-red-600 flex items-center transition-colors"
          aria-label="Like this itinerary"
        >
          <Heart className="mr-1" fill={likes > 0 ? 'currentColor' : 'none'} />
          {likes}
        </button>
      </div>

      {/* 👁 View more / Under construction */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded transition-colors duration-200"
      >
        {expanded ? 'Hide' : 'View more'}
      </button>

      {/* 🚧 Expansión */}
      {expanded && (
        <div className="mt-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-r">
          <h3 className="font-semibold text-lg mb-2">Under Construction </h3>
          <p>We're working to add activities and comments to this itinerary.</p>
        </div>
      )}
    </div>
  );
}
