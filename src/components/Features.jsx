import FeatureCard from "./FeatureCard";

const Features = () => {

  const features = [

    {
      icon:"🎤",
      title:"Pronunciation Analysis",
      description:"AI listens to your speech and identifies pronunciation mistakes with personalized feedback."
    },

    {
      icon:"💼",
      title:"Mock Interviews",
      description:"Practice HR interview questions and receive AI-generated suggestions to improve your answers."
    },

    {
      icon:"📈",
      title:"Progress Tracking",
      description:"Monitor your Communication Index and visualize your improvement over time."
    }

  ];

  return (

    <section className="bg-[#020617] py-32 px-8">

      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <span className="text-blue-400 uppercase tracking-widest">

            Features

          </span>

          <h2 className="text-5xl font-black mt-4">

            Everything You Need

          </h2>

          <p className="text-slate-400 mt-6 text-xl max-w-2xl mx-auto">

            FluentX combines AI, speech recognition and personalized
            coaching to prepare you for placements.

          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {features.map((feature,index)=>(

            <FeatureCard

              key={index}

              icon={feature.icon}

              title={feature.title}

              description={feature.description}

            />

          ))}

        </div>

      </div>

    </section>

  );

};

export default Features;