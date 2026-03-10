import { Shield, Star, Zap } from "lucide-react";

const HeroCards = ({icon, label, text}) => {
    return (
      <div
        key={label}
        className="rounded-2xl border border-white/10 bg-white[0.02] p-6"
      >
        <div className="flex items-center gap-3">
          {icon == 0 && <Zap className="size-5 text-emerald-400" />}
          {icon == 1 && <Shield className="size-5 text-sky-400" />}
          {icon == 2 && <Star className="size-5 text-amber-400" />}
          <div className="font-semibold">{label}</div>
        </div>
        <p className="text-sm text-slate-400 mt-2">
          {text}
        </p>
      </div>
    );
}

export default HeroCards;