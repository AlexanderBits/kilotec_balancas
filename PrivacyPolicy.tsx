import React, { useEffect } from 'react';
import { ChevronLeft, ShieldCheck } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      {/* Header */}
      <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
            <ChevronLeft className="w-5 h-5" />
            <span className="font-bold">Voltar para o Site</span>
          </a>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
              K
            </div>
            <span className="text-lg font-heading font-extrabold tracking-tight text-primary">
              KILOTEC
            </span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 pt-12 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 p-8 md:p-16 border border-slate-100"
        >
          <div className="flex items-center gap-3 text-primary mb-8">
            <ShieldCheck className="w-8 h-8" />
            <h1 className="text-3xl md:text-4xl font-heading font-extrabold">Política de Privacidade</h1>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 leading-relaxed text-slate-600">
            <p className="text-lg font-medium text-slate-800 italic">
              A Kilotec Balanças, com sede em Av. Joaquim da Costa Lima, 2011 - Santa Amélia, Belford Roxo - RJ, valoriza a privacidade de seus usuários e clientes.
            </p>

            <p>
              Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações ao utilizar nosso site e serviços de manutenção e venda de balanças.
            </p>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">1</span>
                Coleta de Informações
              </h2>
              <p>
                Coletamos informações básicas fornecidas voluntariamente por você através de nossos canais de atendimento (formulários de contato, e-mail ou botões de redirecionamento para WhatsApp), tais como:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Nome completo;</li>
                <li>Número de telefone/WhatsApp;</li>
                <li>Endereço de e-mail;</li>
                <li>Informações sobre o equipamento para orçamento.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">2</span>
                Finalidade do Tratamento de Dados
              </h2>
              <p>Os dados coletados são utilizados exclusivamente para:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Responder a solicitações de orçamentos e dúvidas técnicas;</li>
                <li>Agendamento de serviços de manutenção e calibração;</li>
                <li>Emissão de documentos fiscais e comprovantes de serviço;</li>
                <li>Comunicação sobre o status de ordens de serviço.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">3</span>
                Compartilhamento de Dados
              </h2>
              <p>
                A Kilotec Balanças não vende ou aluga seus dados pessoais a terceiros. As informações podem ser compartilhadas apenas:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Com autoridades judiciais ou órgãos reguladores (como o INMETRO), quando exigido por lei;</li>
                <li>Com prestadores de serviços de tecnologia que sustentam a operação do nosso site e comunicações.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">4</span>
                Security das Informações
              </h2>
              <p>
                Implementamos medidas técnicas para proteger seus dados contra acessos não autorizados e situações acidentais ou ilícitas de destruição, perda ou alteração.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">5</span>
                Seus Direitos (LGPD)
              </h2>
              <p>De acordo com a Lei Geral de Proteção de Dados, você tem o direito de:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Confirmar a existência do tratamento de seus dados;</li>
                <li>Acessar, corrigir ou excluir seus dados de nossa base;</li>
                <li>Revogar o consentimento para comunicações futuras.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">6</span>
                Cookies
              </h2>
              <p>
                Nosso site pode utilizar cookies para melhorar a experiência do usuário e analisar o tráfego de forma anônima. Você pode gerenciar as preferências de cookies diretamente no seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm">7</span>
                Contato
              </h2>
              <p>
                Para dúvidas sobre esta política ou para exercer seus direitos, entre em contato conosco através do WhatsApp informado no site.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Necesary imports from App components context
import { motion } from 'framer-motion';

export default PrivacyPolicy;
