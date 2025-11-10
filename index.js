import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import connectDB from "./db/mongodb.js";
import express from "express";
import { handleGet, handlePost } from "./controllers/controllers.js";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "./public")));

app.post("/sendfullurl", handlePost);
app.get("/:shorturl", handleGet);
app.get("/*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, "0.0.0.0", () => {
      console.log(`Server is running at http://0.0.0.0:${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
