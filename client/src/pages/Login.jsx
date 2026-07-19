import { Link, useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary login for MVP
    navigate("/dashboard");
  };

  return (
    <section className="min-h-screen bg-slate-950 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl">

        <div className="mb-8 text-center">
          <FiLogIn className="mx-auto mb-4 text-5xl text-blue-500" />

          <h1 className="text-3xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="mt-2 text-slate-400">
            Sign in to manage your listings.
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Login
          </button>

        </form>

        <p className="mt-6 text-center text-slate-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-blue-400 hover:text-blue-300"
          >
            Register
          </Link>
        </p>

      </div>
    </section>
  );
}