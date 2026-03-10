import { Star } from "lucide-react";

const TestimonialsCards = ( { text, name } ) => {
    return (
      <blockquote className="rounded-2xl border border-white/10 p-6">
        <div className="flex flex-items-center gap-2 text-amber-400">
            {Array.from({length: 5}).map((_, i) => (
                <Star key={i} className="size-5 fill-current" />
            ))}
        </div>
        <p className="mt-3 text-slate-300">
          {text}
        </p>
        <footer className="mt-3 text-sm text-slate-400">
          {name}
        </footer>
      </blockquote>
    );
}

export default TestimonialsCards