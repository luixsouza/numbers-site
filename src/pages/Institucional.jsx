import React, { useEffect } from 'react';
import { Award, Users, BookOpen, Globe } from 'lucide-react';
import useTitleStore from '@/lib/stores/title-store';

const Institucional = () => {
  const { setTitle } = useTitleStore();

  useEffect(() => {
    setTitle('INSTITUCIONAL');
  }, [setTitle]);

  const team = [
    {
      name: "Dr. João Silva",
      role: "Coordenador Geral",
      description: "Especialista em Inteligência Artificial e Machine Learning"
    },
    {
      name: "Dra. Maria Santos",
      role: "Coordenadora de Pesquisa",
      description: "Doutora em Ciência da Computação com foco em IoT"
    },
    {
      name: "Dr. Carlos Oliveira",
      role: "Coordenador de Inovação",
      description: "Especialista em Transferência de Tecnologia"
    }
  ];

  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nossa Missão
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              O NumbERS tem como missão promover a pesquisa científica e tecnológica de excelência, 
              desenvolvendo soluções inovadoras que contribuam para o avanço da ciência e o 
              desenvolvimento socioeconômico da região e do país.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visão</h3>
              <p className="text-gray-600 mb-6">
                Ser reconhecido como um centro de referência em pesquisa e inovação tecnológica, 
                contribuindo para a formação de recursos humanos qualificados e para o 
                desenvolvimento de tecnologias que impactem positivamente a sociedade.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Valores</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Excelência em pesquisa e inovação
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Colaboração e trabalho em equipe
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Ética e responsabilidade social
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Inovação e criatividade
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Áreas de Atuação</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900">Inteligência Artificial</h4>
                  <p className="text-sm text-gray-600">Machine Learning, Deep Learning, Processamento de Linguagem Natural</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900">Internet das Coisas (IoT)</h4>
                  <p className="text-sm text-gray-600">Sistemas embarcados, Sensores inteligentes, Automação</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900">Ciência de Dados</h4>
                  <p className="text-sm text-gray-600">Big Data, Analytics, Visualização de dados</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900">Desenvolvimento de Software</h4>
                  <p className="text-sm text-gray-600">Aplicações web, mobile, sistemas distribuídos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça os líderes que dirigem nossas pesquisas e inovações.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-gray-50 p-6 rounded-lg">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Institucional;