import { useEffect, useState } from "react";

function Navbar({ onHowItWorks, onStart }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 h-[82px] transition-all duration-300 ${
        scrolled
          ? "bg-[#f7f5f2]/90 backdrop-blur-xl shadow-md border-b border-[#ece6df]"
          : "bg-[#f7f5f2]/90 backdrop-blur-md border-b border-[#eee7e1]"
      }`}
    >
      <div className="h-full flex items-center justify-between px-8 lg:px-16">
      <div className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt="logo"
    className="w-10 h-10 object-contain"
  />

  <div>
    <h1 className="text-2xl font-serif leading-none">
      the gifting co.
    </h1>

    <p className="text-[9px] tracking-[0.3em] text-gray-400 uppercase mt-1">
      Find the perfect gift every time
    </p>
  </div>
</div>

        <div className="flex items-center gap-8">
          <button
            onClick={onHowItWorks}
            className="hidden md:block text-base text-gray-500 hover:text-black transition"
          >
            How it works
          </button>

          <button
            onClick={onStart}
            className="bg-[#9f2d2d] hover:bg-[#822222] transition text-white px-8 py-3 rounded-xl uppercase tracking-wider text-sm shadow-lg"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;