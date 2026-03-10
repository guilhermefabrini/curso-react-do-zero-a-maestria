const HeroCards = ({icon, label, text}) => {
    return (
      <div
        key={label}
        className="rounded-2xl border border-white/10 bg-white[0.02] p-6"
      >
        <div className="flex items-center gap-3">
          {icon}
          <div className="font-semibold">{label}</div>
        </div>
        <p className="text-sm text-slate-400 mt-2">
          {text}
        </p>
      </div>
    );
}

export default HeroCards;