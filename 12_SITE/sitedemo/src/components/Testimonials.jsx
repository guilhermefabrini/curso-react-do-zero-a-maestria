import { Star } from "lucide-react";

// Componentes
import TestimonialsCards from "./TestimonialsCards";

const Testimonials = () => {

    const testimonials = [
      {
        id: 1,
        text: "Adorei! O app atendeu todas as necessidades da nossa organização.",
        name: "- Victor Santos",
      },
      {
        id: 2,
        text: "A integração ocorreu muito bem e o suporte é excelente. Estamos muito satisfeitos!",
        name: "- Julia Goulart",
      },
      {
        id: 3,
        text: "Não tivemos nenhum problema desde a implementação até o uso em produção.",
        name: "- Arthur Cunha",
      },
    ];

    return (
      <>
        <section id="testimonials" className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="text-3xl font-bold">Quem usou, aprovou</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((card) => (
                <TestimonialsCards key={card.id} text={card.text} name={card.name}/>
            ))}
          </div>
        </section>
      </>
    );
}

export default Testimonials;