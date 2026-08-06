const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white">

      {/* Navbar */}
      <div className="border-b border-slate-800 p-6 flex justify-between items-center">

        <h1 className="text-3xl font-bold">
          Fluent<span className="text-blue-500">X</span>
        </h1>

        <button className="bg-blue-600 px-5 py-2 rounded-lg">
          Logout
        </button>

      </div>

      <div className="max-w-7xl mx-auto p-8">

        <h2 className="text-5xl font-black">
          Welcome Back 👋
        </h2>

        <p className="text-slate-400 mt-2">
          Ready to improve your communication today?
        </p>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition">

            <h3 className="text-xl font-bold">
              Communication Index
            </h3>

            <h1 className="text-6xl font-black text-blue-500 mt-4">
              89
            </h1>

            <p className="text-green-400 mt-2">
              Excellent Progress
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h3 className="text-xl font-bold">
              Today's Goal
            </h3>

            <p className="mt-6 text-lg">
              Practice for 20 minutes
            </p>

            <div className="w-full h-3 bg-slate-700 rounded-full mt-6">

              <div className="w-2/3 h-3 bg-blue-500 rounded-full"></div>

            </div>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h3 className="text-xl font-bold">
              Daily Streak
            </h3>

            <h1 className="text-6xl font-black mt-4">
              🔥 12
            </h1>

            <p className="text-slate-400">
              Keep going!
            </p>

          </div>

        </div>

        {/* Practice */}

        <h2 className="text-3xl font-bold mt-20">
          Practice Modules
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-8">

          <button className="bg-blue-600 hover:bg-blue-700 rounded-3xl p-10 text-left transition">

            <h2 className="text-3xl">
              🎤
            </h2>

            <h3 className="text-2xl font-bold mt-4">
              Pronunciation
            </h3>

            <p className="mt-3 text-slate-200">
              Read paragraphs and receive AI feedback.
            </p>

          </button>

          <button className="bg-purple-600 hover:bg-purple-700 rounded-3xl p-10 text-left transition">

            <h2 className="text-3xl">
              💼
            </h2>

            <h3 className="text-2xl font-bold mt-4">
              Mock Interview
            </h3>

            <p className="mt-3 text-slate-200">
              Practice HR interview questions.
            </p>

          </button>

          <button className="bg-green-600 hover:bg-green-700 rounded-3xl p-10 text-left transition">

            <h2 className="text-3xl">
              📚
            </h2>

            <h3 className="text-2xl font-bold mt-4">
              Vocabulary
            </h3>

            <p className="mt-3 text-slate-200">
              Learn and practice new words daily.
            </p>

          </button>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;