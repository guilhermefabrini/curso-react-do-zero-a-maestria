import { Check, Clock1 } from "lucide-react";

const Pricing = () => {
    return (
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-8 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl font-bold">Plano único, sem complicação</h2>
            <p className="text-slate-300 mt-4 max-w-2xl">
              Confira todos os benefícios do nosso sistema
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="size-4 text-emerald-400" />
                1 milhão de transações gratuitas ao mês
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-emerald-400" /> 
                Três meses de suporte ilimitado
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-emerald-400" /> 
                Implementação totalmente assistida
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
            <div className="text-sm text-slate-400">A partir de</div>
            <div className="text-5xl font-extrabold mt-2">R$ 199,90</div>
            <div className="text-sm text-slate-300 mt-4 flex items-center gap-2">
                <Clock1 className="size-4 text-amber-400" />
                <p>Somente hoje!</p>
            </div>
            <button className="mt-6 cursor-pointer rounded-2xl bg-sky-600 hover:bg-sky-800 px-6 py-3 font-medium" href="#">
                Comprar agora!
            </button>
          </div>
        </div>
      </section>
    );
}

export default Pricing;