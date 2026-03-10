import { ArrowRight, Zap, Shield, Star } from "lucide-react";
import { motion } from "framer-motion";
console.log(motion) // somente para remover o erro de variável não utilizada

// Components
import HeroCards from "./HeroCards";

const Hero = () => {

    const heroCards = [
      {
        icon: 1,
        label: "Velocidade",
        text: "Desempenho garantido 24h por dia, 7 dias por semana.",
      },
      {
        icon: 2,
        label: "Segurança",
        text: "Equipes de segurança digital presentes em tempo integral garantindo a confiabilidade das transações.",
      },
      {
        icon: 3,
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
              Acelere sua presença online com uma landing{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-violet-300">
                simples e eficaz
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-4 text-slate-300 max-w-2xl"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-8 flex flex-row gap-3"
            >
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-fuchsia-600 px-6 py-3 font-medium hover:bg-fuchsia-700 transition"
              >
                Comece agora <ArrowRight className="size-4" />
              </a>
              <a
                href="#"
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
                <HeroCards key={card.icon} icon={card.icon} label={card.label} text={card.text} />
              ))}
              
            </motion.div>
          </div>
        </section>
      </>
    );
}

export default Hero;