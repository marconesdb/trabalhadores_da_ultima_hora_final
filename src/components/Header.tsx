import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from "../assets/img/Logomarca.png"; // caminho da sua imagem 
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Início', path: '/' },
    { name: 'Quem Somos', path: '/quem-somos' },
    { name: 'Projetos', path: '/projetos' },
    { name: 'Campanhas', path: '/campanhas' },
    { name: 'Transparência', path: '/transparencia' },
    { name: 'Galeria', path: '/galeria' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-36">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} className="h-32 w-32 text-primary-700" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-primary-900 leading-tight">Trabalhadores da Última Hora</span>
              <span className="text-xs text-primary-500 tracking-wider">"Deus, Cristo e Caridade"</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-slate-600 hover:text-primary-700 font-medium transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/doacoes" className="bg-secondary hover:bg-yellow-500 text-white px-4 py-2 rounded-full font-bold transition shadow-sm">
              Doar Agora
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-primary-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary-700 hover:bg-primary-50"
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/doacoes" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 mt-4 text-center rounded-md font-bold bg-secondary text-white"
            >
              Quero Doar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;