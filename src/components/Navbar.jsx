import { Gift, Plus, Minus } from "lucide-react";
import { useEffect, useState } from "react";

function Navbar({ onHowItWorks, onStart }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f7f5f2]/80 backdrop-blur-xl shadow-lg border-b border-[#e6dfd8]"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 lg:px-10 py-5">
        
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="border border-black p-2 rounded-sm bg-white">
            <Gift size={18} />
          </div>

          <div>
            <h1 className="text-xl font-serif">
              the gifting co.
            </h1>

            <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase">
              Find the perfect gift every time
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 lg:gap-10">

          <div className="hidden md:flex items-center gap-5 border border-[#e6dfd8] rounded-full px-6 py-3 bg-white/70 backdrop-blur-md">
            <Minus size={16} className="text-gray-400" />

            <span className="text-gray-400">
              67%
            </span>

            <Plus size={16} className="text-gray-400" />
          </div>

          <button
            onClick={onHowItWorks}
            className="hidden md:block text-sm text-gray-500 hover:text-black transition"
          >
            How it works
          </button>

          <button
            onClick={onStart}
            className="bg-[#9f2d2d] hover:bg-[#822222] transition text-white px-6 lg:px-8 py-3 uppercase tracking-wider text-sm rounded-xl shadow-lg"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;