import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorksModal from "./components/HowItWorksModal";
import GiftForm from "./components/GiftForm";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  const scrollToForm = () => {
    document.getElementById("gift-form")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f5f2] text-[#1f1f1f] overflow-hidden">
      <AnimatePresence mode="wait">
        {showSplash && <SplashScreen key="splash" />}
      </AnimatePresence>

      {!showSplash && (
        <>
          <Navbar
            onHowItWorks={() => setShowModal(true)}
            onStart={scrollToForm}
          />

          <Hero
            onHowItWorks={() => setShowModal(true)}
            onStart={scrollToForm}
          />

          <GiftForm />

          <HowItWorksModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />
        </>
      )}
    </div>
  );
}

export default App;