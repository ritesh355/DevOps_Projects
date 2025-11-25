const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🚀 Hello from Jenkins CI/CD + Docker + Node.js! this is Ritesh");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

