import { ArrowRight, Zap, Shield, Star } from "lucide-react";
import { motion } from "framer-motion";


// Components
import HeroCards from "./HeroCards";

const Hero = () => {

    const heroCards = [
      {
        id: 1,
        icon: <Zap className="size-5 text-emerald-400" />,
        label: "Velocidade",
        text: "Desempenho garantido 24h por dia, 7 dias por semana.",
      },
      {
        id: 2,
        icon: <Shield className="size-5 text-sky-400" />,
        label: "Segurança",
        text: "Equipes de segurança digital presentes em tempo integral garantindo a confiabilidade das transações.",
      },
      {
        id: 3,
        icon: <Star className="size-5 text-amber-400" />,
        label: "Conversão",
        text: "As taxas de conversão de dados são superiores a qualquer outro software no mercado.",
      },
    ];

    return (
      <>
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 py-20 relative">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl font-extrabold"
            >
              Aumente a performance de seu negócio com o{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-green-300">
                sistema da GTEC!
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-4 text-slate-300 max-w-4xl"
            >
              Nosso SaaS se integra perfeitamente em qualquer infraestrutura, providenciando maior controle sobre todos os setores de sua empresa com um dashboard completo e intuitivo. Cadastre clientes e produtos, gerencie seu departamento financeiro, emita notas fiscais e tenha um controle de estoque robusto.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-8 flex flex-row gap-3"
            >
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-800 px-6 py-3 font-medium hover:bg-sky-600 transition"
              >
                Comece agora <ArrowRight className="size-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 font-medium border border-white/10 hover:bg-white/5 transition"
              >
                Ver Recursos
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-14 grid grid-cols-3 gap-4"
            >

              {heroCards.map((card) => (
                <HeroCards key={card.id} icon={card.icon} label={card.label} text={card.text} />
              ))}
              
            </motion.div>
          </div>
        </section>
      </>
    );
}

export default Hero;