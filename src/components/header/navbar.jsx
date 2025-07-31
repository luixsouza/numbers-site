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

  const heroHeight = '450px'

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
        className={`absolute top-0 left-0 w-full z-20 transition-all duration-300 ${
          isDesktop
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-gray-900/95 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link to="/">
                <img
                  src="/images/numbers_logo_full.png"
                  alt="Numbers Logo"
                  className="h-12 w-auto"
                />
              </Link>
              <a href="https://www.ifg.edu.br/inhumas" target="_blank" rel="noopener noreferrer">
                <img
                  src="/images/ifg_logo.svg"
                  alt="IFG Logo"
                  className="h-12 w-auto"
                />
              </a>
            </div>
            {isDesktop ? (
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
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
              </div>
            ) : (
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setOpen(!isOpen)}
                  className="text-white hover:bg-white/10"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
              </div>
            )}
          </div>
          {!isDesktop && isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-md rounded-b-lg">
                {menuItems.map((item) => (
                  <Link
                    key={item.url}
                    to={item.url}
                    onClick={() => setOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                      location.pathname === item.url
                        ? "numbers-bg-primary text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
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