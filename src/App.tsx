import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Code2, Sparkles, Zap, Menu, X, Linkedin, Github, Star, TrendingUp, Award, Rocket, Users, Target, CheckCircle2, MessageSquare, Calendar, Sun, Moon } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0F0F0F] transition-colors duration-500">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 dark:bg-[#0F0F0F]/80 backdrop-blur-xl shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Code2 className="w-7 h-7 text-[#007AFF]" />
              <span className="text-xl font-semibold text-[#0F0F0F] dark:text-white">
                NovaWeb
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('chi-siamo')}
                className="text-sm text-[#0F0F0F] dark:text-white hover:text-[#007AFF] transition-colors"
              >
                Chi Siamo
              </button>
              <button
                onClick={() => scrollToSection('servizi')}
                className="text-sm text-[#0F0F0F] dark:text-white hover:text-[#007AFF] transition-colors"
              >
                Servizi
              </button>
              <button
                onClick={() => scrollToSection('processo')}
                className="text-sm text-[#0F0F0F] dark:text-white hover:text-[#007AFF] transition-colors"
              >
                Processo
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-sm text-[#0F0F0F] dark:text-white hover:text-[#007AFF] transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('testimonianze')}
                className="text-sm text-[#0F0F0F] dark:text-white hover:text-[#007AFF] transition-colors"
              >
                Testimonianze
              </button>
              <button
                onClick={() => scrollToSection('contatti')}
                className="text-sm text-[#0F0F0F] dark:text-white hover:text-[#007AFF] transition-colors"
              >
                Contatti
              </button>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-[#0F0F0F] dark:text-white" />
                ) : (
                  <Moon className="w-5 h-5 text-[#0F0F0F] dark:text-white" />
                )}
              </button>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#0F0F0F] dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-[#0F0F0F] dark:text-white" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-[#0F0F0F]/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800">
            <div className="px-6 py-4 space-y-3">
              <button
                onClick={() => scrollToSection('chi-siamo')}
                className="block w-full text-left text-[#0F0F0F] dark:text-white hover:text-[#007AFF] transition-colors"
              >
                Chi Siamo
              </button>
              <button
                onClick={() => scrollToSection('servizi')}
                className="block w-full text-left text-[#0F0F0F] dark:text-white hover:text-[#007AFF] transition-colors"
              >
                Servizi
              </button>
              <button
                onClick={() => scrollToSection('processo')}
                className="block w-full text-left text-[#0F0F0F] dark:text-white hover:text-[#007AFF] transition-colors"
              >
                Processo
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left text-[#0F0F0F] dark:text-white hover:text-[#007AFF] transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('testimonianze')}
                className="block w-full text-left text-[#0F0F0F] dark:text-white hover:text-[#007AFF] transition-colors"
              >
                Testimonianze
              </button>
              <button
                onClick={() => scrollToSection('contatti')}
                className="block w-full text-left text-[#0F0F0F] dark:text-white hover:text-[#007AFF] transition-colors"
              >
                Contatti
              </button>
              <div className="pt-3 mt-3 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={toggleDarkMode}
                  className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                >
                  <span className="text-sm text-[#0F0F0F] dark:text-white font-medium">
                    {isDarkMode ? 'Modalità chiara' : 'Modalità scura'}
                  </span>
                  {isDarkMode ? (
                    <Sun className="w-5 h-5 text-[#0F0F0F] dark:text-white" />
                  ) : (
                    <Moon className="w-5 h-5 text-[#0F0F0F] dark:text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#F5F5F7] to-white dark:from-[#0F0F0F] dark:via-[#1A1A1A] dark:to-[#0F0F0F]">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#007AFF]/5 rounded-full blur-3xl animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#007AFF]/5 rounded-full blur-3xl animate-pulse delay-1000"
            style={{
              transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`
            }}
          ></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-[#007AFF]/10 text-[#007AFF] rounded-full text-sm font-medium">
                Il futuro del web development
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#0F0F0F] dark:text-white leading-tight tracking-tight">
              Trasformiamo idee
              <br />
              in esperienze
              <br />
              <span className="text-[#007AFF]">straordinarie</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Due giovani sviluppatori, un'unica visione: portare il tuo brand nel
              futuro digitale.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => scrollToSection('contatti')}
                className="group inline-flex items-center space-x-2 bg-[#007AFF] hover:bg-[#0051D5] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>Inizia il tuo progetto</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="group inline-flex items-center space-x-2 bg-white dark:bg-[#1A1A1A] text-[#0F0F0F] dark:text-white border-2 border-gray-200 dark:border-gray-700 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:border-[#007AFF] hover:scale-105"
              >
                <span>Vedi i progetti</span>
              </button>
            </div>
          </div>

          <div className="mt-20 relative">
            <div className="relative mx-auto max-w-5xl">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-[#007AFF]/20 hover:shadow-3xl">
                <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl shadow-xl p-12">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse delay-100"></div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded animate-pulse delay-200"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-[#007AFF]/20 rounded w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse delay-150"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse delay-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-[#007AFF] mb-2">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Progetti completati</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-[#007AFF] mb-2">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Clienti soddisfatti</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl font-bold text-[#007AFF] mb-2">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Supporto dedicato</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="text-4xl font-bold text-[#007AFF] mb-2">5★</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Rating medio</div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="chi-siamo"
        className="py-32 bg-white dark:bg-[#0F0F0F] transition-colors relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#007AFF] to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-[#0F0F0F] dark:text-white mb-6">
              Chi Siamo
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Siamo due ragazzi appassionati di tecnologia e creatività. Creiamo
              esperienze digitali come nessun altro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[{
              name: 'Marco Rossi',
              icon: Code2,
              desc: 'Full-stack developer con passione per l\'architettura software e l\'ottimizzazione delle performance. Specializzato in React e Node.js.',
              skills: ['React', 'Node.js', 'TypeScript']
            }, {
              name: 'Luca Bianchi',
              icon: Sparkles,
              desc: 'UI/UX designer e frontend developer. Trasformo idee in interfacce eleganti e intuitive con attenzione maniacale ai dettagli.',
              skills: ['Figma', 'Tailwind', 'Animation']
            }].map((founder, idx) => (
              <div key={idx} className="group">
                <div className="bg-gradient-to-br from-[#F5F5F7] to-white dark:from-[#1A1A1A] dark:to-[#0F0F0F] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1">
                  <div className="aspect-square bg-gradient-to-br from-[#007AFF]/20 to-[#007AFF]/5 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#007AFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <founder.icon className="w-24 h-24 text-[#007AFF] group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#0F0F0F] dark:text-white mb-3">
                    {founder.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {founder.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {founder.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-[#007AFF]/10 text-[#007AFF] text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white dark:bg-[#0F0F0F] transition-colors">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-[#0F0F0F] dark:text-white mb-6">
              Innovazione. Design. Performance.
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I tre pilastri del nostro approccio allo sviluppo web
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="group text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#007AFF] to-[#0051D5] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0F0F0F] dark:text-white mb-4">
                Innovazione
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Utilizziamo le tecnologie più avanzate e le best practice del settore per creare soluzioni all'avanguardia.
              </p>
            </div>

            <div className="group text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#007AFF] to-[#0051D5] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0F0F0F] dark:text-white mb-4">
                Design
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Ogni pixel è curato nei minimi dettagli per offrire un'esperienza utente eccezionale e memorabile.
              </p>
            </div>

            <div className="group text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#007AFF] to-[#0051D5] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0F0F0F] dark:text-white mb-4">
                Performance
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Ottimizzazione estrema per garantire velocità, affidabilità e scalabilità in ogni situazione.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="servizi"
        className="py-32 bg-[#F5F5F7] dark:bg-[#1A1A1A] transition-colors relative"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#007AFF]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#007AFF]/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-[#0F0F0F] dark:text-white mb-6">
              Servizi
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Soluzioni complete per portare la tua visione nel mondo digitale
            </p>
          </div>

          <div className="relative z-10 grid md:grid-cols-3 gap-8">
            <div className="group bg-white dark:bg-[#0F0F0F] rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-transparent hover:border-[#007AFF]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#007AFF] to-[#0051D5] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0F0F0F] dark:text-white mb-4">
                Sviluppo Siti Moderni
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Creiamo siti web responsive, performanti e ottimizzati SEO con le
                tecnologie più innovative. React, Next.js, TypeScript e molto altro.
              </p>
            </div>

            <div className="group bg-white dark:bg-[#0F0F0F] rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-transparent hover:border-[#007AFF]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#007AFF] to-[#0051D5] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0F0F0F] dark:text-white mb-4">
                UI/UX Design
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Design system completi, wireframe, prototipi interattivi. Ogni pixel
                è studiato per offrire la migliore esperienza utente possibile.
              </p>
            </div>

            <div className="group bg-white dark:bg-[#0F0F0F] rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-transparent hover:border-[#007AFF]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#007AFF] to-[#0051D5] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0F0F0F] dark:text-white mb-4">
                Automazioni e AI
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Integriamo intelligenza artificiale e automazioni per ottimizzare i
                tuoi processi business e migliorare l'efficienza operativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="processo"
        className="py-32 bg-white dark:bg-[#0F0F0F] transition-colors"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-[#0F0F0F] dark:text-white mb-6">
              Il nostro processo
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Un metodo collaudato per trasformare la tua visione in realtà
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
              icon: Target,
              title: '1. Analisi',
              desc: 'Comprendiamo a fondo le tue esigenze, obiettivi e il tuo pubblico target.'
            }, {
              icon: Code2,
              title: '2. Sviluppo',
              desc: 'Creiamo la soluzione perfetta con le tecnologie più adatte al tuo progetto.'
            }, {
              icon: Sparkles,
              title: '3. Design',
              desc: 'Realizziamo interfacce intuitive che trasformano visitatori in clienti.'
            }, {
              icon: Rocket,
              title: '4. Launch',
              desc: 'Lanciamo il tuo progetto e monitoriamo le performance per ottimizzare i risultati.'
            }].map((step, idx) => (
              <div key={idx} className="group relative">
                <div className="bg-gradient-to-br from-[#F5F5F7] to-white dark:from-[#1A1A1A] dark:to-[#0F0F0F] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-transparent hover:border-[#007AFF]/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#007AFF]/20 to-[#007AFF]/5 rounded-2xl flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-[#007AFF]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0F0F0F] dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#007AFF]/50 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-32 bg-[#F5F5F7] dark:bg-[#1A1A1A] transition-colors relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#007AFF] to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-[#0F0F0F] dark:text-white mb-6">
              Portfolio
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Alcuni dei progetti che abbiamo realizzato con passione e dedizione
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3, 4, 5, 6].map((item, idx) => (
              <div
                key={item}
                className="group relative aspect-[4/3] bg-gradient-to-br from-[#F5F5F7] to-white dark:from-[#1A1A1A] dark:to-[#0F0F0F] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border border-transparent hover:border-[#007AFF]/30"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/10 to-transparent flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-white dark:bg-[#1A1A1A] rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Code2 className="w-10 h-10 text-[#007AFF]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#0F0F0F] dark:text-white">
                      Progetto {item}
                    </h3>
                  </div>
                </div>
                <div className="absolute inset-0 bg-[#007AFF] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="group inline-flex items-center space-x-2 bg-[#0F0F0F] dark:bg-white text-white dark:text-[#0F0F0F] px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <span>Guarda tutti i progetti</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section
        id="testimonianze"
        className="py-32 bg-white dark:bg-[#0F0F0F] transition-colors relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#007AFF] to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-[#0F0F0F] dark:text-white mb-6">
              Cosa dicono di noi
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              La soddisfazione dei nostri clienti è la nostra migliore pubblicità
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[{
              name: 'Maria Lombardi',
              role: 'CEO, TechStart Italia',
              text: 'NovaWeb ha trasformato completamente la nostra presenza online. Il sito è veloce, bellissimo e ha aumentato le conversioni del 250%.'
            }, {
              name: 'Alessandro Conti',
              role: 'Founder, Digital Boutique',
              text: 'Professionalità eccezionale. Hanno capito esattamente cosa volevamo e lo hanno realizzato superando ogni aspettativa.'
            }, {
              name: 'Sofia Ferrari',
              role: 'Marketing Director, StyleCo',
              text: 'Il livello di attenzione ai dettagli è impressionante. Ogni elemento è curato alla perfezione. Altamente raccomandati!'
            }].map((testimonial, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-[#F5F5F7] to-white dark:from-[#1A1A1A] dark:to-[#0F0F0F] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-[#007AFF] fill-[#007AFF]" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#007AFF] to-[#0051D5] rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-[#0F0F0F] dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contatti"
        className="py-32 bg-gradient-to-br from-[#F5F5F7] via-white to-[#F5F5F7] dark:from-[#1A1A1A] dark:via-[#0F0F0F] dark:to-[#1A1A1A] transition-colors relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#007AFF]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-white/40 dark:bg-[#0F0F0F]/40 backdrop-blur-2xl rounded-[3rem] p-12 md:p-20 shadow-2xl border border-white/20 dark:border-gray-800/20">
            <h2 className="text-5xl md:text-7xl font-bold text-[#0F0F0F] dark:text-white mb-8">
              Innoviamo insieme.
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              Hai un'idea brillante? Parliamone. Trasformiamo la tua visione in
              realtà digitale.
            </p>
            <button className="group inline-flex items-center space-x-2 bg-[#007AFF] hover:bg-[#0051D5] text-white px-10 py-5 rounded-full text-lg font-medium transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              <span>Prenota una call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-white dark:bg-[#0F0F0F] border-t border-gray-200 dark:border-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Code2 className="w-6 h-6 text-[#007AFF]" />
              <span className="text-lg font-semibold text-[#0F0F0F] dark:text-white">
                NovaWeb
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2024 NovaWeb. Innovazione digitale made in Italy.
            </p>

            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Github className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
