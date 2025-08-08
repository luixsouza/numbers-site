"use client"

import { useLocation } from "react-router-dom"
import { DustParticle } from "../effects/dust-particle"
import useTitleStore from "@/lib/stores/title-store"
import useDeviceStore from "@/lib/stores/device-store"
import HeroBanner from "@/components/layout/HeroBanner"

const PageHeader = () => {
  const { isDesktop } = useDeviceStore()
  const { title } = useTitleStore()
  const location = useLocation()
  const heroHeight = isDesktop ? '450px' : '300px';

  return (
    <header
      className="relative flex items-center justify-center overflow-hidden w-full"
      style={{ height: heroHeight }}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-700 to-cyan-600">
        <DustParticle id="hero-particles" particles={50} particleMinSize={2} particleMaxSize={5} />
      </div>

      <div className="relative z-10 w-full px-4">
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

export default PageHeader;