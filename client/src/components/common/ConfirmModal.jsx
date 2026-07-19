import { motion, AnimatePresence } from "framer-motion";

export default function ConfirmModal({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-8 shadow-2xl">

              <h2 className="text-2xl font-bold text-white">
                {title}
              </h2>

              <p className="mt-3 text-slate-400">
                {message}
              </p>

              <div className="mt-8 flex gap-4">

                <button
                  onClick={onCancel}
                  className="flex-1 rounded-lg border border-slate-600 py-3 text-white hover:bg-slate-800"
                >
                  Cancel
                </button>

                <button
                  onClick={onConfirm}
                  className="flex-1 rounded-lg bg-red-600 py-3 font-semibold text-white hover:bg-red-700"
                >
                  Delete
                </button>

              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}