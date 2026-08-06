const steps = [
  {
    number: "01",
    title: "Choose a Practice Mode",
    description:
      "Select Pronunciation Practice, Vocabulary Training, or Mock Interview.",
  },
  {
    number: "02",
    title: "Speak Naturally",
    description:
      "Read the paragraph or answer the interview question using your microphone.",
  },
  {
    number: "03",
    title: "AI Analysis",
    description:
      "FluentX analyzes pronunciation, grammar, fluency and confidence.",
  },
  {
    number: "04",
    title: "Improve Daily",
    description:
      "Track your Communication Index and become placement ready.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#020617] py-32">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <span className="text-blue-400 uppercase tracking-[4px]">
            HOW IT WORKS
          </span>

          <h2 className="text-5xl font-black mt-5">
            Learn in 4 Simple Steps
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-20">

          {steps.map((step) => (

            <div
              key={step.number}
              className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 hover:border-blue-500 transition duration-500 hover:-translate-y-2"
            >

              <h1 className="text-6xl font-black text-blue-500/20">

                {step.number}

              </h1>

              <h3 className="text-2xl font-bold mt-6">

                {step.title}

              </h3>

              <p className="text-slate-400 mt-5 leading-8">

                {step.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default HowItWorks;