import { Sparkles, Star, Zap, Shield } from "lucide-react";

// Componentes
import FeaturesCards from "./FeaturesCards";

const Features = () => {

    const cardsFeatures = [
      {
        title: "Design Responsivo",
        desc: "O aplicativo se adapta a qualquer tamanho de tela. Celular, tablet ou PC, use de onde achar melhor.",
        icon: <Sparkles className="size-5" text-fuchsia-400 />,
      },
      {
        title: "Excelente Escalabilidade",
        desc: "Aplicativo desenvolvido com as melhores tecnologias web para garantir escalabilidade ilimitada.",
        icon: <Sparkles className="size-5" text-amber-400 />,
      },
      {
        title: "Customização sem Limites",
        desc: "Personalize menus, crie formulários e funcionalidades de forma irrestrita.",
        icon: <Sparkles className="size-5" text-emerald-400 />,
      },
      {
        title: "Planos Variados",
        desc: "Escolha o plano que melhor se encaixa no seu orçamento ou use nossa opção gratuita.",
        icon: <Sparkles className="size-5" text-sky-400 />,
      },
      {
        title: "Limites Exclusivos",
        desc: "Os limites de transmissão de dados são exclusivos para cada tipo de demanda.",
        icon: <Sparkles className="size-5" text-fuchsia-400 />,
      },
      {
        title: "Bibliotecas Web",
        desc: "Todas as bibliotecas e frameworks disponíveis no mercado estão disponíveis.",
        icon: <Sparkles className="size-5" text-amber-400 />,
      },
    ];

    return (
      <>
        <section id="features" className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="text-3xl font-bold">Tudo o que você precisa</h2>
          <p className="text-slate-300 mt-2 max-w-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod et
            fugit sequi illum expedita.
          </p>
          <div className="mt-8 grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-4">
            {cardsFeatures.map((card) => (
                <FeaturesCards icon={card.icon} title={card.title} desc={card.desc} />
            ))}
          </div>
        </section>
      </>
    );
}

export default Features;