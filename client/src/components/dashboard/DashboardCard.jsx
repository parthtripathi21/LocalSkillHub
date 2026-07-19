import { motion } from "framer-motion";

export default function DashboardCard({
  icon,
  title,
  description,
  onClick,
  disabled = false,
}) {
  return (
    <motion.button
      whileHover={!disabled ? { y: -5, scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={`w-full rounded-2xl border p-8 text-left transition-all
      ${
        disabled
          ? "cursor-not-allowed border-slate-800 bg-slate-900 opacity-70"
          : "border-slate-700 bg-slate-900 hover:border-blue-500 hover:shadow-lg"
      }`}
    >
      <div className="mb-4 text-4xl">{icon}</div>

      <h3 className="mb-2 text-xl font-bold text-white">
        {title}
      </h3>

      <p className="text-sm text-slate-400">
        {description}
      </p>
    </motion.button>
  );
}