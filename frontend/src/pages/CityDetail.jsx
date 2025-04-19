import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import fetchItinerariesByCity from "../Redux/actions/itineraryActions";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ItineraryCard from "../components/ItineraryCard";


export default function CityDetail() {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { itineraries, status, error } = useSelector(state => state.itineraries);

  useEffect(() => {
    if (name) {
      dispatch(fetchItinerariesByCity(name));
    }
  }, [dispatch, name]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      
      <main className="flex-grow p-6 mt-20 max-w-6xl mx-auto w-full ">
        <div className="justify-center mb-8">
          <h1 className="text-3xl font-bold text-center text-gray-800">Itineraries in {name}</h1>
        
        </div>

        {/* Estado de carga */}
        {status === 'loading' && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-gray-600">Loading itineraries...</p>
          </div>
        )}

        {/* Error */}
        {status === 'failed' && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Error loading itineraries</h3>
                <p className="text-sm text-red-700 mt-2">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Lista de itinerarios */}
        {status === 'succeeded' && (
          <div className="space-y-6">
            {itineraries.length > 0 ? (
              itineraries.map(itinerary => (
                <ItineraryCard key={itinerary._id} itinerary={itinerary} />
              ))
            ) : (
              <div className="bg-white p-8 rounded-lg shadow text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">No itineraries found</h3>
                <p className="mt-1 text-sm text-gray-500">No itineraries yet for this city {name}</p>
              </div>
            )}
          </div>
        )}

       
      </main>
      
      <Footer />
    </div>
  );
}
