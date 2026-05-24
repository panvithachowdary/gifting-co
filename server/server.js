import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/gifts", async (req, res) => {
  try {
    const { relationship, occasion, interests, budget, mode } = req.body;

    const aiResponse = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openrouter/free",
        messages: [
          {
            role: "user",
            content: `
Suggest 5 thoughtful gift ideas.

Relationship: ${relationship}
Occasion: ${occasion}
Interests: ${interests}
Budget: ${budget}
Shopping mode: ${mode}

Return ONLY valid JSON array.
No markdown. No backticks.

Format:
[
  {
    "name": "",
    "reason": "",
    "match": "",
    "price": ""
  }
]
`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    let aiText = aiResponse.data.choices[0].message.content;

    aiText = aiText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const gifts = JSON.parse(aiText);

    const finalResults = await Promise.all(
      gifts.map(async (gift, index) => {
        try {
          const productResponse = await axios.get(
            "https://serpapi.com/search.json",
            {
              params: {
                engine: "google_shopping",
                q: `${gift.name} ${budget} India`,
                api_key: process.env.SERPAPI_KEY,
              },
            }
          );

          const product = productResponse.data.shopping_results?.[0];

          return {
            ...gift,
            image: product?.thumbnail || null,
            buyLink:
              product?.link ||
              `https://www.google.com/search?tbm=shop&q=${encodeURIComponent(
                gift.name + " " + budget + " India"
              )}`,
            source: product?.source || "Google Shopping",
          };
        } catch (error) {
          return {
            ...gift,
            image: null,
            buyLink: `https://www.google.com/search?tbm=shop&q=${encodeURIComponent(
              gift.name + " " + budget + " India"
            )}`,
            source: "Google Shopping",
          };
        }
      })
    );

    res.json({
      results: finalResults,
      offlineSearch:
        mode === "Offline"
          ? `https://www.google.com/maps/search/${encodeURIComponent(
              interests + " gift shops near me"
            )}`
          : null,
    });
  } catch (error) {
    console.log(error.response?.data || error.message);

    res.status(500).json({
      error: "Something went wrong",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});