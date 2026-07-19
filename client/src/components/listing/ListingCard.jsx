import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function ListingCard({ listing }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-md transition hover:border-blue-500 hover:shadow-blue-500/10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">
          {listing.title}
        </h2>

        <span className="rounded-full bg-blue-600/20 px-3 py-1 text-xs font-medium text-blue-400">
          {listing.category}
        </span>
      </div>

      <p className="mb-5 text-sm leading-6 text-slate-400">
        {listing.description}
      </p>

      <div className="space-y-2 text-sm text-slate-300">
        <div className="flex items-center gap-2">
          <FiMapPin className="text-blue-400" />
          {listing.location}
        </div>

        <div className="flex items-center gap-2">
          <FiPhone className="text-blue-400" />
          {listing.phone}
        </div>

        <div className="flex items-center gap-2">
          <FiMail className="text-blue-400" />
          {listing.email}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-xl font-bold text-blue-400">
          ₹{listing.price}
        </span>

        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
          Contact
        </button>
      </div>
    </div>
  );
}