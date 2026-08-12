import FloatingWords from "./FloatingWords";

const skills = [
  { title: "Pronunciation", value: 95 },
  { title: "Grammar", value: 92 },
  { title: "Vocabulary", value: 90 },
  { title: "Confidence", value: 89 },
];

const stats = [
  { value: "20K+", label: "Practice Sessions" },
  { value: "95%", label: "Accuracy" },
  { value: "24/7", label: "AI Coach" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] text-white flex items-center">

      {/* Floating Background Words */}
      <FloatingWords />

      {/* Glow Effects */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[180px]" />

      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-purple-500/20 blur-[180px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <div>

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-blue-400 font-medium backdrop-blur">

            🚀 AI Communication Coach

          </div>

          <h1 className="mt-8 text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05]">

            Master
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
              Communication.
            </span>

            Land Your
            <span className="block text-white">
              Dream Job.
            </span>

          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-slate-400">

            Practice pronunciation, improve grammar,
            boost confidence and receive AI-powered
            communication feedback in real time.

          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <button className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold shadow-lg shadow-blue-600/20 transition hover:scale-105">

              Start Practicing

            </button>

            <button className="rounded-xl border border-slate-700 px-8 py-4 font-semibold transition hover:border-blue-500 hover:bg-white/5">

              Watch Demo

            </button>

          </div>

          <div className="grid grid-cols-3 gap-8 mt-16">

            {stats.map((item) => (

              <div key={item.label}>

                <h3 className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">

                  {item.value}

                </h3>

                <p className="mt-2 text-slate-400">

                  {item.label}

                </p>

              </div>

            ))}

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">
          <div className="rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl">

            <div className="flex items-start justify-between">

              <div>

                <p className="text-slate-400 text-sm tracking-wide">
                  Communication Index
                </p>

                <h2 className="mt-2 text-7xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  92
                </h2>

                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 text-green-400 text-sm">

                  ▲ +8% This Week

                </div>

              </div>

              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-4xl shadow-lg shadow-blue-500/30">

                🤖

              </div>

            </div>

            <div className="mt-12 space-y-7">

              {skills.map((skill) => (

                <div key={skill.title}>

                  <div className="mb-2 flex justify-between">

                    <span className="text-slate-300">

                      {skill.title}

                    </span>

                    <span className="font-semibold">

                      {skill.value}%

                    </span>

                  </div>

                  <div className="h-3 w-full overflow-hidden rounded-full bg-slate-800">

                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 transition-all duration-700"
                      style={{
                        width: `${skill.value}%`,
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">

                <h4 className="text-2xl font-bold text-blue-400">

                  250+

                </h4>

                <p className="mt-1 text-xs text-slate-400">

                  Mock Interviews

                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">

                <h4 className="text-2xl font-bold text-purple-400">

                  1200+

                </h4>

                <p className="mt-1 text-xs text-slate-400">

                  Practice Hours

                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">

                <h4 className="text-2xl font-bold text-cyan-400">

                  AI

                </h4>

                <p className="mt-1 text-xs text-slate-400">

                  Live Feedback

                </p>

              </div>

            </div>

          </div>

          {/* Floating Card 1 */}

          <div className="absolute -left-8 top-10 rounded-2xl border border-white/10 bg-slate-900/90 p-5 backdrop-blur-xl shadow-xl">

            <p className="text-sm text-slate-400">

              Daily Goal

            </p>

            <h3 className="mt-2 text-3xl font-bold">

              20 min

            </h3>

          </div>

          {/* Floating Card 2 */}

          <div className="absolute -right-8 bottom-10 rounded-2xl border border-white/10 bg-slate-900/90 p-5 backdrop-blur-xl shadow-xl">

            <p className="text-sm text-slate-400">

              Weekly Growth

            </p>

            <h3 className="mt-2 text-3xl font-bold text-green-400">

              +18%

            </h3>

          </div>
          {/* Floating Card 3 */}

          <div className="absolute left-1/2 -translate-x-1/2 -bottom-10 rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-xl px-6 py-4 shadow-xl">

            <div className="flex items-center gap-4">

              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

              <div>

                <p className="text-sm text-slate-400">

                  AI Session Status

                </p>

                <h4 className="font-semibold">

                  Ready to Practice

                </h4>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Gradient */}

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[260px] rounded-full bg-blue-500/20 blur-[180px] pointer-events-none"></div>

      {/* Decorative Rings */}

      <div className="absolute -top-20 right-20 w-64 h-64 rounded-full border border-blue-500/10"></div>

      <div className="absolute -top-28 right-12 w-80 h-80 rounded-full border border-purple-500/10"></div>

      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border border-cyan-500/10"></div>

      {/* Small Floating Dots */}

      <div className="absolute top-32 left-20 w-2 h-2 rounded-full bg-blue-400 animate-ping"></div>

      <div className="absolute bottom-40 right-40 w-2 h-2 rounded-full bg-purple-400 animate-ping"></div>

      {/* Ambient Glow */}

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[150px]"></div>

      </div>

      {/* Noise Overlay */}

      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, white 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

    </section>
  );
}
