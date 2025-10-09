import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  CheckCircle,
  Map,
  BookOpen,
  Clock,
  Calendar,
} from "lucide-react";
import Editais from "../components/editais/Editais";
import Unidades from "../components/unidades/Unidades";

const Start = () => {
  const [activeTab, setActiveTab] = useState("programa");

  useEffect(() => {
    document.title = "S.T.A.R.T.";
    console.log(document.title)
  }, []);

  const headerImage =
    activeTab === "dados"
      ? {
          src: "/images/Start_dados.jpg",
          alt: "Logo do START em Dados",
          placeholder:
            "https://placehold.co/400x320/ffffff/000000?text=START+Dados",
        }
      : {
          src: "/images/Logo-START.png",
          alt: "Logo do Programa START",
          placeholder:
            "https://placehold.co/400x320/e0e0e0/666?text=Logo+START",
        };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <section className="pt-8 md:pt-12 bg-white">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 h-48 sm:h-56 md:h-80 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={headerImage.src}
                src={headerImage.src}
                alt={headerImage.alt}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-auto max-h-full mx-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = headerImage.placeholder;
                }}
              />
            </AnimatePresence>
          </div>

          <div>
            <div className="border-b border-gray-200">
              <nav
                className="-mb-px flex flex-wrap justify-center gap-x-4 gap-y-2 md:space-x-8"
                aria-label="Tabs"
              >
                <button
                  onClick={() => setActiveTab("programa")}
                  className={`whitespace-nowrap pb-2 px-1 border-b-2 font-medium text-base md:text-lg transition-colors ${
                    activeTab === "programa"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  O que é o Programa?
                </button>
                <button
                  onClick={() => setActiveTab("editais")}
                  className={`whitespace-nowrap pb-2 px-1 border-b-2 font-medium text-base md:text-lg transition-colors ${
                    activeTab === "editais"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Editais
                </button>
                <button
                  onClick={() => setActiveTab("modulos")}
                  className={`whitespace-nowrap pb-2 px-1 border-b-2 font-medium text-base md:text-lg transition-colors ${
                    activeTab === "modulos"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Módulos
                </button>
                <button
                  onClick={() => setActiveTab("unidades")}
                  className={`whitespace-nowrap pb-2 px-1 border-b-2 font-medium text-base md:text-lg transition-colors ${
                    activeTab === "unidades"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Unidades
                </button>
                <button
                  onClick={() => setActiveTab("dados")}
                  className={`whitespace-nowrap pb-2 px-1 border-b-2 font-medium text-base md:text-lg transition-colors ${
                    activeTab === "dados"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  S.T.A.R.T Em Dados
                </button>
              </nav>
            </div>

            {activeTab === "programa" && (
              <motion.div
                key="programa"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-8 md:mt-12"
              >
                <div className="bg-gray-50 p-6 md:p-8 rounded-2xl">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    O Programa START (Seguir Transformando Através da Robótica e
                    outras Tecnologias) é uma rede de laboratórios de tecnologia
                    educacional voltada à iniciação tecnológica de pessoas em
                    situação de vulnerabilidade socioeconômica, com foco em
                    crianças, adolescentes e jovens.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Por meio do aprendizado de robótica, linguagens de
                    programação, dispositivos de realidade virtual e aumentada,
                    impressão 3D e inteligência artificial; os participantes
                    desenvolvem soluções inovadoras e tecnológicas para desafios
                    reais de suas comunidades.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Idealizado pelo professor Dr. Leandro Alexandre Freitas e
                    coordenado pelo professor Dr. Rogério Sousa e Silva, o
                    Programa START é fruto de mais de dois anos de diálogo do
                    IFG com a Secretaria de Desenvolvimento e Inovação do Estado
                    de Goiás (SECTI). O programa prevê o trabalho ativo na
                    disseminação do ensino de robótica e no desenvolvimento de
                    software.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 md:p-8 rounded-2xl">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Users className="w-6 h-6 mr-3 text-blue-600" />
                    Quem pode participar?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Crianças e jovens de 8 a 20 anos*
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Em situação de vulnerabilidade.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Vínculo Escolar
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Estudantes regularmente matriculados em escolas
                          públicas ou bolsistas integrais em escolas privadas.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Equidade de Gênero
                        </h4>
                        <p className="text-gray-600 text-sm">
                          50% das vagas são reservadas para meninas.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          Cursos Gratuitos!
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Todas as formações são 100% gratuitas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "editais" && <Editais />}

            {activeTab === "modulos" && (
              <motion.div
                key="modulos"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8 md:mt-12"
              >
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Estrutura do Programa
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                    O programa é dividido em três ciclos de aprendizagem,
                    permitindo uma progressão contínua de conhecimento em
                    robótica e novas tecnologias.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="border border-gray-200 bg-white rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="bg-blue-100 rounded-full p-4 mb-5">
                      <BookOpen className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Módulo I
                    </h4>
                    <p className="text-gray-600 flex-grow">
                      Curso de Introdução à Robótica
                    </p>
                  </div>
                  <div className="border border-gray-200 bg-white rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="bg-blue-100 rounded-full p-4 mb-5">
                      <BookOpen className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Módulo II
                    </h4>
                    <p className="text-gray-600 flex-grow">
                      Curso Intermediário de Robótica
                    </p>
                  </div>
                  <div className="border border-gray-200 bg-white rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="bg-blue-100 rounded-full p-4 mb-5">
                      <BookOpen className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Módulo III
                    </h4>
                    <p className="text-gray-600 flex-grow">
                      Tópicos Avançados em Novas Tecnologias
                    </p>
                  </div>
                </div>

                <div className="text-center mt-16 mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Detalhes da Formação
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                    Cada etapa do programa foi desenhada para oferecer uma
                    experiência de aprendizado completa e dinâmica, com uma
                    carga horária bem distribuída.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="border border-gray-200 bg-white rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="bg-blue-100 rounded-full p-4 mb-5">
                      <Clock className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      32 Horas
                    </h4>
                    <p className="text-gray-600 flex-grow">por módulo</p>
                  </div>
                  <div className="border border-gray-200 bg-white rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="bg-blue-100 rounded-full p-4 mb-5">
                      <Clock className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      96 Horas
                    </h4>
                    <p className="text-gray-600 flex-grow">
                      carga horária total
                    </p>
                  </div>
                  <div className="border border-gray-200 bg-white rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="bg-blue-100 rounded-full p-4 mb-5">
                      <Calendar className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      2 Aulas
                    </h4>
                    <p className="text-gray-600 flex-grow">por semana</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "unidades" && <Unidades />}

            {activeTab === "dados" && (
              <motion.div
                key="dados"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8 md:mt-12"
              >
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Dashboard Interativo
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                    Explore os dados do programa S.T.A.R.T. através do nosso
                    painel interativo do Power BI.
                  </p>
                </div>
                <div className="flex justify-center">
                  <iframe
                    title="Dashboard_v2"
                    src="https://app.powerbi.com/view?r=eyJrIjoiYjA4MjQ1YzItZjE3ZC00ZGQ3LTk4OWYtMTBlODc0Yzg1ZGE4IiwidCI6ImI0YjBlM2VhLTMwZjgtNGM0Yy05MmYwLWQ2MWM1ZjIyOWZjNyJ9"
                    frameBorder="0"
                    allowFullScreen={true}
                    className="rounded-lg shadow-lg border border-gray-200 w-full h-[3000px] md:h-[3500px]"
                  ></iframe>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      <section className="bg-white pt-8 pb-16 md:pt-12 md:pb-20">
      <div className="max-w-7xl mx-auto px-0 md:px-8">
        <a
          href="https://goias.gov.br/inovacao/start/"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src="/images/Banner-IFG-START.png"
            alt="Banner de parceria entre IFG e o programa START"
            className="w-full h-auto bg-white rounded-2xl"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="380"><rect width="100%" height="100%" fill="white"/></svg>';
            }}
          />
        </a>
      </div>
    </section>
    </motion.div>
  );
};

export default Start;
