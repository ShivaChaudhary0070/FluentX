const skills = [
  {
    title: "Pronunciation",
    value: 95,
  },
  {
    title: "Grammar",
    value: 92,
  },
  {
    title: "Vocabulary",
    value: 90,
  },
  {
    title: "Confidence",
    value: 89,
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#020617] overflow-hidden flex items-center">

      {/* Background */}

      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[160px] -left-40 top-10"></div>

      <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[160px] -right-40 bottom-0"></div>

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT */}

        <div>

          <div className="inline-block px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400">

            AI Communication Coach

          </div>

          <h1 className="text-7xl lg:text-8xl font-black mt-8 leading-tight">

            Speak Better.

            <span className="block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">

              Get Hired.

            </span>

          </h1>

          <p className="text-slate-400 text-xl mt-8 leading-9 max-w-xl">

            Improve pronunciation, fluency,
            vocabulary and interview confidence
            using AI-powered analysis.

          </p>

          <div className="flex gap-5 mt-12">

            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">

              Start Practicing

            </button>

            <button className="border border-slate-700 px-8 py-4 rounded-xl hover:border-blue-500 transition">

              Learn More

            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[35px] p-8 shadow-2xl">

            <div className="flex justify-between">

              <div>

                <p className="text-slate-400">

                  Communication Index

                </p>

                <h2 className="text-7xl font-black text-blue-500 mt-3">

                  92

                </h2>

                <p className="text-green-400 mt-2">

                  ▲ +8 this week

                </p>

              </div>

              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-4xl">

                🤖

              </div>

            </div>

            <div className="space-y-6 mt-10">

              {skills.map((skill) => (

                <div key={skill.title}>

                  <div className="flex justify-between mb-2">

                    <span>{skill.title}</span>

                    <span>{skill.value}%</span>

                  </div>

                  <div className="w-full h-3 rounded-full bg-slate-700">

                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      style={{
                        width: `${skill.value}%`,
                      }}
                    ></div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Floating Card */}

          <div className="absolute -left-10 top-10 bg-slate-900 border border-white/10 rounded-2xl p-5 shadow-xl">

            <p className="text-sm text-slate-400">

              Daily Goal

            </p>

            <h3 className="text-2xl font-bold mt-2">

              20 min

            </h3>

          </div>

          <div className="absolute -right-10 bottom-10 bg-slate-900 border border-white/10 rounded-2xl p-5 shadow-xl">

            <p className="text-sm text-slate-400">

              Weekly Progress

            </p>

            <h3 className="text-2xl font-bold text-green-400 mt-2">

              +18%

            </h3>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;