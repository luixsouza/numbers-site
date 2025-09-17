import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Search } from "lucide-react";
import { unidadesData } from "../../data/unidades";

const Unidades = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUnidades = unidadesData.filter(
    (unidade) =>
      unidade.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      unidade.locationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      unidade.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      key="unidades"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-8 md:mt-12"
    >
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Onde Estamos
        </h3>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          O programa prevê a estruturação de 24 laboratórios Start em 22
          municípios, distribuídos por todo o estado de Goiás.
        </p>
      </div>

      <div className="mb-8 relative max-w-lg mx-auto">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Buscar por cidade, local ou endereço..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredUnidades.length > 0 ? (
          filteredUnidades.map((unidade) => (
            <div
              key={unidade.name}
              className="border border-gray-200 bg-white rounded-2xl p-6 flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-3">
                <MapPin className="w-6 h-6 mr-3 text-blue-600 flex-shrink-0" />
                <h4 className="text-lg font-bold text-gray-900">
                  {unidade.name}
                </h4>
              </div>
              <div className="pl-9">
                <p className="text-gray-700 font-semibold text-sm">
                  {unidade.locationName}
                </p>
                <p className="text-gray-500 text-sm">{unidade.address}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            Nenhuma unidade encontrada.
          </p>
        )}
      </div>
      <img
        src="/images/Mapa-START.jpg"
        alt="Mapa das unidades do programa START em Goiás"
        className="w-full max-w-6xl mx-auto rounded-lg shadow-lg border border-gray-200"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://placehold.co/1024x576/e0e0e0/666?text=Mapa+Unidades";
        }}
      />
    </motion.div>
  );
};

export default Unidades;
