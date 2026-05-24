import { X, Sparkles, Search, Gift } from "lucide-react";

function HowItWorksModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center px-4">
      <div className="bg-[#f7f5f2] max-w-3xl w-full rounded-2xl p-8 relative shadow-2xl">
        <button onClick={onClose} className="absolute top-5 right-5">
          <X />
        </button>

        <h2 className="text-5xl font-serif text-[#9f2d2d]">
          How it works
        </h2>

        <p className="mt-4 text-gray-500 text-lg">
          We understand the person, occasion, budget, and style — then suggest gifts that actually feel personal.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-6 rounded-xl">
            <Sparkles className="text-[#9f2d2d]" />
            <h3 className="font-semibold mt-4">Tell us details</h3>
            <p className="text-gray-500 mt-2">
              Add age, relationship, interests, occasion, and budget.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <Search className="text-[#9f2d2d]" />
            <h3 className="font-semibold mt-4">AI finds ideas</h3>
            <p className="text-gray-500 mt-2">
              Our system creates personalized gift matches.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <Gift className="text-[#9f2d2d]" />
            <h3 className="font-semibold mt-4">Get results</h3>
            <p className="text-gray-500 mt-2">
              View curated gifts with match score and reason.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorksModal;