import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Lightbulb, Target, Zap, Globe, Award } from 'lucide-react';
import useTitleStore from '@/lib/stores/title-store';

const Home = () => {
  const { setTitle } = useTitleStore();

  useEffect(() => {
    setTitle('');
  }, [setTitle]);

  const features = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Equipe Especializada",
      description: "Pesquisadores e especialistas dedicados ao desenvolvimento de soluções inovadoras com experiência multidisciplinar.",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      title: "Inovação Tecnológica",
      description: "Desenvolvimento de tecnologias emergentes e soluções disruptivas que transformam ideias em realidade.",
      gradient: "from-purple-500 to-pink-400"
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Resultados Práticos",
      description: "Foco em pesquisas aplicadas que geram impacto real na sociedade, indústria e comunidade acadêmica.",
      gradient: "from-green-500 to-teal-400"
    }
  ];

  const stats = [
    { icon: <Zap className="w-6 h-6" />, number: "25+", label: "Projetos Ativos" },
    { icon: <Users className="w-6 h-6" />, number: "15+", label: "Pesquisadores" },
    { icon: <Globe className="w-6 h-6" />, number: "10+", label: "Parcerias" },
    { icon: <Award className="w-6 h-6" />, number: "50+", label: "Publicações" }
  ];

  return (
    <div>
      {/* About Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-cyan-50/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Sobre o <span className="numbers-primary">NumbERS</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              O NumbERS é um núcleo de pesquisa dedicado ao desenvolvimento de tecnologias 
              emergentes e soluções inovadoras. Nossa missão é promover a pesquisa aplicada 
              e a transferência de tecnologia para o setor produtivo, criando pontes entre 
              a academia e a indústria.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
<section 
  className="bg-gradient-to-r from-blue-700 to-cyan-600 relative overflow-hidden flex items-center"
  style={{ height: '450px' }}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-6">
        Números que Impressionam
      </h2>
      <p className="text-xl text-blue-100 max-w-3xl mx-auto">
        Nosso compromisso com a excelência se reflete em cada projeto e parceria.
      </p>
    </div>
    
    <div className="grid md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center group">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover-lift">
            <div className="flex justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
              {stat.icon}
            </div>
            <div className="text-4xl font-bold text-white mb-2">
              {stat.number}
            </div>
            <div className="text-blue-100 font-medium">
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-cyan-50/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Conheça Nossos <span className="numbers-primary">Projetos</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Descubra as pesquisas e desenvolvimentos que estamos realizando 
              para transformar ideias em soluções práticas que impactam o mundo real.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="numbers-bg-primary hover:bg-blue-600 text-white shadow-lg hover-lift transition-all duration-300 px-8 py-4 text-lg"
              >
                Ver Projetos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-gray-300 hover:border-blue-400 hover:text-blue-600 transition-all duration-300 px-8 py-4 text-lg"
              >
                Saiba Mais Sobre Nós
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-bold text-white mb-6">
            Vamos Colaborar?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Interessado em colaborar ou saber mais sobre nossos projetos? 
            Estamos sempre abertos a novas parcerias e oportunidades de pesquisa.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="numbers-bg-primary hover:bg-blue-600 text-white shadow-lg hover-lift transition-all duration-300 px-8 py-4"
            >
              Fale Conosco
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-300 px-8 py-4"
            >
              Ver Oportunidades
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

