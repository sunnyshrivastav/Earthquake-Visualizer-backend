const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());

app.get("/api/earthquakes", async (req, res) => {
  try {
    const response = await fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching earthquakes:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
