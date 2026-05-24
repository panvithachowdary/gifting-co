import { useState } from "react";
import axios from "axios";

function GiftForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const emptyForm = {
    relationship: "",
    occasion: "",
    interests: "",
    budget: "",
    mode: "",
  };

  const [formData, setFormData] = useState(emptyForm);

  const updateField = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const canContinue = () => {
    if (step === 1) return formData.relationship;
    if (step === 2) return formData.occasion;
    if (step === 3) return formData.interests.trim();
    if (step === 4) return formData.budget && formData.mode;
    return false;
  };

  const resetForm = () => {
    setResults([]);
    setStep(1);
    setFormData(emptyForm);
  };

  const findGifts = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/gifts",
        formData
      );

      const parsed = JSON.parse(response.data.result);
      setResults(parsed);
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Check backend terminal.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="min-h-screen bg-[#f7f5f2] flex items-center justify-center px-6">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-[#9f2d2d] border-t-transparent rounded-full animate-spin mx-auto" />
          <h2 className="text-5xl font-serif mt-10">Curating gifts...</h2>
          <p className="text-gray-500 mt-4 text-lg">
            Our AI is finding thoughtful recommendations.
          </p>
        </div>
      </section>
    );
  }

  if (results.length > 0) {
    return (
      <section
        id="gift-form"
        className="min-h-screen bg-[#f7f5f2] px-6 py-24 flex items-center justify-center"
      >
        <div className="max-w-6xl w-full bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-5xl font-serif">Your curated gifts</h2>

          <p className="text-gray-500 mt-4">
            Personalized picks generated for your person.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {results.map((gift, index) => (
              <div
                key={index}
                className="bg-[#faf8f5] border border-[#ece6df] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
                <img
                  src={`https://picsum.photos/600/40${index}`}
                  alt={gift.name}
                  className="w-full h-[240px] object-cover"
                />

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold leading-tight">
                      {gift.name}
                    </h3>

                    <span className="bg-[#9f2d2d] text-white text-sm px-3 py-1 rounded-full whitespace-nowrap">
                      {gift.match}
                    </span>
                  </div>

                  <p className="text-gray-500 mt-4 leading-7">{gift.reason}</p>

                  <div className="flex items-center justify-between mt-6">
                    <p className="font-semibold text-lg">{gift.price}</p>

                    <a
                      href={
                        formData.mode === "Offline"
                          ? `https://www.google.com/maps/search/${encodeURIComponent(
                              gift.name + " gift shop near me"
                            )}`
                          : `https://www.google.com/search?tbm=shop&q=${encodeURIComponent(
                              gift.name + " " + formData.budget + " India"
                            )}`
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#9f2d2d] hover:bg-[#822222] transition text-white px-5 py-3 rounded-xl"
                    >
                      {formData.mode === "Offline"
                        ? "Find Nearby"
                        : "View Gift"}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={resetForm}
            className="mt-12 border border-gray-300 px-8 py-4 rounded-xl"
          >
            Start Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="gift-form"
      className="min-h-screen bg-[#f7f5f2] px-6 py-24 flex items-center justify-center"
    >
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-10">
        <p className="uppercase tracking-[0.3em] text-sm text-gray-400">
          Step {step} of 4
        </p>
        <div className="w-full h-2 bg-[#eee7e1] rounded-full mt-6 overflow-hidden">
  <div
    className="h-full bg-[#9f2d2d] transition-all duration-500"
    style={{
      width: `${(step / 4) * 100}%`,
    }}
  />
</div>

        {step === 1 && (
          <>
            <h2 className="text-5xl font-serif mt-4">
              Who is this gift for?
            </h2>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {["Friend", "Boyfriend", "Girlfriend", "Mother", "Father", "Sibling"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => updateField("relationship", item)}
                    className={`border rounded-xl p-5 text-left ${
                      formData.relationship === item
                        ? "border-[#9f2d2d] bg-[#fdf3f3]"
                        : "border-gray-200"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-5xl font-serif mt-4">What’s the occasion?</h2>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {["Birthday", "Anniversary", "Graduation", "Wedding", "Festival", "Just Because"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => updateField("occasion", item)}
                    className={`border rounded-xl p-5 text-left ${
                      formData.occasion === item
                        ? "border-[#9f2d2d] bg-[#fdf3f3]"
                        : "border-gray-200"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-5xl font-serif mt-4">What do they love?</h2>

            <textarea
              placeholder="Fashion, skincare, gaming, books..."
              className="w-full border border-gray-200 rounded-2xl mt-10 p-6 min-h-[180px] outline-none"
              value={formData.interests}
              onChange={(e) => updateField("interests", e.target.value)}
            />
            <div className="flex flex-wrap gap-3 mt-5">
  {[
    "Fashion",
    "Skincare",
    "Books",
    "Gaming",
    "Tech",
    "Art",
    "Fitness",
    "Food",
    "Home Decor",
    "Jewellery",
  ].map((item) => (
    <button
      key={item}
      onClick={() =>
        updateField(
          "interests",
          formData.interests
            ? formData.interests + ", " + item
            : item
        )
      }
      className="border border-gray-200 px-4 py-2 rounded-full text-sm hover:bg-[#fdf3f3]"
    >
      {item}
    </button>
  ))}
</div>
          </>
        )}

        {step === 4 && (
          <>
            <h2 className="text-5xl font-serif mt-4">What’s your budget?</h2>

            <div className="grid grid-cols-2 gap-4 mt-10">
              {["Under ₹1000", "₹1000 - ₹3000", "₹3000 - ₹5000", "₹5000+"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => updateField("budget", item)}
                    className={`border rounded-xl p-5 text-left ${
                      formData.budget === item
                        ? "border-[#9f2d2d] bg-[#fdf3f3]"
                        : "border-gray-200"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            <h3 className="text-2xl font-serif mt-10">Shopping mode</h3>

            <div className="grid grid-cols-2 gap-4 mt-4">
              {["Online", "Offline"].map((item) => (
                <button
                  key={item}
                  onClick={() => updateField("mode", item)}
                  className={`border rounded-xl p-5 text-left ${
                    formData.mode === item
                      ? "border-[#9f2d2d] bg-[#fdf3f3]"
                      : "border-gray-200"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </>
        )}

        <div className="flex justify-between mt-12">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="border border-gray-300 px-8 py-4 rounded-xl"
            >
              Back
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              onClick={() => {
                if (!canContinue()) {
                  alert("Please complete this step first");
                  return;
                }
                setStep(step + 1);
              }}
              className="bg-[#9f2d2d] text-white px-8 py-4 rounded-xl"
            >
              Continue
            </button>
          ) : (
            <button
              onClick={() => {
                if (!canContinue()) {
                  alert("Please select budget and shopping mode first");
                  return;
                }
                findGifts();
              }}
              disabled={loading}
              className="bg-[#9f2d2d] text-white px-8 py-4 rounded-xl disabled:opacity-60"
            >
              Find Gifts →
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default GiftForm;