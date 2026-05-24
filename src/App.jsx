import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorksModal from "./components/HowItWorksModal";
import GiftForm from "./components/GiftForm";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f5f2] text-[#1f1f1f] overflow-hidden">
      
      <Navbar
  onHowItWorks={() => setShowModal(true)}
  onStart={() => {
    document.getElementById("gift-form").scrollIntoView({
      behavior: "smooth",
    });
  }}
/>
      <Hero
  onHowItWorks={() => setShowModal(true)}
  onStart={() => {
    document.getElementById("gift-form").scrollIntoView({
      behavior: "smooth",
    });
  }}
/>

      {/* ADD HERE */}
      <GiftForm />

      <HowItWorksModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}

export default App;