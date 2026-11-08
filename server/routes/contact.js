import { Router } from "express";
import Message from "../models/Message.js";

const router = Router();
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// POST /api/contact – save a message from the contact form
router.post("/", async (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ error: "All fields are required." });
  if (!emailRe.test(email)) return res.status(400).json({ error: "Enter a valid email address." });
  try {
    await Message.create({ name, email, message });
    res.status(201).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error. Please try again." });
  }
});

// GET /api/contact – list saved messages (needs x-admin-key header)
router.get("/", async (req, res) => {
  if (!process.env.ADMIN_KEY || req.get("x-admin-key") !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: "Unauthorized." });
  }
  const messages = await Message.find().sort({ createdAt: -1 }).limit(200);
  res.json(messages);
});

export default router;
