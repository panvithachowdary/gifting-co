import { Gift } from "lucide-react";
import { motion } from "framer-motion";
import FloatingCard from "./FloatingCard";
import Stats from "./Stats";

function Hero({ onHowItWorks, onStart }) {
  return (
    <section className="grid lg:grid-cols-2 min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center px-10 lg:px-20 py-10"
      >
        <h1 className="text-5xl lg:text-[80px] leading-[0.9] font-serif text-[#151515]">
          The art of <br />
          giving the <br />
          <span className="italic text-[#9f2d2d]">perfect</span>
          <br />
          gift.
        </h1>

        <p className="mt-6 text-gray-500 text-lg lg:text-xl leading-8 max-w-xl">
          Tell us about your person. Our AI does the rest — curating gifts that
          feel like you spent weeks thinking about them.
        </p>

        <div className="flex flex-wrap gap-5 mt-8">
          <button
            onClick={onStart}
            className="bg-[#9f2d2d] hover:bg-[#822222] transition text-white px-10 py-5 uppercase tracking-wider"
          >
            Find a Gift →
          </button>

          <button
            onClick={onHowItWorks}
            className="border border-[#ddd5cf] hover:bg-white transition px-10 py-5 text-gray-600"
          >
            See how it works
          </button>
        </div>

        <Stats />
      </motion.div>

      <div className="relative bg-[#e7e2dc] flex items-center justify-center overflow-hidden min-h-[650px]">
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-[350px] lg:w-[500px] h-[350px] lg:h-[500px] rounded-full bg-[#f6f2ee] shadow-inner flex items-center justify-center"
        >
          <Gift size={120} className="text-[#b54a4a]" strokeWidth={1.3} />
        </motion.div>

        <FloatingCard
          title="Perfect Match"
          value="92% score"
          className="absolute top-32 left-10"
        />

        <FloatingCard
          title="Occasion"
          value="Birthday"
          className="absolute top-1/2 left-8"
        />

        <FloatingCard
          title="Budget"
          value="₹2,500–₹5,000"
          className="absolute bottom-32 right-10"
        />
      </div>
    </section>
  );
}

export default Hero;