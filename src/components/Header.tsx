import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative py-1 font-medium transition-all duration-300 ${
      isActive ? "text-white" : "text-slate-400 hover:text-white"
    }`;

  const ActiveBar = () => (
    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
  );

  return (
    <header className="sticky top-0 z-50 bg-[#020617]/90 backdrop-blur-md border-b border-slate-800 shadow-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <Link to="/" className="flex items-center gap-3 group transition-transform">
        <div className="flex items-center gap-3">
          <div className="bg-linear-to-br from-indigo-500 to-purple-600 p-2 rounded-lg shadow-lg">
            <span className="text-xl">🍽️</span>
          </div>
          <h1 className="text-xl font-extrabold tracking-tight text-white">
            Food<span className="text-indigo-400">Recipe</span>
          </h1>
        </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass}>
            {({ isActive }) => (
              <>
                Home
                {isActive && <ActiveBar />}
              </>
            )}
          </NavLink>

          <NavLink to="/favorites" className={navLinkClass}>
            {({ isActive }) => (
              <>
                Favorites
                {isActive && <ActiveBar />}
              </>
            )}
          </NavLink>
        </nav>

        <button 
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#020617] border-b border-slate-800 ${
          isMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 p-6">
          <NavLink to="/" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
            {({ isActive }) => (
              <span className="flex items-center gap-2">
                Home {isActive && <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />}
              </span>
            )}
          </NavLink>
          <NavLink to="/favorites" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>
            {({ isActive }) => (
              <span className="flex items-center gap-2">
                Favorites {isActive && <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />}
              </span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}