import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ChevronRight, 
  CheckCircle2, 
  Wrench, 
  ShieldCheck, 
  Scale,
  Menu,
  X,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import PrivacyPolicy from './PrivacyPolicy';

const KilotecApp: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy'>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (currentPage === 'privacy') {
    return (
      <div onClick={(e) => {
        const target = e.target as HTMLElement;
        if (target.closest('a[href="/"]')) {
          e.preventDefault();
          setCurrentPage('home');
        }
      }}>
        <PrivacyPolicy />
      </div>
    );
  }

  const primaryColor = "#3F3F96"; // Royal Blue from logo
  const whatsappUrl = "https://wa.me/5521964089358?text=Ol%C3%A1%2C%20encontrei%20a%20emrpesa%20pelo%20site%20de%20voc%C3%AAs.%20Preciso%20de%20manuten%C3%A7%C3%A3o%20em%20uma%20balan%C3%A7a.";


  const services = [
    {
      title: "Conserto de Balança Digital",
      desc: "Manutenção de balança digital e eletrônica de bancada. Assistência técnica para balanças Toledo, Filizola, Urano, Ramuza e outras marcas líderes.",
      icon: <Scale className="w-6 h-6" />
    },
    {
      title: "Manutenção de Balanças Industriais",
      desc: "Reparo especializado em plataformas de grande porte e manutenção em balança rodoviária. Calibração garantida por técnicos credenciados.",
      icon: <Wrench className="w-6 h-6" />
    },
    {
      title: "Calibração e Certificação",
      desc: "Empresa de calibração de balanças autorizada. Emissão de certificados exigidos pelos órgãos reguladores e garantia de precisão total.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
              K
            </div>
            <span className={`text-xl font-heading font-extrabold tracking-tight ${isScrolled ? 'text-primary' : 'text-primary'}`}>
              KILOTEC <span className="font-light">BALANÇAS</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Início', 'Serviços', 'Sobre', 'Localização'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-sm font-bold transition-colors ${isScrolled ? 'text-slate-700 hover:text-primary' : 'text-white hover:text-blue-200'}`}
              >
                {item}
              </a>
            ))}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg hover:shadow-primary/20"
            >
              <MessageCircle className="w-4 h-4" /> Orçamento
            </a>
          </div>

          <button className="md:hidden text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="início" className="relative h-[85vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Placeholder para a foto da fachada: fachada.jpg */}
          <img 
            src="/assets/fachada.jpg.png" 
            alt="Fachada Kilotec" 
            className="w-full h-full object-cover object-bottom brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-primary px-4 py-1.5 rounded-full mb-6 text-white text-xs font-black tracking-widest uppercase shadow-lg shadow-primary/20">
              <ShieldCheck className="w-4 h-4" /> Autorizada IPEM/INMETRO
            </div>
            <h1 className="text-5xl md:text-8xl font-heading font-extrabold text-white leading-[0.9] mb-6 tracking-tighter">
              <span className="text-primary-foreground">KILOTEC</span> <br/>
              <span className="font-light text-4xl md:text-6xl block mt-2">CONSERTO DE BALANÇAS</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed font-light max-w-xl">
              Referência em <strong>manutenção de balanças industriais</strong> e <strong>conserto de balança digital</strong> na Baixada Fluminense. Assistência técnica autorizada com precisão certificada pelo IPEM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-primary/30">
                <MessageCircle className="w-6 h-6" /> CHAMAR NO WHATSAPP
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="serviços" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black text-primary tracking-[0.3em] uppercase mb-4">Especialidades</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-950">
                Manutenção Completa: <br/> Da Bancada à Indústria
              </h3>
            </div>
            <p className="text-slate-500 italic max-w-xs border-l-4 border-primary pl-4">
              "Trabalhamos com marcas líderes como Urano, Filizola e Toledo, garantindo o selo de conformidade."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <div key={idx} className="group relative transition-all">
                <div className="absolute -inset-2 bg-slate-50 rounded-[2rem] scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all"></div>
                <div className="relative p-6">
                  <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:bg-primary transition-colors">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-slate-950 mb-4">{service.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Work Gallery - Based on User Photos */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-center text-3xl md:text-5xl font-heading font-extrabold mb-4">
              Fotos Reais do Nosso <span className="text-primary italic">Trabalho</span>
            </h2>
            <p className="text-center text-slate-400 font-light italic">Equipamentos aferidos e prontos para operação.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Foto 1 & 2: Plataformas Industriais */}
            <div className="aspect-square bg-slate-900 rounded-3xl overflow-hidden border border-white/5 group relative">
                <img src="/assets/balanca_pesos.jpg" alt="Manutenção de balanças industriais com pesos padrão" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-bold text-sm">Pesos Padrão</p>
                    <p className="text-xs text-primary">Calibração e Manutenção de Balanças</p>
                </div>
            </div>

            {/* Foto 3: Urano */}
            <div className="aspect-square bg-slate-900 rounded-3xl overflow-hidden border border-white/5 group relative">
                <img src="/assets/balanca_urano.jpg.png" alt="Conserto de balança digital Urano - Assistência Técnica" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-bold text-sm">Balança de Precisão</p>
                    <p className="text-xs text-primary">Manutenção Balança Urano</p>
                </div>
            </div>

            {/* Foto 4: Pop-Z */}
            <div className="aspect-square bg-slate-900 rounded-3xl overflow-hidden border border-white/5 group relative">
                <img src="/assets/balanca_popz.jpg.jpg" alt="Conserto balança digital Pop-Z - Manutenção eletrônica" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-bold text-sm">Balança Comercial</p>
                    <p className="text-xs text-primary">Conserto de Balança Eletrônica</p>
                </div>
            </div>

            {/* Foto 5: Grande Porte */}
            <div className="aspect-square bg-slate-900 rounded-3xl overflow-hidden border border-white/5 group relative">
                <img src="/assets/balanca_industrial.jpg.jpg" alt="Reparo de balanças industriais de grande porte" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-bold text-sm">Grande Porte</p>
                    <p className="text-xs text-primary">Manutenção Técnica Industrial</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Keyword Rich Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-extrabold text-slate-950 mb-8">
              Especialistas em <span className="text-primary italic">Manutenção e Calibração</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 text-left text-sm text-slate-600">
              <div className="space-y-2">
                <p>• Conserto de balança digital</p>
                <p>• Manutenção balança Toledo</p>
                <p>• Assistência técnica Filizola</p>
                <p>• Reparo de balança Urano / Ramuza</p>
              </div>
              <div className="space-y-2">
                <p>• Manutenção de balança industrial</p>
                <p>• Calibração de balança rodoviária</p>
                <p>• Conserto de balança eletrônica</p>
                <p>• Técnico de balanças certificado</p>
              </div>
              <div className="space-y-2">
                <p>• Assistência técnica Belford Roxo</p>
                <p>• Manutenção na Baixada Fluminense</p>
                <p>• Empresa de calibração credenciada</p>
                <p>• Reparo de balanças de precisão</p>
              </div>
            </div>
            <p className="mt-12 text-slate-500 text-sm leading-relaxed italic">
              A Kilotec Balanças é a sua melhor escolha para <strong>conserto de balanças</strong> e <strong>manutenção preventiva</strong>. Atendemos com excelência técnica marcas como Toledo, Filizola, Ramuza e Urano, garantindo que sua balança digital ou industrial esteja sempre de acordo com as normas do INMETRO. Seja para balanças rodoviárias, comerciais ou de laboratório, nossa equipe está pronta para oferecer a melhor assistência técnica do Rio de Janeiro.
            </p>
          </div>
        </div>
      </section>

      {/* Google My Business Section */}
      <section id="localização" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-200">
            <div className="flex flex-col lg:flex-row">
              {/* Google Map Embed */}
              <div className="flex-1 min-h-[500px] relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1840.6863795511!2d-43.3768285!3d-22.6773531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99650059c6b6b7%3A0x67319c50c05db6cb!2sAv.%20Joaquim%20da%20Costa%20Lima%2C%202011%20-%20Santa%20Am%C3%A9lia%2C%20Belford%20Roxo%20-%20RJ%2C%2026115-315!5e0!3m2!1spt-BR!2sbr!4v1710500000000!5m2!1spt-BR!2sbr" 
                  className="absolute inset-0 w-full h-full border-0 grayscale"
                  allowFullScreen
                  loading="lazy" 
                ></iframe>
              </div>

              {/* Info Sidebar */}
              <div className="lg:w-[480px] p-12 flex flex-col justify-center bg-slate-950 text-white">
                <h3 className="text-4xl font-heading font-extrabold mb-8 italic text-primary">
                  Venha Até Nós
                </h3>
                
                <div className="space-y-10">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 border border-primary/20">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-200 mb-1">Endereço Oficial</h4>
                      <p className="text-slate-400 leading-relaxed text-sm">
                        Av. Joaquim da Costa Lima, 2011<br/>
                        Santa Amélia, Belford Roxo - RJ
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 border border-primary/20">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-200 mb-1">Telefones</h4>
                      <p className="text-slate-400 text-sm">(21) 3771-8393</p>
                      <p className="text-primary text-lg font-black mt-1">(21) 96408-9358</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-primary hover:bg-blue-700 text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 transition-all shadow-lg shadow-primary/20"
                    >
                       FALAR COM O RONIL <ExternalLink className="w-5 h-5" />
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-12 mb-12">
            <div className="text-center md:text-left">
              <div className="text-2xl font-black italic mb-2 tracking-tighter">KILOTEC BALANÇAS</div>
              <p className="text-slate-400 text-sm italic font-light">Especialistas em Balanças Eletrônicas desde 1999.</p>
            </div>
            <div className="flex gap-6">
              <a href="#início" className="text-sm text-slate-400 hover:text-white transition-colors uppercase tracking-widest font-bold text-[10px]">Início</a>
              <a href="#serviços" className="text-sm text-slate-400 hover:text-white transition-colors uppercase tracking-widest font-bold text-[10px]">Serviços</a>
              <button 
                onClick={() => {
                  setCurrentPage('privacy');
                  window.scrollTo(0, 0);
                }}
                className="text-sm text-slate-400 hover:text-white transition-colors uppercase tracking-widest font-bold text-[10px]"
              >
                Privacidade
              </button>
              <a href="#localização" className="text-sm text-slate-400 hover:text-white transition-colors uppercase tracking-widest font-bold text-[10px]">Contato</a>
            </div>
          </div>
          <div className="text-center text-slate-500 text-xs space-y-4">
            <p>© 2024 Kilotec Balanças. Todos os direitos reservados.</p>
            <a 
              href="https://desenvolvimentodesites.dev.br/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block font-light hover:text-white transition-colors group"
            >
              Desenvolvido por <span className="text-primary font-bold group-hover:text-blue-400 transition-colors">Alexis Marketing & Dev</span> 
              <span className="mx-2">•</span> 
              Construído em <span className="italic font-bold">Models next-gen React-Starter</span>
            </a>
            <p className="text-[10px] opacity-50">Baixada Fluminense, Rio de Janeiro.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all flex items-center justify-center group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap group-hover:mr-2">
          Suporte Kilotec
        </span>
        <img src="/assets/whatsapp_icon.png" alt="WhatsApp" className="w-10 h-10 object-contain" />
      </motion.a>
    </div>
  );
};

export default KilotecApp;