import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/gifts", async (req, res) => {
  const { relationship, occasion, interests, budget } = req.body;

  const gifts = [
    {
      name: `Personalized ${interests || "memory"} gift box`,
      reason: `A thoughtful option for a ${relationship} on ${occasion}, matching their interests.`,
      match: "94%",
      price: budget || "₹1000 - ₹3000",
    },
    {
      name: "Customized photo frame",
      reason: "Feels personal, emotional, and budget-friendly.",
      match: "91%",
      price: "₹500 - ₹1500",
    },
    {
      name: "Self-care hamper",
      reason: "Great for someone who enjoys comfort, relaxation, and useful gifts.",
      match: "88%",
      price: "₹1000 - ₹2500",
    },
    {
      name: "Premium journal with pen set",
      reason: "Useful, aesthetic, and suitable for most occasions.",
      match: "85%",
      price: "₹700 - ₹2000",
    },
    {
      name: "Mini desk decor lamp",
      reason: "Cute, practical, and adds personality to their room or desk.",
      match: "82%",
      price: "₹800 - ₹2500",
    },
  ];

  res.json({
    result: JSON.stringify(gifts),
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});