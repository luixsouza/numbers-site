"use client"

import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DustParticle } from "../effects/dust-particle"
import useTitleStore from "@/lib/stores/title-store"
import useDeviceStore from "@/lib/stores/device-store"
import debounce from "@/lib/debounce"
import HeroBanner from "@/components/layout/HeroBanner"

const Navbar = () => {
  const menuItems = [
    { url: "/", title: "INÍCIO" },
    { url: "/institucional", title: "INSTITUCIONAL" },
    { url: "/projetos", title: "PROJETOS" },
  ]

  const { isDesktop, updateDesktop } = useDeviceStore()
  const [isOpen, setOpen] = useState(false)
  const { title } = useTitleStore()
  const location = useLocation()

  useEffect(() => {
    const updateMedia = debounce(() => {
      updateDesktop(1024)
    }, 100)

    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
  }, [updateDesktop])

  const heroHeight = isDesktop ? '450px' : '300px';

  return (
    <header
      className="relative flex items-center justify-center overflow-hidden w-full"
      style={{
        height: heroHeight,
      }}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-700 to-cyan-600">
        <DustParticle id="hero-particles" particles={50} particleMinSize={2} particleMaxSize={5} />
      </div>

      <nav
        className="absolute top-0 left-0 w-full z-20 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
      >
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

      <div className="relative z-10 w-full px-4 pt-16">
        {location.pathname === "/" ? (
          <HeroBanner />
        ) : (
          <h1
            className={`font-bold text-white text-center animate-fade-in ${
              title?.length > 32
                ? "text-3xl md:text-5xl"
                : title?.length > 4
                ? "text-5xl md:text-7xl"
                : "text-7xl md:text-9xl"
            }`}
          >
            {title}
          </h1>
        )}
      </div>
    </header>
  );
}

export default Navbar;