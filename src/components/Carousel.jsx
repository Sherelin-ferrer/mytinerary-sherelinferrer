import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cities = [
    [
      {
        name: "New York",
        img: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
      },
      {
        name: "Paris",
        img: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
      },
      {
        name: "Tokyo",
        img: "https://images.pexels.com/photos/2087017/pexels-photo-2087017.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
      },
      {
        name: "London",
        img: "https://images.pexels.com/photos/1796723/pexels-photo-1796723.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
      }
    ],
    [
      {
        name: "Rome",
        img: "https://images.pexels.com/photos/1591366/pexels-photo-1591366.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
      },
      {
        name: "Barcelona",
        img: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
      },
      {
        name: "Sydney",
        img: "https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
      },
      {
        name: "Berlin",
        img: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
      }
    ],
    [
      {
        name: "Dubai",
        img: "https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
      },
      {
        name: "Moscow",
        img: "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
      },
      {
        name: "Rio de Janeiro",
        img: "https://images.pexels.com/photos/1619567/pexels-photo-1619567.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
      },
      {
        name: "Bangkok",
        img: "https://images.pexels.com/photos/1829987/pexels-photo-1829987.jpeg?auto=compress&cs=tinysrgb&w=400&h=300"
      }
    ]
  ];
  

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cities.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cities.length) % cities.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Popular Mytineraries</h2>
      
      <div className="relative flex items-center justify-center">
        {/* Botón izquierdo */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-2 rounded-full z-10"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Grid de ciudades */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-500">
          {cities[currentSlide].map((city, index) => (
            <div key={index} className="text-center">
              <img
                src={city.img}
                alt={city.name}
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <p className="mt-2 font-semibold">{city.name}</p>
            </div>
          ))}
        </div>

        {/* Botón derecho */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-2 rounded-full z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
