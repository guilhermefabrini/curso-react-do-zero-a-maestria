const FeaturesCards = ( { icon, title, desc } ) => {

    return (
      <div
        className="rounded-2xl border border-white/10 bg-white[0.02] p-6"
      >
        <div className="flex items-center gap-3">
          {icon}
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-slate-400 mt-2">{desc}</p>
        </div>
      </div>
    );
}

export default FeaturesCards