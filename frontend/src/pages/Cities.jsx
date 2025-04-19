import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "../Redux/actions/cityActions";
import { setSearch } from "../Redux/reducer/cityReducer";
import CityCard from "../components/CityCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Cities() {
  const dispatch = useDispatch();
  const { filteredCities, search, error, status } = useSelector((state) => state.cities);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCities());
    }
  }, [dispatch, status]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="p-6 mt-20 flex-grow bg-gray-100">
        <h1 className="text-3xl font-bold mb-4 text-center">Cities</h1>
        <h4 className="text-3xl mb-4 text-center">Collection of the most beautiful places and experiences</h4>

        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search cities by name..."
            className="w-[400px] p-2 mb-6 border border-gray-300 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
        </div>

        {error ? (
          <div className="text-center mt-12 text-red-500 text-lg">
            ⚠️ Error al cargar las ciudades. Intenta más tarde.
          </div>
        ) : filteredCities.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredCities.map((city) => (
              <CityCard
                key={city._id}
                id={city._id}
                name={city.name}
                photo={city.photo}
              />
            ))}
          </div>
        ) : (
          <div className="text-center mt-12 text-lg text-gray-600">
            😕 No cities found starting with "<strong>{search}</strong>".
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
