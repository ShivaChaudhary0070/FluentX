import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-slate-800">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <Link
          to="/"
          className="text-3xl font-black tracking-wide"
        >
          Fluent
          <span className="text-blue-500">
            X
          </span>
        </Link>

        <div className="hidden lg:flex gap-10 text-slate-300">

          <a href="#features" className="hover:text-blue-400 transition">
            Features
          </a>

          <a href="#how" className="hover:text-blue-400 transition">
            How it Works
          </a>

          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>

          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>

        </div>

        <div className="flex gap-4">

          <Link
            to="/login"
            className="border border-slate-700 px-5 py-2 rounded-xl hover:border-blue-500 transition"
          >
            Login
          </Link>

          <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 rounded-xl font-semibold hover:scale-105 transition-all">

            Get Started

          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;