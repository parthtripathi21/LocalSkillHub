import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiBriefcase, FiUsers } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
        >
          Connecting Customers with Trusted Local Professionals
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl"
        >
          Find Skilled Professionals
          <span className="block text-blue-500">Near You.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-2xl text-lg text-slate-400"
        >
          Hire trusted electricians, plumbers, carpenters, tutors,
          photographers, and more—all from one professional platform.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            to="/services"
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Explore Services
            <FiArrowRight />
          </Link>

          <Link
            to="/register"
            className="rounded-xl border border-slate-700 px-7 py-3 font-semibold text-slate-300 transition hover:border-blue-500 hover:text-white"
          >
            Become a Worker
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid w-full max-w-3xl grid-cols-1 gap-6 md:grid-cols-3"
        >
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <FiUsers className="mx-auto mb-3 text-3xl text-blue-500" />
            <h3 className="text-2xl font-bold text-white">500+</h3>
            <p className="text-slate-400">Verified Workers</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <FiBriefcase className="mx-auto mb-3 text-3xl text-blue-500" />
            <h3 className="text-2xl font-bold text-white">1,000+</h3>
            <p className="text-slate-400">Services Listed</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <FiArrowRight className="mx-auto mb-3 text-3xl text-blue-500" />
            <h3 className="text-2xl font-bold text-white">24/7</h3>
            <p className="text-slate-400">Platform Access</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}