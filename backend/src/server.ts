import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth";

const app = express();

// middlewares
const corsOptions = {
  origin: "https://codetester.vercel.app", 
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204
};

app.options('*', cors(corsOptions));
app.use(cors(corsOptions)); 
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Server Backend LANDAS Aktif!");
});

// routes
app.use("/api/auth", authRoutes);

const PORT = Number(process.env.PORT) || 4000;
const MONGO_URI = process.env.MONGO_URI as string;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on :${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
