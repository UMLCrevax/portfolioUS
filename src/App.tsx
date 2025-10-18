import { useState, useEffect } from 'react';
import { ArrowRight, Code2, Sparkles, Zap, Menu, X, Linkedin, Github } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
                onClick={() => scrollToSection('portfolio')}
                className="text-sm text-[#0F0F0F] dark:text-white hover:text-[#007AFF] transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contatti')}
                className="text-sm text-[#0F0F0F] dark:text-white hover:text-[#007AFF] transition-colors"
              >
                Contatti
              </button>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isDarkMode ? '☀️' : '🌙'}
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
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left text-[#0F0F0F] dark:text-white hover:text-[#007AFF] transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contatti')}
                className="block w-full text-left text-[#0F0F0F] dark:text-white hover:text-[#007AFF] transition-colors"
              >
                Contatti
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#F5F5F7] to-white dark:from-[#0F0F0F] dark:via-[#1A1A1A] dark:to-[#0F0F0F]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#007AFF]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#007AFF]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#0F0F0F] dark:text-white leading-tight tracking-tight">
              Innovazione.
              <br />
              Design.
              <br />
              Performance.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Due giovani sviluppatori, un'unica visione: portare il tuo brand nel
              futuro digitale.
            </p>
            <button
              onClick={() => scrollToSection('chi-siamo')}
              className="group inline-flex items-center space-x-2 bg-[#007AFF] hover:bg-[#0051D5] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>Scopri di più</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-20 relative">
            <div className="relative mx-auto max-w-5xl">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
                <div className="bg-white dark:bg-[#1A1A1A] rounded-2xl shadow-xl p-12">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-[#007AFF]/20 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="chi-siamo"
        className="py-32 bg-white dark:bg-[#0F0F0F] transition-colors"
      >
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
            <div className="group">
              <div className="bg-gradient-to-br from-[#F5F5F7] to-white dark:from-[#1A1A1A] dark:to-[#0F0F0F] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="aspect-square bg-gradient-to-br from-[#007AFF]/20 to-[#007AFF]/5 rounded-2xl mb-6 flex items-center justify-center">
                  <Code2 className="w-24 h-24 text-[#007AFF]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#0F0F0F] dark:text-white mb-3">
                  Marco Rossi
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Full-stack developer con passione per l'architettura software e
                  l'ottimizzazione delle performance. Specializzato in React e
                  Node.js.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-[#F5F5F7] to-white dark:from-[#1A1A1A] dark:to-[#0F0F0F] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="aspect-square bg-gradient-to-br from-[#007AFF]/20 to-[#007AFF]/5 rounded-2xl mb-6 flex items-center justify-center">
                  <Sparkles className="w-24 h-24 text-[#007AFF]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#0F0F0F] dark:text-white mb-3">
                  Luca Bianchi
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  UI/UX designer e frontend developer. Trasformo idee in interfacce
                  eleganti e intuitive con attenzione maniacale ai dettagli.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="servizi"
        className="py-32 bg-[#F5F5F7] dark:bg-[#1A1A1A] transition-colors"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-[#0F0F0F] dark:text-white mb-6">
              Servizi
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Soluzioni complete per portare la tua visione nel mondo digitale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white dark:bg-[#0F0F0F] rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#007AFF] to-[#0051D5] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

            <div className="group bg-white dark:bg-[#0F0F0F] rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#007AFF] to-[#0051D5] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

            <div className="group bg-white dark:bg-[#0F0F0F] rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-[#007AFF] to-[#0051D5] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

      <section id="portfolio" className="py-32 bg-white dark:bg-[#0F0F0F] transition-colors">
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
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group relative aspect-[4/3] bg-gradient-to-br from-[#F5F5F7] to-white dark:from-[#1A1A1A] dark:to-[#0F0F0F] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
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
            <button className="group inline-flex items-center space-x-2 bg-[#0F0F0F] dark:bg-white text-white dark:text-[#0F0F0F] px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
              <span>Guarda tutti i progetti</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
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
