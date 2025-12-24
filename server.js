import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());


app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ================== ROUTES ===================
app.get("/", async (req, res) => {
  res.json({
    message: "Welcome to Full blog system API",
    version: "1.0.0",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});