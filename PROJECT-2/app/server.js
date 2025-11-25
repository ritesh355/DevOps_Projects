const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect('mongodb://mongo:27017/devops_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ Connected to MongoDB");
}).catch(err => {
  console.error("❌ MongoDB connection error:", err);
});

app.get('/', (req, res) => {
  res.send('🚀 Hello from Node.js + MongoDB!');
});

app.listen(port, () => {
  console.log(`🌐 App running at http://localhost:${port}`);
});

