import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  FileText,
  Clock,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { editaisData } from "../../data/editais";

const iconMap = {
  Inscrição: Calendar,
  Vagas: FileText,
  Resultados: Calendar,
  Matrícula: Calendar,
  "Início das aulas": Clock,
  Status: CheckCircle,
};

const EditalCard = ({ edital }) => (
  <div className="bg-white border border-blue-200 rounded-2xl shadow-md hover:shadow-lg hover:border-blue-400 hover:-translate-y-1 transition-all duration-300 p-6 md:p-8">
    <div className="md:flex md:items-center md:gap-8">
      <div className="flex-grow">
        <h5 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
          {edital.title}
        </h5>
        <p className="text-gray-700 mb-5">{edital.description}</p>
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 text-sm mb-6">
          {edital.details.map((detail) => {
            const Icon = iconMap[detail.label] || FileText;
            let statusValue = detail.value;
            let statusColorClass = "text-gray-700";
            let iconColorClass = "text-blue-500";

            if (detail.isStatus) {
              if (edital.status === "finalizado") {
                statusValue = "Inscrições Fechadas";
                statusColorClass = "text-red-600 font-medium";
                iconColorClass = "text-red-500";
              } else {
                statusValue = "Inscrições Abertas";
                statusColorClass = "text-green-600 font-medium";
                iconColorClass = "text-green-500";
              }
            }

            return (
              <div
                key={detail.label}
                className={`flex items-center ${statusColorClass}`}
              >
                <Icon
                  className={`w-4 h-4 mr-2 ${iconColorClass} flex-shrink-0`}
                />
                <span>
                  <strong>{detail.label}:</strong> {statusValue}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-6 md:mt-0 flex-shrink-0 flex flex-col space-y-3">
        {edital.links.map((link) => {
          const isInscricao = link.text.toLowerCase().includes("inscreva");
          const isFinalizado = edital.status === "finalizado";
          const disabledClass =
            isInscricao && isFinalizado
              ? "pointer-events-none bg-gray-100 text-gray-400 border border-gray-200 shadow-none"
              : link.primary
              ? "text-white bg-blue-600 hover:bg-blue-700 shadow-sm"
              : "text-blue-700 bg-white border border-blue-300 hover:bg-blue-100";
          return (
            <a
              key={link.href}
              href={isInscricao && isFinalizado ? undefined : link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center w-full md:w-auto px-6 py-3 font-semibold rounded-lg transition-colors ${disabledClass}`}
              tabIndex={isInscricao && isFinalizado ? -1 : 0}
              aria-disabled={isInscricao && isFinalizado}
            >
              {link.text}
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          );
        })}
      </div>
    </div>
  </div>
);

const Editais = () => {
  const [activeEditalTab, setActiveEditalTab] = useState("vigentes");

  const editaisVigentes = editaisData.filter((e) => e.status === "vigente");
  const editaisFinalizados = editaisData.filter(
    (e) => e.status === "finalizado"
  );

  return (
    <motion.div
      key="editais"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-8 md:mt-12"
    >
      <div className="mb-8 bg-white pb-2">
        <div className="max-w-7xl mx-auto px-0 md:px-8">
          <img
            src="/images/banner-inscricoes-START.jpg"
            alt="Banner de inscrições para o programa START"
            className="w-full h-auto rounded-2xl"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/1400x380/e0e0e0/666?text=Banner+Inscri%C3%A7%C3%B5es";
            }}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="border-b border-gray-200 mb-12">
          <nav className="-mb-px flex justify-center gap-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveEditalTab("vigentes")}
              className={`whitespace-nowrap pb-3 px-1 border-b-2 font-semibold text-base md:text-lg transition-colors ${
                activeEditalTab === "vigentes"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Editais Vigentes
            </button>
            <button
              onClick={() => setActiveEditalTab("finalizados")}
              className={`whitespace-nowrap pb-3 px-1 border-b-2 font-semibold text-base md:text-lg transition-colors ${
                activeEditalTab === "finalizados"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Editais Finalizados
            </button>
          </nav>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeEditalTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeEditalTab === "vigentes" && (
              <div className="space-y-8">
                {editaisVigentes.length > 0 ? (
                  editaisVigentes.map((edital) => (
                    <EditalCard key={edital.id} edital={edital} />
                  ))
                ) : (
                  <div className="text-center text-gray-500 p-8">
                    <p>Nenhum edital vigente no momento.</p>
                  </div>
                )}
              </div>
            )}
            {activeEditalTab === "finalizados" && (
              <div className="space-y-8">
                {editaisFinalizados.length > 0 ? (
                  editaisFinalizados.map((edital) => (
                    <EditalCard key={edital.id} edital={edital} />
                  ))
                ) : (
                  <div className="text-center text-gray-500 p-8">
                    <p>Nenhum edital finalizado no momento.</p>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Editais;
