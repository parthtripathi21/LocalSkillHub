import { Link } from "react-router-dom";
import { FiUserPlus } from "react-icons/fi";

export default function Register() {
  return (
    <section className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl">

        <div className="mb-8 text-center">
          <FiUserPlus className="mx-auto mb-4 text-5xl text-blue-500" />
          <h1 className="text-3xl font-bold text-white">
            Create Account
          </h1>

          <p className="mt-2 text-slate-400">
            Join LocalSkillHub today.
          </p>
        </div>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
          />

          <button
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Register
          </button>

        </form>

        <p className="mt-6 text-center text-slate-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-blue-400 hover:text-blue-300"
          >
            Login
          </Link>
        </p>

      </div>
    </section>
  );
}