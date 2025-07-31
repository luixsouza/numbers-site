import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, Users, Tag } from 'lucide-react';
import useTitleStore from '@/lib/stores/title-store';

const Projetos = () => {
  const { setTitle } = useTitleStore();
  const [filter, setFilter] = useState('todos');

  useEffect(() => {
    setTitle('PROJETOS');
  }, [setTitle]);

  const projects = [
    { id: 1, title: "Sistema de Monitoramento Inteligente", description: "Desenvolvimento de um sistema IoT para monitoramento em tempo real de variáveis ambientais usando sensores inteligentes e machine learning.", category: "iot", status: "ativo", startDate: "2024", team: 5, technologies: ["IoT", "Python", "Machine Learning", "React"], image: "bg-gradient-to-br from-green-400 to-blue-500" },
    { id: 2, title: "Plataforma de Análise de Dados", description: "Criação de uma plataforma web para análise e visualização de grandes volumes de dados com algoritmos de inteligência artificial.", category: "ia", status: "ativo", startDate: "2023", team: 8, technologies: ["Python", "TensorFlow", "React", "PostgreSQL"], image: "bg-gradient-to-br from-purple-400 to-pink-500" },
    { id: 3, title: "Aplicativo de Gestão Acadêmica", description: "Desenvolvimento de um aplicativo mobile para gestão de atividades acadêmicas com funcionalidades de agenda, notas e comunicação.", category: "software", status: "concluido", startDate: "2023", team: 4, technologies: ["React Native", "Node.js", "MongoDB"], image: "bg-gradient-to-br from-yellow-400 to-orange-500" },
    { id: 4, title: "Chatbot Educacional", description: "Criação de um chatbot inteligente para auxiliar estudantes com dúvidas acadêmicas usando processamento de linguagem natural.", category: "ia", status: "ativo", startDate: "2024", team: 6, technologies: ["Python", "NLP", "TensorFlow", "Flask"], image: "bg-gradient-to-br from-indigo-400 to-purple-500" },
    { id: 5, title: "Sistema de Automação Residencial", description: "Desenvolvimento de um sistema completo de automação residencial com controle via aplicativo e integração com assistentes virtuais.", category: "iot", status: "desenvolvimento", startDate: "2024", team: 7, technologies: ["Arduino", "ESP32", "React", "Firebase"], image: "bg-gradient-to-br from-teal-400 to-blue-500" },
    { id: 6, title: "Portal de Transparência", description: "Criação de um portal web para transparência de dados públicos com visualizações interativas e APIs abertas.", category: "software", status: "concluido", startDate: "2023", team: 5, technologies: ["Vue.js", "D3.js", "Node.js", "MySQL"], image: "bg-gradient-to-br from-cyan-400 to-blue-500" }
  ];

  const categories = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'ia', label: 'Inteligência Artificial' },
    { id: 'iot', label: 'Internet das Coisas' },
    { id: 'software', label: 'Desenvolvimento de Software' }
  ];

  const statusColors = {
    ativo: 'bg-green-100 text-green-800',
    desenvolvimento: 'bg-yellow-100 text-yellow-800',
    concluido: 'bg-blue-100 text-blue-800'
  };

  const filteredProjects = filter === 'todos' ? projects : projects.filter(project => project.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossos Projetos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Conheça os projetos de pesquisa e desenvolvimento que estamos realizando para criar soluções inovadoras e impactantes.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button key={category.id} variant={filter === category.id ? "default" : "outline"} onClick={() => setFilter(category.id)} className={filter === category.id ? "bg-blue-500 hover:bg-blue-600" : ""}>{category.label}</Button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className={`h-48 ${project.image} flex items-center justify-center`}><h3 className="text-white text-xl font-bold text-center px-4">{project.title}</h3></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4"><span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>{project.status.charAt(0).toUpperCase() + project.status.slice(1)}</span><div className="flex items-center text-gray-500 text-sm"><Calendar className="w-4 h-4 mr-1" />{project.startDate}</div></div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex items-center text-gray-500 text-sm mb-4"><Users className="w-4 h-4 mr-1" />{project.team} pesquisadores</div>
                  <div className="mb-4">
                    <div className="flex items-center mb-2"><Tag className="w-4 h-4 mr-1 text-gray-500" /><span className="text-sm text-gray-500">Tecnologias:</span></div>
                    <div className="flex flex-wrap gap-2">{project.technologies.map((tech, index) => (<span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">{tech}</span>))}</div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full hover:bg-blue-50 hover:border-blue-300">Ver Detalhes<ExternalLink className="w-4 h-4 ml-2" /></Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-r from-blue-700 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Tem uma Ideia de Projeto?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Estamos sempre abertos a novas colaborações e parcerias. Entre em contato para discutir seu projeto conosco.</p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">Propor Colaboração</Button>
        </div>
      </section>
    </motion.div>
  );
};

export default Projetos;