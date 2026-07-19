import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-blue-500">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-3 text-slate-400">
          The page you are looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}