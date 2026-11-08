import { useState } from "react";
import { profile } from "../data/portfolio.js";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setForm({ name: "", email: "", message: "" });
      setStatus("Message sent. I’ll get back to you soon.");
    } catch (err) {
      setStatus(`Could not send: ${err.message} You can also email ${profile.email}.`);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact">
      <h2>Let’s work together</h2>
      <p className="mail"><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
      <form onSubmit={submit}>
        <input name="name" value={form.name} onChange={change} placeholder="Your name" required aria-label="Your name" />
        <input name="email" type="email" value={form.email} onChange={change} placeholder="Your email" required aria-label="Your email" />
        <textarea name="message" rows="4" value={form.message} onChange={change} placeholder="Tell me about your project" required aria-label="Message" />
        <button className="btn" type="submit" disabled={sending}>{sending ? "Sending…" : "Send message"}</button>
        <p id="msg" role="status">{status}</p>
      </form>
    </section>
  );
}
