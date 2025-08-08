"use client"

import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import useTitleStore from "@/lib/stores/title-store"

const Navbar = () => {
  const menuItems = [
    { url: "/", title: "INÍCIO" },
    { url: "/institucional", title: "INSTITUCIONAL" },
    { url: "/projetos", title: "PROJETOS" },
    { url: "/start", title: "S.T.A.R.T." },
  ]

  const [isOpen, setOpen] = useState(false)
  const { title } = useTitleStore()
  const location = useLocation()

  useEffect(() => {
    if (title) {
      document.title = `NumbERS - ${title}`;
    } else {
      document.title = 'NumbERS - Núcleo de Pesquisa';
    }
  }, [title]);

  return (
    <nav className="sticky top-0 w-full z-30 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link to="/">
              <img
                src="/images/numbers_logo_full.png"
                alt="Numbers Logo"
                className="h-10 sm:h-12 w-auto"
              />
            </Link>
            <a href="https://www.ifg.edu.br/inhumas" target="_blank" rel="noopener noreferrer">
              <img
                src="/images/ifg_logo.svg"
                alt="IFG Logo"
                className="h-10 sm:h-12 w-auto"
              />
            </a>
          </div>
          
          <div className="hidden lg:flex items-baseline space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.url}
                to={item.url}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover-lift ${
                  location.pathname === item.url
                    ? "numbers-bg-primary text-white shadow-lg"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(!isOpen)}
              className="text-gray-800 hover:bg-gray-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
        
        {isOpen && (
          <div className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.url}
                  to={item.url}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    location.pathname === item.url
                      ? "numbers-bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;