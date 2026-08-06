const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_50px_rgba(59,130,246,0.25)]">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

      <div className="relative z-10">

        <div className="text-5xl mb-6">
          {icon}
        </div>

        <h3 className="text-2xl font-bold mb-4">
          {title}
        </h3>

        <p className="text-slate-400 leading-8">
          {description}
        </p>

      </div>

    </div>
  );
};

export default FeatureCard;