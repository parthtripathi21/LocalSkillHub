import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
    <section className="bg-slate-950 py-8">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4 md:flex-row">

          <input
            type="text"
            placeholder="Search services..."
            className="flex-1 rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500"
          />

          <select className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-blue-500">
            <option>All Categories</option>
            <option>Education</option>
            <option>Repair</option>
            <option>Cleaning</option>
            <option>Design</option>
            <option>Gardening</option>
          </select>

          <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
            <FiSearch />
            Search
          </button>

        </div>
      </div>
    </section>
  );
}