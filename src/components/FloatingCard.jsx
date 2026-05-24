import { motion } from "framer-motion";

function FloatingCard({ title, value, className }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className={`bg-white rounded-xl shadow-xl px-6 py-4 border border-[#f0ebe7] ${className}`}
    >
      <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400">
        {title}
      </p>

      <h3 className="mt-1 font-semibold text-gray-700">{value}</h3>
    </motion.div>
  );
}

export default FloatingCard;