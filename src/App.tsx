import React from 'react';
import { motion } from 'motion/react';
import { 
  MessageCircle, 
  CheckCircle2, 
  Leaf, 
  Sparkles, 
  Zap, 
  Droplets, 
  Star, 
  MapPin, 
  Clock, 
  Phone,
  ShieldCheck,
  Award,
  Users
} from 'lucide-react';

export default function App() {
  const whatsappNumber = "5563999999999"; // Placeholder number
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de falar com um especialista sobre suplementos personalizados.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-whatsapp/30 transition-transform hover:scale-110 hover:bg-whatsapp-hover"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={32} />
      </a>

      {/* Header / Logo Area (Minimalist) */}
      <header className="absolute top-0 left-0 right-0 z-10 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center md:justify-start">
            <div className="flex items-center gap-2 text-2xl font-bold tracking-tight text-brand-blue">
              <Droplets className="h-8 w-8 text-brand-light" />
              <span>Pharmapele <span className="font-light text-brand-light">Palmas</span></span>
            </div>
          </div>
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-white pt-20">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-blue-50 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-80 w-80 rounded-full bg-blue-100 opacity-50 blur-3xl"></div>

        <div className="container relative mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-brand-light">
                <Sparkles size={16} />
                <span>Bem-estar e Beleza sob medida</span>
              </div>
              <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-brand-blue md:text-5xl lg:text-6xl">
                Suplementos Personalizados para sua Rotina de <span className="text-brand-light">Bem-Estar</span>
              </h1>
              <p className="mb-8 max-w-xl text-lg text-slate-600 md:text-xl">
                Descubra o poder da personalização com fórmulas exclusivas criadas especificamente para os seus objetivos de beleza, nutrição e vitalidade.
              </p>
              
              <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-8 py-4 text-lg font-bold text-white shadow-lg shadow-whatsapp/20 transition-all hover:-translate-y-1 hover:bg-whatsapp-hover hover:shadow-xl"
                >
                  <MessageCircle size={24} />
                  Falar com Especialista
                </a>
              </div>
              
              <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/face${i}/100/100`} alt="Cliente" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <span>Mais de 1.000 clientes satisfeitos em Palmas</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto w-full max-w-md lg:max-w-none"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl bg-blue-50/50">
                <img 
                  src="/hero-woman.png" 
                  alt="Mulher saudável sorrindo" 
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-brand-blue/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="mb-2 inline-block rounded-lg bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-md">
                    Qualidade Premium
                  </div>
                  <p className="text-xl font-semibold text-white">Sua melhor versão começa de dentro para fora.</p>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -right-6 top-1/4 hidden rounded-2xl bg-white p-4 shadow-xl md:block animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-brand-light">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Fórmulas</p>
                    <p className="text-xs text-slate-500">100% Personalizadas</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PROVA DE AUTORIDADE */}
      <section className="bg-brand-blue py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="flex flex-col items-center p-4">
              <Award className="mb-4 h-12 w-12 text-blue-300" />
              <h3 className="mb-2 text-2xl font-bold">Referência Nacional</h3>
              <p className="text-blue-100">Excelência reconhecida em fórmulas personalizadas para beleza e bem-estar.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <ShieldCheck className="mb-4 h-12 w-12 text-blue-300" />
              <h3 className="mb-2 text-2xl font-bold">Rigoroso Controle</h3>
              <p className="text-blue-100">Matérias-primas de altíssima qualidade com laudos de pureza e eficácia.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <Users className="mb-4 h-12 w-12 text-blue-300" />
              <h3 className="mb-2 text-2xl font-bold">Especialistas</h3>
              <p className="text-blue-100">Equipe altamente qualificada para orientar suas escolhas nutricionais.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENEFÍCIOS */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-brand-blue md:text-4xl">Por que escolher a Pharmapele?</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Nossa abordagem foca na sua individualidade. Entregamos soluções práticas e eficientes para a sua rotina de cuidados.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <MessageCircle className="h-8 w-8 text-brand-light" />,
                title: "Atendimento Personalizado",
                desc: "Entendemos suas necessidades únicas para sugerir as melhores opções de suplementação."
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-brand-light" />,
                title: "Qualidade das Matérias-Primas",
                desc: "Trabalhamos apenas com ativos premium, garantindo máxima absorção e resultados."
              },
              {
                icon: <Zap className="h-8 w-8 text-brand-light" />,
                title: "Praticidade no Dia a Dia",
                desc: "Fórmulas combinadas em sachês, gomas ou cápsulas para facilitar sua rotina."
              },
              {
                icon: <Users className="h-8 w-8 text-brand-light" />,
                title: "Especialistas em Nutrição",
                desc: "Suporte contínuo de profissionais focados no seu bem-estar e beleza."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="group rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 border border-slate-100">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blue-50 transition-colors group-hover:bg-brand-light group-hover:text-white">
                  {React.cloneElement(benefit.icon, { className: 'h-8 w-8 transition-colors group-hover:text-white text-brand-light' })}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CATEGORIAS POPULARES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-brand-blue md:text-4xl">Soluções para sua Rotina</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Conheça nossas principais categorias de produtos focados em realçar sua beleza natural e otimizar sua vitalidade.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Suplementos Nutricionais", icon: <Leaf />, img: "nutrition" },
              { title: "Colágeno e Beleza", icon: <Sparkles />, img: "beauty" },
              { title: "Vitaminas Personalizadas", icon: <Droplets />, img: "vitamins" },
              { title: "Energia e Performance", icon: <Zap />, img: "energy" },
              { title: "Dermocosméticos", icon: <CheckCircle2 />, img: "skincare" },
            ].map((cat, idx) => (
              <div key={idx} className={`group relative overflow-hidden rounded-2xl ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="aspect-[4/3] w-full">
                  <img 
                    src={`https://picsum.photos/seed/${cat.img}/600/400`} 
                    alt={cat.title} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-brand-light"
            >
              Consultar Catálogo Completo
            </a>
          </div>
        </div>
      </section>

      {/* 5. DEPOIMENTOS */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-brand-blue md:text-4xl">O que dizem nossos clientes</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              A satisfação de quem já transformou sua rotina com a Pharmapele Palmas.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Mariana Silva",
                text: "O atendimento é impecável! Fizeram um suplemento de colágeno e vitaminas exatamente para o que eu precisava. Minha pele e disposição mudaram completamente.",
                role: "Cliente há 1 ano"
              },
              {
                name: "Carlos Eduardo",
                text: "A praticidade de ter todas as minhas vitaminas em um único sachê diário facilitou muito minha rotina corrida. Recomendo de olhos fechados a qualidade da Pharmapele.",
                role: "Cliente há 6 meses"
              },
              {
                name: "Juliana Costa",
                text: "Os dermocosméticos manipulados são maravilhosos. A equipe me orientou super bem e os resultados apareceram nas primeiras semanas de uso.",
                role: "Cliente há 2 anos"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="rounded-2xl bg-white p-8 shadow-sm relative">
                <div className="absolute -top-5 left-8 text-6xl text-blue-200 font-serif">"</div>
                <div className="mb-4 flex text-amber-400 mt-2">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="mb-6 text-slate-700 italic relative z-10">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden bg-slate-200">
                    <img src={`https://picsum.photos/seed/user${idx}/100/100`} alt={testimonial.name} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA FINAL */}
      <section className="relative overflow-hidden bg-brand-blue py-24 text-white">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="container relative mx-auto px-4 text-center md:px-6">
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Pronto para transformar sua rotina de cuidados?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-blue-100">
            Fale agora com um de nossos especialistas e descubra a fórmula perfeita para os seus objetivos de beleza e bem-estar.
          </p>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-whatsapp px-10 py-5 text-xl font-bold text-white shadow-2xl shadow-whatsapp/30 transition-all hover:-translate-y-1 hover:bg-whatsapp-hover hover:scale-105"
          >
            <MessageCircle size={28} />
            Falar com Especialista no WhatsApp
          </a>
          <p className="mt-6 text-sm text-blue-200">Atendimento rápido e personalizado. Sem compromisso.</p>
        </div>
      </section>

      {/* 7. SEÇÃO DE LOCALIZAÇÃO & FOOTER */}
      <footer className="bg-slate-900 py-16 text-slate-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="mb-6 flex items-center gap-2 text-2xl font-bold text-white">
                <Droplets className="h-8 w-8 text-brand-light" />
                <span>Pharmapele <span className="font-light">Palmas</span></span>
              </div>
              <p className="mb-6 max-w-md text-slate-400">
                Sua referência em fórmulas personalizadas para bem-estar, nutrição e beleza no Tocantins. Qualidade e inovação em cada detalhe.
              </p>
            </div>
            
            <div>
              <h4 className="mb-6 text-lg font-bold text-white">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-light" />
                  <span>Av. Teotônio Segurado, Quadra 201 Sul<br/>Palmas - TO, 77015-200</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-brand-light" />
                  <span>(63) 99999-9999</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="mb-6 text-lg font-bold text-white">Horário de Atendimento</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-brand-light" />
                  <div>
                    <p className="font-medium text-white">Segunda a Sexta</p>
                    <p className="text-slate-400">08:00 às 18:00</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-brand-light" />
                  <div>
                    <p className="font-medium text-white">Sábado</p>
                    <p className="text-slate-400">08:00 às 12:00</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Pharmapele Palmas. Todos os direitos reservados.</p>
            <p className="mt-2">Esta é uma página focada em suplementos nutricionais e cosméticos. Não comercializamos medicamentos sujeitos a prescrição médica por este canal.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
