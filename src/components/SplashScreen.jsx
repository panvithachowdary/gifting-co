import { motion } from "framer-motion";

function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-0 z-[9999] bg-[#f7f5f2] flex items-center justify-center overflow-hidden"
    >
      {/* Left opening panel */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          delay: 1.3,
          duration: 0.9,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute left-0 top-0 w-1/2 h-full bg-[#e7ddd3]"
      />

      {/* Right opening panel */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{
          delay: 1.3,
          duration: 0.9,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute right-0 top-0 w-1/2 h-full bg-[#e7ddd3]"
      />

      {/* Ribbon Horizontal */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute w-full h-3 bg-[#9f2d2d]"
      />

      {/* Ribbon Vertical */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute h-full w-3 bg-[#9f2d2d]"
      />

      {/* Logo Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <motion.img
          src="/logo.png"
          alt="The Gifting Co"
          initial={{ y: 30, rotate: -10 }}
          animate={{ y: 0, rotate: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="w-20 h-20 object-contain mx-auto"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-6 text-5xl lg:text-6xl font-serif text-[#151515]"
        >
          the gifting co.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-4 text-[10px] uppercase tracking-[0.4em] text-gray-400"
        >
          Find the perfect gift every time
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default SplashScreen;