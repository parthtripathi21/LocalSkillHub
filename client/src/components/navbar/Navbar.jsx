import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  // { name: "How It Works", path: "/#how-it-works" },
  // { name: "Contact", path: "/#footer" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-600/30">
            LS
          </div>

          <div className="leading-tight">
            <h1 className="text-lg font-bold text-white">
              LocalSkillHub
            </h1>

            <p className="text-xs text-slate-400">
              Trusted Local Professionals
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition ${
                  isActive
                    ? "text-blue-400"
                    : "text-slate-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-blue-500"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="rounded-xl border border-slate-700 px-5 py-2 text-sm font-medium text-slate-300 transition hover:border-blue-500 hover:text-white"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-white md:hidden"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="border-t border-slate-800 bg-slate-950 md:hidden"
          >
            <div className="flex flex-col gap-1 p-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-slate-300 hover:bg-slate-900"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <hr className="my-3 border-slate-800" />

              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="rounded-lg border border-slate-700 px-4 py-3 text-center text-slate-300"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}