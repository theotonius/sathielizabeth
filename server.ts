import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import cors from "cors";
import multer from "multer";

async function startServer() {
  const app = express();
  const PORT = 3000;
  const DATA_FILE = path.join(process.cwd(), "data.json");

  app.use(cors());
  app.use(express.json());
  app.use("/images", express.static(path.join(process.cwd(), "images")));

  app.get("/api/data", (req, res) => {
    try {
      const data = fs.readFileSync(DATA_FILE, "utf-8");
      res.json(JSON.parse(data));
    } catch (error) {
      res.status(500).json({ error: "Failed to read data" });
    }
  });

  app.post("/api/data", (req, res) => {
    try {
      const newData = req.body;
      fs.writeFileSync(DATA_FILE, JSON.stringify(newData, null, 2));
      res.json({ message: "Data updated successfully", data: newData });
    } catch (error) {
      res.status(500).json({ error: "Failed to update data" });
    }
  });

  app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "admin123") {
      res.json({ success: true, token: "demo-token-123" });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });

  const uploadDir = path.join(process.cwd(), "images");
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }
  
  const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
      cb(null, "about-" + uniqueSuffix + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ 
    storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
      const allowedTypes = /jpeg|jpg|png|webp|gif/;
      const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
      const mimetype = allowedTypes.test(file.mimetype);
      if (extname && mimetype) {
        cb(null, true);
      } else {
        cb(new Error("Only image files are allowed"));
      }
    }
  });

  app.post("/api/upload", upload.single("image"), (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }
      const imageUrl = `/images/${req.file.filename}`;
      res.json({ success: true, url: imageUrl });
    } catch (error) {
      res.status(500).json({ error: "Failed to upload image" });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(process.cwd(), "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(process.cwd(), "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
