import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import imgNavbar from "../assets/img/imgNavbar.jpg"; 
import Carousel from '../components/Carousel';


const Welcome = () => {
  return (
<>

 {/* Contenedor de la imagen de fondo */}
 <div className="absolute inset-0 overflow-hidden w-full h-screen z-0">
  <img 
    src={imgNavbar}
    alt="Fondo"
    className="animate-zoomDown w-full h-full object-cover brightness-[.65]"
  />
</div>

    <div className="flex flex-col min-h-screen">
      {/* Contenido principal con padding-top para compensar el navbar fijo */}
      <main className="flex-grow pt-16">
        {/* Sección hero con la imagen de fondo visible del Navbar */}
        <section className="hero py-32 relative">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl text-white md:text-6xl font-bold mb-4 drop-shadow-lg">MyTinerary</h1>
            <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
              Find your perfect trip, designed by insiders who know and love their cities!
            </p>
            <Link to="/cities" className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition duration-300 ease-in-out">
              <Play className="mr-2" />
              Explore Cities
            </Link>
          </div>
        </section>
        
        {/* Sección del carrusel - aparece al hacer scroll hacia abajo */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4 p-5">
           
            <Carousel />
          </div>
        </section>
        
        {/* Sección de contenido adicional */}
        <section className="bg-gray-100 py-16">
          
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-3">Find the perfect destination</h3>
                <p>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
              </div>
              
        
        
        </section>
      </main>
      
      {/* El Footer ha sido eliminado de aquí para evitar duplicación */}
   
    </div>
    </>
  );

};

export default Welcome;