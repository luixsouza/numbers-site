import React, { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useTitleStore from '@/lib/stores/title-store';

const TeamCarousel = ({ team }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {team.map((member, index) => (
            <div key={index} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4">
              <div className="text-center bg-gray-50 p-8 rounded-2xl h-full flex flex-col items-center transition-all duration-300">
                <div className="w-36 h-36 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden bg-gray-200">
                  <img 
                    src={member.photoUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button
        className="absolute top-1/2 -left-4 md:-left-5 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-1.5 shadow-md border border-gray-200 transition-all duration-300 opacity-0 group-hover:opacity-100"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-5 w-5 text-gray-700" />
      </button>
      <button
        className="absolute top-1/2 -right-4 md:-right-5 -translate-y-1/2 bg-white hover:bg-gray-100 rounded-full p-1.5 shadow-md border border-gray-200 transition-all duration-300 opacity-0 group-hover:opacity-100"
        onClick={scrollNext}
      >
        <ChevronRight className="h-5 w-5 text-gray-700" />
      </button>
    </div>
  );
};

const Institucional = () => {
  const { setTitle } = useTitleStore();

  useEffect(() => {
    setTitle('INSTITUCIONAL');
  }, [setTitle]);

  // ALTERAR AQUI: Adicionar os membros/roles e as URLs das fotos
  const team = [
    { name: "Dr. João Silva", role: "Coordenador Geral", description: "Especialista em Inteligência Artificial e Machine Learning", photoUrl: "/images/numbers_logo.png" },
    { name: "Dra. Maria Santos", role: "Coordenadora de Pesquisa", description: "Doutora em Ciência da Computação com foco em IoT", photoUrl: "/images/numbers_logo.png" },
    { name: "Dr. Carlos Oliveira", role: "Coordenador de Inovação", description: "Especialista em Transferência de Tecnologia", photoUrl: "/images/numbers_logo.png" },
    { name: "Dr. Pedro Almeida", role: "Pesquisador Sênior", description: "Foco em Ciência de Dados e Big Data Analytics", photoUrl: "/images/numbers_logo.png" },
    { name: "Dra. Ana Costa", role: "Pesquisadora Plena", description: "Especialista em Desenvolvimento de Software e Sistemas Distribuídos", photoUrl: "/images/numbers_logo.png" },
    { name: "Dr. Lucas Martins", role: "Pesquisador Associado", description: "Desenvolvimento de sistemas embarcados e automação", photoUrl: "/images/numbers_logo.png" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <section className="pt-20 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossa Missão</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">O NumbERS tem como missão promover a pesquisa científica e tecnológica de excelência, desenvolvendo soluções inovadoras que contribuam para o avanço da ciência e o desenvolvimento socioeconômico da região e do país.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visão</h3>
              <p className="text-gray-600 mb-6">Ser reconhecido como um centro de referência em pesquisa e inovação tecnológica, contribuindo para a formação de recursos humanos qualificados e para o desenvolvimento de tecnologias que impactem positivamente a sociedade.</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Valores</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start"><span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>Excelência em pesquisa e inovação</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>Colaboração e trabalho em equipe</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>Ética e responsabilidade social</li>
                <li className="flex items-start"><span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>Inovação e criatividade</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Áreas de Atuação</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm"><h4 className="font-semibold text-gray-900">Inteligência Artificial</h4><p className="text-sm text-gray-600">Machine Learning, Deep Learning, Processamento de Linguagem Natural</p></div>
                <div className="bg-white p-4 rounded-lg shadow-sm"><h4 className="font-semibold text-gray-900">Internet das Coisas (IoT)</h4><p className="text-sm text-gray-600">Sistemas embarcados, Sensores inteligentes, Automação</p></div>
                <div className="bg-white p-4 rounded-lg shadow-sm"><h4 className="font-semibold text-gray-900">Ciência de Dados</h4><p className="text-sm text-gray-600">Big Data, Analytics, Visualização de dados</p></div>
                <div className="bg-white p-4 rounded-lg shadow-sm"><h4 className="font-semibold text-gray-900">Desenvolvimento de Software</h4><p className="text-sm text-gray-600">Aplicações web, mobile, sistemas distribuídos</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="pt-10 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 group">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossa Equipe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Conheça os líderes que dirigem nossas pesquisas e inovações.</p>
          </div>
          
          <TeamCarousel team={team} />

        </div>
      </section>
    </motion.div>
  );
};

export default Institucional;