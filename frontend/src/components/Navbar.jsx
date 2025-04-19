import React, { useState } from 'react';
import { Menu, X, User, Home, MapPin, Search as SearchIcon } from 'lucide-react';
import { Link } from 'react-router-dom';



const NavItem = ({ icon: Icon, href, label, onClick }) => (
  <Link
    to={href}
    className="flex items-center py-2 px-3 hover:text-blue-300 rounded transition duration-300"
    onClick={onClick}
  >
    <Icon className="mr-3" size={20} />
    {label}
  </Link>
);

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const menuItems = [
    { icon: Home, href: '/', label: 'Home' },
    { icon: MapPin, href: '/cities', label: 'Cities' }
  ];


  return (
    <>


      <header className="shadow-md fixed w-full top-0 z-50 flex justify-between items-center bg-gray-800 bg-opacity-70 text-white p-4">
        {/* Botón para menú móvil */}
        <button onClick={toggleSidebar} className="md:hidden text-white">
          <Menu size={30} />
        </button>

        {/* Logo */}
        <div className="text-xl font-bold text-white">MyTinerary</div>



        {/* Navegación para escritorio */}
        <nav className="hidden md:flex items-center">
          {menuItems.map(item => (
            <NavItem
              key={item.href}
              {...item}
            />
          ))}
        </nav>

        {/* Icono de usuario */}
        <User size={30} className="text-white ml-4" />
      </header>

      {/* Barra lateral para móviles */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40">
          {/* Overlay oscuro detrás del menú */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={toggleSidebar}
          />
          {/* Contenido de la barra lateral */}
          <div className="absolute left-0 top-0 w-64 h-full bg-white shadow-lg p-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={toggleSidebar}>
                <X size={24} />
              </button>
            </div>
            <nav className="space-y-2">
              {menuItems.map(item => (
                <NavItem
                  key={item.href}
                  {...item}
                  onClick={toggleSidebar}
                />
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;