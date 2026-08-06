const Login = () => {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">

        <h1 className="text-4xl font-black text-center">
          Welcome Back
        </h1>

        <p className="text-slate-400 text-center mt-3">
          Login to continue your FluentX journey.
        </p>

        <form className="mt-10 space-y-6">

          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 outline-none focus:border-blue-500"
          />

          <button
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Login
          </button>

        </form>

        <p className="text-center text-slate-400 mt-8">
          Don't have an account?{" "}
          <span className="text-blue-400 cursor-pointer">
            Sign Up
          </span>
        </p>

      </div>

    </div>
  );
};

export default Login;