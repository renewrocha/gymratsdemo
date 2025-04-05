import React, { useState } from 'react';
import { Dumbbell, Flame, Brain, Target, ChevronRight, CheckCircle, Menu, X, Trophy, Users } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleGenderSelection = (gender: 'male' | 'female') => {
    // Aqui você pode adicionar a lógica específica para cada gênero
    window.location.href = `https://pay.hotmart.com/XXXXX?gender=${gender}`;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Modal de Seleção de Gênero */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative z-10 bg-gray-900 p-8 rounded-3xl max-w-4xl w-full mx-4">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              <X size={24} />
            </button>
            <h2 className="text-3xl font-bold text-center mb-8">Escolha seu Protocolo</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Opção Feminina */}
              <button
                onClick={() => handleGenderSelection('female')}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-white to-gray-300 p-[2px] transition-all hover:scale-[1.01]"
              >
                <div className="relative bg-gray-900 rounded-2xl p-6 h-full">
                  <img
                    src="https://raw.githubusercontent.com/seu-usuario/seu-repo/main/mulher.png"
                    alt="Protocolo Feminino"
                    className="w-full h-96 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-2">Protocolo Feminino</h3>
                  <p className="text-gray-400">Transforme seu corpo com um programa específico para o biotipo feminino</p>
                </div>
              </button>

              {/* Opção Masculina */}
              <button
                onClick={() => handleGenderSelection('male')}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-white to-gray-300 p-[2px] transition-all hover:scale-[1.01]"
              >
                <div className="relative bg-gray-900 rounded-2xl p-6 h-full">
                  <img
                    src="https://raw.githubusercontent.com/seu-usuario/seu-repo/main/homem.png"
                    alt="Protocolo Masculino"
                    className="w-full h-96 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-2">Protocolo Masculino</h3>
                  <p className="text-gray-400">Alcance seus objetivos com um programa focado no biotipo masculino</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed w-full z-40 bg-gray-900/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Dumbbell className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold">GYM RATS</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-gray-300 transition-colors">Início</a>
              <a href="#results" className="hover:text-gray-300 transition-colors">Resultados</a>
              <a href="#protocol" className="hover:text-gray-300 transition-colors">Protocolo</a>
              <a href="#testimonials" className="hover:text-gray-300 transition-colors">Depoimentos</a>
              <button
                onClick={handleOpenModal}
                className="px-6 py-2 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-200 transition-colors"
              >
                Começar Agora
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/90 backdrop-blur-sm">
              <a href="#home" className="block px-3 py-2 hover:text-gray-300">Início</a>
              <a href="#results" className="block px-3 py-2 hover:text-gray-300">Resultados</a>
              <a href="#protocol" className="block px-3 py-2 hover:text-gray-300">Protocolo</a>
              <a href="#testimonials" className="block px-3 py-2 hover:text-gray-300">Depoimentos</a>
              <button
                onClick={handleOpenModal}
                className="block w-full px-3 py-2 mt-4 text-center bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-200"
              >
                Começar Agora
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            className="w-full h-full object-cover"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">
            Torne-se uma Lenda.<br />Junte-se aos Rats.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Protocolo de treino de elite para quem ousa se transformar
          </p>
          <button
            onClick={handleOpenModal}
            className="inline-flex items-center px-8 py-3 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-200 transition-colors"
          >
            Comece Sua Transformação <ChevronRight className="ml-2" size={20} />
          </button>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Resultados Reais, Rats Reais</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                name: "João D.",
                transformation: "Perdeu 30kg em 6 meses"
              },
              {
                image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                name: "Sara M.",
                transformation: "Ganhou 10kg de massa muscular"
              },
              {
                image: "https://images.unsplash.com/photo-1598971639058-b42641bd0d67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                name: "Miguel R.",
                transformation: "Recomposição corporal completa"
              }
            ].map((result, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl">
                <img
                  src={result.image}
                  alt={result.name}
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold">{result.name}</h3>
                  <p className="text-gray-300">{result.transformation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocol Section */}
      <section id="protocol" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">O Protocolo Rat</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Programação Científica</h3>
                  <p className="text-gray-400">Metodologias avançadas baseadas em pesquisas comprovadas</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Flame className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sobrecarga Progressiva</h3>
                  <p className="text-gray-400">Progressão estruturada para ganhos contínuos</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Coaching de Elite</h3>
                  <p className="text-gray-400">Acesso direto a orientação profissional</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r p-[2px] from-white to-gray-400 rounded-2xl">
              <div className="bg-black rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-center mb-8">Junte-se à Elite</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    'Programa de treino personalizado',
                    'Plano nutricional',
                    'App de acompanhamento',
                    'Suporte 24/7 via WhatsApp',
                    'Acesso à comunidade privada',
                    'Check-ins semanais'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-white mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center mb-8">
                  <span className="text-4xl font-bold">R$997</span>
                  <span className="text-gray-400 ml-2">pagamento único</span>
                </div>
                <button
                  onClick={handleOpenModal}
                  className="block w-full text-center px-8 py-3 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-200 transition-colors"
                >
                  Começar Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">O Que Nossos Rats Dizem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "O protocolo mudou completamente minha abordagem ao treino. Os resultados falam por si.",
                author: "Carlos S.",
                role: "6 meses conosco"
              },
              {
                quote: "Melhor investimento que já fiz. O suporte da comunidade é incrível, e os resultados são reais.",
                author: "Amanda L.",
                role: "3 meses conosco"
              },
              {
                quote: "De comum a destaque na academia. A transformação superou minhas expectativas.",
                author: "Rafael M.",
                role: "1 ano conosco"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl">
                <p className="text-gray-300 mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <Users className="w-10 h-10 text-white mr-3" />
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <div className="flex items-center justify-center mb-6">
            <Dumbbell className="h-8 w-8 text-white" />
            <span className="ml-2 text-xl font-bold text-white">GYM RATS</span>
          </div>
          <p>© 2025 Gym Rats. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;